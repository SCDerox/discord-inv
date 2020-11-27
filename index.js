const centra = require('@aero/centra');

exports.getInv = async function (inviteCode, withCounts = true) {
    return new Promise(async (resolve, reject) => {
        centra("https://discord.com/api/v8/invites/" + inviteCode + "?with_counts=" + withCounts, "GET").send().then(result => {
            if (result.statusCode !== 200) return reject(result.statusCode)
            let answer = JSON.parse(result.body.toString());
            if (answer.guild.icon) answer.guild["iconURL"] = "https://cdn.discordapp.com/icons/" + answer.guild.id + "/" + answer.guild.icon
            if (answer.guild.banner) answer.guild["bannerURL"] = "https://cdn.discordapp.com/banners/" + answer.guild.id + "/" + answer.guild.banner
            if (answer.guild.splash) answer.guild["splashURL"] = "https://cdn.discordapp.com/splashes/" + answer.guild.id + "/" + answer.guild.splash
            if (answer.inviter) answer.inviter["tag"] = answer.inviter.username + "#" + answer.inviter.discriminator
            resolve(answer)
        });
    })
}

exports.getCodeFromUrl = function(url) {
    url = url.split("discord.com/").join("")
    url = url.split("discord.gg/").join("")
    url = url.split("invite/").join("")
    url = url.split("discordapp.com/").join("")
    url = url.split("https://").join("")
    url = url.split("http://").join("")
    return url;
}