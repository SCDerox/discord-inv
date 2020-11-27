const discordInv = require("../index")
const inviteurl = "https://discord.gg/v9XHeeGbm3";

discordInv.getInv(discordInv.getCodeFromUrl(inviteurl)).then(invite => {
    console.log(invite)
}).catch(() => console.log("This is not a valid invite"))