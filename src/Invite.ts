import {APIApplication, APIInvite, APIPartialChannel, InviteTargetType} from "discord-api-types/v10";
import {APIInviteGuild} from "discord-api-types/payloads/v10/invite";
import {APIUser} from "discord-api-types/payloads/v10/user";
import {APIInviteStageInstance} from "discord-api-types/payloads/v10/stageInstance";
import {APIGuildScheduledEvent} from "discord-api-types/payloads/v10/guildScheduledEvent";

export class Invite implements APIInvite {
    approximate_member_count: number;
    approximate_presence_count: number;
    channel: Required<APIPartialChannel> | null;
    code: string;
    expires_at: string | null;
    guild: APIInviteGuild;
    guild_scheduled_event: APIGuildScheduledEvent;
    inviter: APIUser;
    stage_instance: APIInviteStageInstance;
    target_application: Partial<APIApplication>;
    target_type: InviteTargetType;
    target_user: APIUser;

    constructor(inviteData: object) {
        for (const data in inviteData) {
            this[data] = inviteData[data];
        }
    }
}