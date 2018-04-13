const http = require('http');
const schedule = require('node-schedule');
const request = require('request');
const CONFIG = require('./config/config.json');

const server = http.createServer((req, res) => {});
const makeSchedule = (argsObj) => {
  const {message, HH, MM, URI, imgURL, linkTitle, linkURL, botName, npLinkTitle, npURL, edLinkTitle, edURL} = argsObj;
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
          "text" : "NE, 클릭하면 이동합니다.",
          "color" : "blue"
          },
          {
          "title" : npLinkTitle,
          "titleLink" : npURL,
          "text" : "NP, 클릭하면 이동합니다.",
          "color" : "red"
          },
          {
          "title" : edLinkTitle,
          "titleLink" : edURL,
          "text" : "ED, 클릭하면 이동합니다.",
          "color" : "black"
          }
        ]
      }
    })
  });
}

server.listen(CONFIG.port, CONFIG.hostname, () => {
  console.log('bot server start');
  makeSchedule({
    message: "점심메뉴 볼 시간이다~", 
    HH: 10,
    MM: 24, 
    URI: CONFIG.TEST_URL,
    imgURL: CONFIG.jenkinsIMG, 
    linkTitle: "NE 이번주 메뉴",
    npLinkTitle: "NP 이번주 메뉴",
    edLinkTitle: "ED 이번주 메뉴",
    linkURL: CONFIG.weekMenu,
    npURL: CONFIG.npWeekMenu,
    edURL: CONFIG.edWeekMenu,
    botName: "jenkins"
  });
  makeSchedule({
    message: "점심메뉴 볼 시간이다~", 
    HH: 12,
    MM: 00, 
    URI: CONFIG.LL_URL,
    imgURL: CONFIG.jenkinsIMG, 
    linkTitle: "NE 이번주 메뉴",
    npLinkTitle: "NP 이번주 메뉴",
    edLinkTitle: "ED 이번주 메뉴",
    linkURL: CONFIG.weekMenu,
    npURL: CONFIG.npWeekMenu,
    edURL: CONFIG.edWeekMenu,
    botName: "jenkins"
  });
  makeSchedule({
    message: "저녁스", 
    HH: 18,
    MM: 17, 
    URI: CONFIG.NTP_URL,
    imgURL: CONFIG.jenkinsIMG, 
    linkTitle: "NE 이번주 메뉴",
    npLinkTitle: "NP 이번주 메뉴",
    edLinkTitle: "ED 이번주 메뉴",
    linkURL: CONFIG.weekMenu,
    npURL: CONFIG.npWeekMenu,
    edURL: CONFIG.edWeekMenu,
    botName: "jenkins"
  });
  makeSchedule({
    message: "미리 볼거임 ㅋㅋ", 
    HH: 18,
    MM: 06, 
    URI: CONFIG.LL_URL,
    imgURL: CONFIG.duckIMG, 
    linkTitle: "NE 이번주 메뉴",
    npLinkTitle: "NP 이번주 메뉴",
    edLinkTitle: "ED 이번주 메뉴",
    linkURL: CONFIG.weekMenu,
    npURL: CONFIG.npWeekMenu,
    edURL: CONFIG.edWeekMenu,
    botName: "한덕선봇"
  });
  makeSchedule({
    message: "명령어가 조아", 
    HH: 18,
    MM: 29, 
    URI: CONFIG.RR5th_URL,
    imgURL: CONFIG.hsIMG, 
    linkTitle: "NE 이번주 메뉴",
    npLinkTitle: "NP 이번주 메뉴",
    edLinkTitle: "ED 이번주 메뉴",
    linkURL: CONFIG.weekMenu,
    npURL: CONFIG.npWeekMenu,
    edURL: CONFIG.edWeekMenu,
    botName: "전해성[퇴근봇]"
  });
  makeSchedule({
    message: "빠..빠빠..빨간맛!", 
    HH: 12,
    MM: 25, 
    URI: CONFIG.RR5th_URL,
    imgURL: CONFIG.joonhyunIMG, 
    linkTitle: "NE 이번주 메뉴",
    npLinkTitle: "NP 이번주 메뉴",
    edLinkTitle: "ED 이번주 메뉴",
    linkURL: CONFIG.weekMenu,
    npURL: CONFIG.npWeekMenu,
    edURL: CONFIG.edWeekMenu,
    botName: "김준현[점심봇]"
  });
});
