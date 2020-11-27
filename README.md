# discord-inv

<p align="center"><a href="https://nodei.co/npm/discord-inv/"><img alt="npm package stats" src="https://nodei.co/npm/discord-inv.png"></a></p>

* NPM package that gets information about an invite from the discord api
* Useful for websites where users can input their invite-links
* Useful for bots to detect invites which are not for this guild 
* Supports the Promise-API, so you can use .then, .catch and all the other stuff 😉

# Install [NPM](https://www.npmjs.com/package/discord-inv)

 `$ npm i discord-inv --save`

# Usage

- `getInv(invite_code, with_counds = true)` - Get information about an invite
- `getCodeFromUrl(url)` - Format a discord-invite-url to the invite-code

# Examples

```javascript
const discordInv = require("discord-inv");

const inviteurl = "https://discord.gg/v9XHeeGbm3";

discordInv.getInv(discordInv.getCodeFromUrl(inviteurl)).then(invite => {
    console.log(invite)
}).catch(console.log("This is not a valid invite"))

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
    icon: null,
    features: [],
    verification_level: 0,
    vanity_url_code: null
  },
  channel: { id: '781921854574821387', name: 'welcome', type: 0 },
  inviter: {
    id: '413429490342035466',
    username: 'SCDerox',
    avatar: '6baad6458df9412b2e62965c5db7fd8f',
    discriminator: '4645',
    public_flags: 64,
    tag: 'SCDerox#4645'
  },
  approximate_member_count: 1,
  approximate_presence_count: 1
}
*/

```
© SCDerox, 2020 | mail[at]scderox.de