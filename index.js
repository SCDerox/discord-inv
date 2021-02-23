const centra = require('@aero/centra');

exports.getInv = async function (inviteCode, imgSize = 64, withCounts = true) {
    return new Promise(async (resolve, reject) => {
        centra(`https://discord.com/api/v8/invites/${inviteCode}?with_counts=${withCounts}`, 'GET').send().then(result => {
            if (result.statusCode !== 200) return reject(result.statusCode);
            let answer = JSON.parse(result.body.toString());
            answer.url = answer.code ? `https://discord.com/invite/${answer.code}` : null;
            answer.guild.iconURL = answer.guild.icon ? `https://cdn.discordapp.com/icons/${answer.guild.id}/${answer.guild.icon}?size=${imgSize}` : null;
            answer.guild.bannerURL = answer.guild.banner ? `https://cdn.discordapp.com/banners/${answer.guild.id}/${answer.guild.banner}?size=${imgSize}` : null;
            answer.guild.splashURL = answer.guild.splash ? `https://cdn.discordapp.com/splashes/${answer.guild.id}/${answer.guild.splash}?size=${imgSize}` : null;
            if (answer.inviter) {
                answer.inviter.tag = `${answer.inviter.username}#${answer.inviter.discriminator}`;
                answer.inviter.avatarURL = answer.inviter.avatar ? `https://cdn.discordapp.com/avatars/${answer.inviter.id}/${answer.inviter.avatar}?size=${imgSize}` : null;
            }
            resolve(answer);
        });
    });
};

exports.getCodeFromUrl = function (url) {
    url = url.split('discord.com/').join('');
    url = url.split('discord.gg/').join('');
    url = url.split('invite/').join('');
    url = url.split('discordapp.com/').join('');
    url = url.split('https://').join('');
    url = url.split('http://').join('');
    return url;
};