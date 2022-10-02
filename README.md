# discord-inv

<p align="center"><a href="https://nodei.co/npm/discord-inv/"><img alt="npm package stats" src="https://nodei.co/npm/discord-inv.png"></a></p>
<p align="center"><a href="https://github.com/scderox/discord-inv?sponsor=1">&hearts; Sponsor</a> or <a href="https://github.com/SCDerox/discord-inv">★ Star</a></p>

# Features

* New: TypeScript support
* NPM package that gets information about an invite from the discord api
* Useful for websites where users can input their invite-links
* Useful for bots to detect invites which are not for this guild
* Support for scheduled guild event querying in invites
* Supports the Promise-API, so you can use .then, .catch and all the other stuff 😉

# Install from [NPM](https://www.npmjs.com/package/discord-inv)

`$ npm i discord-inv --save`

# Usage

## Get invite data by code

- `getInvite(code, withCounts = false, eventID)` - Get information about an invite using the invite-code
    - Parameters
        - `code` (string): Code of the invite
        - `withCounts` (optional, boolean): `approximate_member_count` and `approximate_presence_count` are only going
          to be returned, if set to true (default = false)
        - `eventID` (optional, snowflake): Snowflake of an scheduled event. `guild_scheduled_event` will only be set, if
          this is valid.
    -
  Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Invite](#invite-class)>

## Extract data from Invite-URL

- `getInviteDataFromURL(inviteURL)` - Extracts the code & event-id from any discord invite url (won't call the Discord
  API)
    - Parameters
        - `inviteURL` (string): Full Discord-URL of an invite
    - Returns: Object
        - `url`: parsed [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)
        - `code`: Extracted code of the invite
        - `eventID` (can be null): Extracted eventID of the invite

## Get invite data by Invite-URL

- `getInviteFromURL(url, withCounts = false, eventID)` - Get information about an invite using an invite-url. Basically
  combines [getInviteDataFromURL](#extract-data-from-invite-url) and [getInvite](#get-invite-data-by-code).
    - Parameters
        - `url` (string): Full Discord-URL of an invite
        - `withCounts` (optional, boolean): `approximate_member_count` and `approximate_presence_count` are only going
          to be returned, if set to true (default = false)
    -
  Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Invite](#invite-class)>

## Invite-Class

Please see [APIInvite](https://discord-api-types.dev/api/discord-api-types-v10/interface/APIInvite) for details about
invites. We might add more props / functions later, but currently only the parameters listed there are available.

# Examples

```javascript
const discordInv = require('discord-inv');

const inviteurl = 'https://discord.com/invite/73JH6HT2?event=1026160493125189653';

discordInv.getInviteFromURL(inviteurl, true).then(invite => {
    console.log(invite)
}).catch(console.log('This is not a valid invite'))

/*
OUTPUT: 

Invite {
  code: 'hVv59YA9',
  type: 0,
  expires_at: '2022-10-09T18:24:06+00:00',
  guild: {
    id: '510432380209725441',
    name: 'Test2',
    splash: null,
    banner: null,
    description: null,
    icon: 'bc48e444cd9e5bf4a0e8ac25fb2fecc2',
    features: [
      'NEW_THREAD_PERMISSIONS',
      'NEWS',
      'COMMUNITY',
      'THREADS_ENABLED_TESTING',
      'INVITES_DISABLED',
      'THREADS_ENABLED',
      'TEXT_IN_VOICE_ENABLED'
    ],
    verification_level: 1,
    vanity_url_code: null,
    premium_subscription_count: 0,
    nsfw: false,
    nsfw_level: 0
  },
  channel: { id: '977631413484531723', name: 'lol', type: 2 },
  inviter: {
    id: '413429490342035466',
    username: 'SCDerox',
    avatar: '81681c7ea180ce648c25d35279b888b8',
    avatar_decoration: null,
    discriminator: '4645',
    public_flags: 64
  },
  approximate_member_count: 17,
  approximate_presence_count: 7,
  guild_scheduled_event: {
    id: '1026160493125189653',
    guild_id: '510432380209725441',
    channel_id: '977631413484531723',
    creator_id: '413429490342035466',
    name: 'test',
    description: null,
    image: null,
    scheduled_start_time: '2022-10-04T17:00:00+00:00',
    scheduled_end_time: null,
    privacy_level: 2,
    status: 1,
    entity_type: 2,
    entity_id: null,
    entity_metadata: null,
    sku_ids: [],
    user_count: 1
  }
}
*/
```

# Migration from v1 to v2

Well, the whole module got reworked in v2, so bascially everything changes. We advise you to either continue using v1 or
re-implementing all the parts using discord-inv.

# Contributing

Feel free to create any issues and PRs in our [github repository](https://github.com/SCDerox/discord-inv) if you want to
contribute.

© Simon Csaba, 2020-2022 | mail[at]scderox.de