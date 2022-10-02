import {getInvite, getInviteDataFromURL, getInviteFromURL} from "../src";

getInvite('73JH6HT2', true, '1026160493125189653').then(console.log)
console.log(getInviteDataFromURL('https://discord.com/invite/73JH6HT2?event=1026160493125189653'),
getInviteDataFromURL('https://discord.gg/73JH6HT2?event=1026160493125189653'))

getInviteFromURL('https://discord.gg/73JH6HT2?event=1026160493125189653').then(console.log)