
let XNXXDL = require('api-dylux');let xnxxconfig = XNXXDL.xnxxconfig; let XnxxHub = XNXXDL.Xnxxdd;let img = XNXXDL.img; let XnxxWA = XNXXDL.xnxxhandler
let WorkType = xnxxconfig.WORKTYPE == 'public' ? false : true
let { MessageType } = require('@adiwajshing/baileys');

 
 // Xnxx Download With Unlimeted Access....xnxx Your Xnxx Link
XnxxWA.IntroduceCMD({pattern: 'xnxx ?(.*)', fromMe: true},( async (dlxnxx, input) => {
var Xnxxreg = /https:\/\/www\.xnxx\.com\/video/
if(Xnxxreg.test(input[1])) {
await XnxxHub.xnxxVideoDownloader(dlxnxx, input)
 } else if(input[1].includes('/-/')) {
await XnxxHub.xdlxnxx(dlxnxx, input)
} else {
return await dlxnxx.client.sendMessage(dlxnxx.jid, 'Need Xnxx Video Link', MessageType.text);
}
  }));

XnxxWA.IntroduceCMD({pattern: 'xnxx ?(.*)', fromMe: false},( async (dlxnxx, input) => {
if(WorkType) return;
var Xnxxreg = /https:\/\/www\.xnxx\.com\/video/
if(Xnxxreg.test(input[1])) {
await XnxxHub.xnxxVideoDownloader(dlxnxx, input)
 } else if(input[1].includes('/-/')) {
await XnxxHub.xdlxnxx(dlxnxx, input)
} else {
return await dlxnxx.client.sendMessage(dlxnxx.jid, 'Need Xnxx Video Link', MessageType.text);
}
  }));

XnxxWA.IntroduceCMD({pattern: 'img ?(.*)', fromMe: true},( async (dlxnxx, input) => {
await img.SexImageGenarater(dlxnxx, input)
  }));

XnxxWA.IntroduceCMD({pattern: 'img ?(.*)', fromMe: false},( async (dlxnxx, input) => {
 if(WorkType) return;
await img.SexImageGenarater(dlxnxx, input)
  }));


XnxxWA.IntroduceCMD({pattern: 'snxx ?(.*)', fromMe: true},( async (dlxnxx, input) => {
if(input[1] = '') return await XnxxHub.difsearchxnxx(dlxnxx, input);
await XnxxHub.searchxnxx(dlxnxx, input)
  }));
XnxxWA.IntroduceCMD({pattern: 'snxx ?(.*)', fromMe: false},( async (dlxnxx, input) => {
if(WorkType) return;
if(input[1] = '') return await XnxxHub.difsearchxnxx(dlxnxx, input);
await XnxxHub.searchxnxx(dlxnxx, input)
  }));
