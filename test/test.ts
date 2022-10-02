import {getInviteFromURL} from "../src";

const inviteurl = 'https://discord.gg/hVv59YA9?event=1026160493125189653';

getInviteFromURL(inviteurl, true).then(invite => {
    console.log(invite)
}).catch(() => console.log('This is not a valid invite'))