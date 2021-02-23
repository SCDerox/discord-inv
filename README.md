# discord-inv

<p align="center"><a href="https://nodei.co/npm/discord-inv/"><img alt="npm package stats" src="https://nodei.co/npm/discord-inv.png"></a></p>

* NPM package that gets information about an invite from the discord api
* Useful for websites where users can input their invite-links
* Useful for bots to detect invites which are not for this guild
* Supports the Promise-API, so you can use .then, .catch and all the other stuff 😉

Check out or website [discordinvite.info](https://discordinvite.info).

# Install from [NPM](https://www.npmjs.com/package/discord-inv)

`$ npm i discord-inv --save`

# Usage

- `getInv(inviteCode, imgSize = 64 , withCounts = true)` - Get information about an invite
    - `inviteCode`: Code of the invite
    - `imgSize`: Size of all images (default: 64)
    - `withCounts`: If disabled `approximate_member_count` and `approximate_presence_count` are not going to be returned (default = false)
- `getCodeFromUrl(url)` - Format a discord-invite-url to the invite-code
    - `url`: Full Discord-URL of an invite

# Examples

```javascript
const discordInv = require('discord-inv');

const inviteurl = 'https://discord.gg/v9XHeeGbm3';

discordInv.getInv(discordInv.getCodeFromUrl(inviteurl)).then(invite => {
    console.log(invite)
}).catch(console.log('This is not a valid invite'))

/*
OUTPUT: 

{
  code: 'v9XHeeGbm3',
  guild: {
    id: '781921152745996318',
    name: 'Join this server!',
    splash: null,
    banner: null,
    description: null,
    icon: '02404df212218b0a7830a88157108cc6',
    features: [ 'COMMUNITY', 'NEWS', 'WELCOME_SCREEN_ENABLED' ],
    verification_level: 1,
    vanity_url_code: null,
    welcome_screen: {
      description: 'Welcome! Have fun in this very very good community!',
      welcome_channels: [Array]
    },
    iconURL: 'https://cdn.discordapp.com/icons/781921152745996318/02404df212218b0a7830a88157108cc6?size=64',
    bannerURL: null,
    splashURL: null
  },
  channel: { id: '781921854574821387', name: 'welcome', type: 0 },
  inviter: {
    id: '413429490342035466',
    username: 'SCDerox',
    avatar: '26fc0047afde07259c756d60232fdffc',
    discriminator: '4645',
    public_flags: 64,
    tag: 'SCDerox#4645',
    avatarURL: 'https://cdn.discordapp.com/avatars/413429490342035466/26fc0047afde07259c756d60232fdffc?size=64'
  },
  approximate_member_count: 12,
  approximate_presence_count: 4,
  url: 'https://discord.com/invite/v9XHeeGbm3'
}
*/
```

# Contributing
Feel free to create any issues and PRs in our [github repository](https://github.com/SCDerox/discord-inv) if you want to contribute.



© Simon Csaba, 2020-2021 | mail[at]scderox.de