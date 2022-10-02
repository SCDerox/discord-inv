import {InviteFetchError} from "./InviteFetchError";
import {Snowflake} from "discord-api-types/globals";
import {Invite} from "./Invite";

const centra = require('centra')

interface InviteData {
    /**
     * URL of the invite
     */
    url: URL,
    /**
     * Code of the invite
     */
    code: string,
    /**
     * Snowflake of a scheduled guild event
     */
    eventID?: Snowflake
}

/**
 * Extracts data from an discord invite url
 * @param {string} inviteURL URL to extract data from
 * @returns {InviteData} Extracted data from URL
 */
export function getInviteDataFromURL(inviteURL: string) {
    const url = new URL(inviteURL);
    if (url.hostname !== 'discord.gg' && url.hostname !== 'discord.com') throw new Error('Invalid URL: Please use a discord.com or discord.gg invite url');
    const eventID = url.searchParams.get('event');
    return {url, eventID, code: url.pathname.replaceAll('/invite', '').replaceAll('/', '')} as InviteData
}

/**
 * Extracts data from an invite url and queries the invite from the Discord API
 * @param {string} inviteURL Discord-Invite-URL
 * @param {boolean} withCounts `approximate_member_count` and `approximate_presence_count` will only be set, if this is true
 * @returns {Promise<Invite>} Queried invite
 */
export async function getInviteFromURL(inviteURL: string, withCounts: boolean = false) {
    const inviteData = getInviteDataFromURL(inviteURL);
    return getInvite(inviteData.code, withCounts, inviteData.eventID)
}

/**
 * Queries an invite from the Discord API by its code
 * @param {string} code Code of the invite to query
 * @param {boolean} withCounts `approximate_member_count` and `approximate_presence_count` will only be set, if this is true
 * @param {Snowflake} eventID Snowflake of an event associated with the invite. `guild_scheduled_event` will only be set, if this is valid
 * @return {Promise<Invite>} Fetched invite
 */
export async function getInvite(code: string, withCounts: boolean = false, eventID?: Snowflake) {
    const res = await centra(`https://discord.com/api/v8/invites/${code}?with_counts=${withCounts}${eventID ? `&guild_scheduled_event_id=${eventID}` : ''}`, 'GET').send();
    if (res.statusCode !== 200) throw new InviteFetchError(JSON.parse(res.body.toString()));
    return new Invite(JSON.parse(res.body.toString()))
}