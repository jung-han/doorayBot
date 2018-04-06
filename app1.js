const http = require('http');
const schedule = require('node-schedule');
const request = require('request');
const CONFIG = require('./config/config.json');

const server = http.createServer((req, res) => {});
const makeSchedule = (argsObj) => {
  const {message, HH, MM, URI, imgURL, linkTitle, linkURL, botName} = argsObj;
  return schedule.scheduleJob({hour: HH, minute: MM, dayOfWeek: new schedule.Range(1,5)}, function(){
    console.log(botName+" 전송");
    request.post({
      headers: {'content-type' : 'application/json'},
      uri: URI,
      json:  {
        "botName" : botName,
        "botIconImage" : imgURL,
        "text" : message,
        "attachments" : [
          {
          "title" : linkTitle,
          "titleLink" : linkURL,
          "text" : "클릭하면 이동합니다.",
          "color" : "red"
          }
        ]
      }
    })
  });
}

server.listen(CONFIG.port, CONFIG.hostname, () => {
  console.log('server start');
  makeSchedule({
    message: "점심메뉴 볼 시간이다~", 
    HH: 12,
    MM: 20, 
    URI: CONFIG.NTP_URL,
    imgURL: CONFIG.jenkinsIMG, 
    linkTitle: "이번주 메뉴",
    linkURL: CONFIG.weekMenu,
    botName: "[젠킨스씨]"
  });
  makeSchedule({
    message: "점심메뉴 볼 시간이다~", 
    HH: 12,
    MM: 00, 
    URI: CONFIG.LL_URL,
    imgURL: CONFIG.jenkinsIMG, 
    linkTitle: "이번주 메뉴",
    linkURL: CONFIG.weekMenu,
    botName: "[젠킨스씨]"
  });
  makeSchedule({
    message: "미리 볼거임 ㅋㅋ", 
    HH: 18,
    MM: 06, 
    URI: CONFIG.LL_URL,
    imgURL: CONFIG.duckIMG, 
    linkTitle: "이번주 메뉴",
    linkURL: CONFIG.weekMenu,
    botName: "한덕선봇"
  });
  makeSchedule({
    message: "민수할뻔 하셨죠? 링크를 클릭해서 민수하지말자!", 
    HH: 14,
    MM: 00, 
    URI: CONFIG.LL_URL,
    imgURL: CONFIG.minsooIMG, 
    linkTitle: "잠 깨는법",
    linkURL: "http://www.kuccblog.net/797",
    botName: "박민수봇"
  });
  makeSchedule({
    message: "벌써 6시 29분이네요. 고생많으셨습니다. 집가기 전에 저녁메뉴 한번 보고가세요!", 
    HH: 18,
    MM: 29, 
    URI: CONFIG.RR5th_URL,
    imgURL: CONFIG.joonhyunIMG, 
    linkTitle: "이번주 메뉴",
    linkURL: CONFIG.weekMenu,
    botName: "김준현[퇴근봇]"
  });
  makeSchedule({
    message: "12시 25분이네요. 배고프시죠? 식사 전에 메뉴 한번 보고가세요!", 
    HH: 12,
    MM: 25, 
    URI: CONFIG.RR5th_URL,
    imgURL: CONFIG.joonhyunIMG, 
    linkTitle: "이번주 메뉴",
    linkURL: CONFIG.weekMenu,
    botName: "김준현[점심봇]"
  });
});
