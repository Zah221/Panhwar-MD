function _0x24f9(){const _0xfb9332=['group','length','filter','kickall','Only\x20the\x20bot\x20owner\x20can\x20use\x20this\x20command.','Only\x20group\x20admins\x20can\x20use\x20this\x20command.','An\x20error\x20occurred\x20while\x20trying\x20to\x20remove\x20members.\x20Please\x20try\x20again.','Error\x20kicking\x20users:','participants','\x20non-admin\x20members...','18840eWKbco','12nYjczi','862768IojWHA','5985679YoiekG','2ElnNbO','40BFEqsd','../config','user','error','592182uDuQrD','groupParticipantsUpdate','164127Rvbyho','This\x20command\x20is\x20only\x20available\x20in\x20groups.','Starting\x20to\x20kick\x20','699429CmXeni','Successfully\x20removed\x20all\x20non-admin\x20members\x20from\x20the\x20group.','includes','2118065pjQMDk','I\x20need\x20admin\x20privileges\x20to\x20kick\x20members.'];_0x24f9=function(){return _0xfb9332;};return _0x24f9();}const _0x48ead6=_0x367f;(function(_0x22b980,_0x756995){const _0x2e373d=_0x367f,_0x389d99=_0x22b980();while(!![]){try{const _0x4bd289=-parseInt(_0x2e373d(0x96))/0x1*(parseInt(_0x2e373d(0x8f))/0x2)+parseInt(_0x2e373d(0x99))/0x3+parseInt(_0x2e373d(0x8b))/0x4+-parseInt(_0x2e373d(0x7f))/0x5*(-parseInt(_0x2e373d(0x8c))/0x6)+-parseInt(_0x2e373d(0x8e))/0x7+parseInt(_0x2e373d(0x8d))/0x8+parseInt(_0x2e373d(0x94))/0x9*(parseInt(_0x2e373d(0x90))/0xa);if(_0x4bd289===_0x756995)break;else _0x389d99['push'](_0x389d99['shift']());}catch(_0x6dccd1){_0x389d99['push'](_0x389d99['shift']());}}}(_0x24f9,0x6aa9d));const config=require(_0x48ead6(0x91)),{cmd,commands}=require('../command'),sleep=_0x2b6a08=>new Promise(_0x3265f9=>setTimeout(_0x3265f9,_0x2b6a08)),KICK_DELAY_MS=0x7d0;function _0x367f(_0x447904,_0x40d121){const _0x24f950=_0x24f9();return _0x367f=function(_0x367f14,_0x5b4d84){_0x367f14=_0x367f14-0x7e;let _0x288684=_0x24f950[_0x367f14];return _0x288684;},_0x367f(_0x447904,_0x40d121);}cmd({'pattern':_0x48ead6(0x84),'desc':'Kicks\x20all\x20non-admin\x20members\x20from\x20the\x20group.','react':'👏','category':_0x48ead6(0x81),'filename':__filename},async(_0x56bac9,_0x551326,_0x31544f,{from:_0x5ab954,quoted:_0x24d541,body:_0x3c8b0a,isCmd:_0x2d9691,command:_0x2c9d43,args:_0x5c426c,q:_0x5be0c2,isGroup:_0x2d5bca,sender:_0x2ae37d,senderNumber:_0x45a69d,botNumber2:_0x480ed4,botNumber:_0x46889e,pushname:_0x3c88fe,isMe:_0x57cc59,isOwner:_0x309ad0,groupMetadata:_0x2c0bc0,groupName:_0x2a07d8,participants:_0x12d9e5,groupAdmins:_0x205311,isBotAdmins:_0x4a33a0,isAdmins:_0x1ad53a,reply:_0x5b5809})=>{const _0x3da381=_0x48ead6;try{if(!_0x1ad53a)return _0x5b5809(_0x3da381(0x86));if(!_0x309ad0)return _0x5b5809(_0x3da381(0x85));if(!_0x2d5bca)return _0x5b5809(_0x3da381(0x97));if(!_0x4a33a0)return _0x5b5809(_0x3da381(0x80));const _0x598864=_0x2c0bc0[_0x3da381(0x89)],_0x445865=_0x598864[_0x3da381(0x83)](_0x2b7aad=>!_0x205311[_0x3da381(0x7e)](_0x2b7aad['id'])&&_0x2b7aad['id']!==_0x56bac9[_0x3da381(0x92)]['id']);if(_0x445865[_0x3da381(0x82)]===0x0)return _0x5b5809('No\x20non-admin\x20members\x20found\x20to\x20kick.');_0x5b5809(_0x3da381(0x98)+_0x445865[_0x3da381(0x82)]+_0x3da381(0x8a));for(let _0x3700c2 of _0x445865){try{await _0x56bac9[_0x3da381(0x95)](_0x5ab954,[_0x3700c2['id']],'remove'),await sleep(KICK_DELAY_MS);}catch(_0x1b688c){console[_0x3da381(0x93)]('Failed\x20to\x20remove\x20'+_0x3700c2['id']+':',_0x1b688c);}}_0x5b5809(_0x3da381(0x9a));}catch(_0x58230d){console[_0x3da381(0x93)](_0x3da381(0x88),_0x58230d),_0x5b5809(_0x3da381(0x87));}});
