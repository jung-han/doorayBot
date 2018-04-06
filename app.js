const http = require('http');
const schedule = require('node-schedule');
const request = require('request');
const NTP_URL = "https://hook.dooray.com/services/1387695619080878080/2185436567813319939/mumNU0b8RiObG5c7uVZBkg";
const LL_URL = "https://hook.dooray.com/services/1387695619080878080/2185464731975211348/GZblxp80SHevXcOBGL3Hjg"
const RR5th_URL = "https://hook.dooray.com/services/1387695619080878080/2185478742450936556/l6Tg0E12SIOoXEE3Qo-7eQ";
const minsooIMG = "http://hrservices.nhnent.com/empPhoto/X1801020108722.jpg";
const wonjooIMG = "http://hrservices.nhnent.com/empPhoto/X1601040102542.jpg";
const duckIMG = "http://hrservices.nhnent.com/empPhoto/X1801020108738.jpg";
const joonhyunIMG = "http://hrservices.nhnent.com/empPhoto/X1801020108718.jpg";
const jenkinsIMG = "http://electric-cloud.com/wp-content/uploads/use-case-graphic_embrace-extend-jenkins.png";
const weekMenu = "http://whatsup.nhnent.com/ne/board/view/1560/163213?size=10&direction=DESC&property=a.createdDate&page=1";

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log('server start');
  schedule.scheduleJob({hour: 12, minute: 20, dayOfWeek: new schedule.Range(1,5)}, function(){
    console.log("느티피 점심봇 전송");
    request.post({
      headers: {'content-type' : 'application/json'},
      uri: NTP_URL,
      json:  {
        "botName" : "[젠킨스씨]",
        "botIconImage" : jenkinsIMG,
        "text" : "점심메뉴 볼 시간이다~",
        "attachments" : [
          {
          "title" : "이번주 메뉴",
          "titleLink" : weekMenu,
          "text" : "클릭하면 이동합니다.",
          "color" : "red"
          }
        ]
      }
    })
  });
  // schedule.scheduleJob({hour: 09, minute: 36, dayOfWeek: new schedule.Range(1,5)}, function(){
  //   request.post({
  //     headers: {'content-type' : 'application/json'},
  //     uri: LL_URL,
  //     json:  {
  //       "botName" : "김준현[출근봇]",
  //       "botIconImage" : joonhyunIMG,
  //       "text" : "TEST MSG"
  //     }
  //   })
  // });
  schedule.scheduleJob({hour: 12, minute: 00, dayOfWeek: new schedule.Range(1,5)}, function(){
    console.log("동기방 점심봇 전송");  
    request.post({
      headers: {'content-type' : 'application/json'},
      uri: LL_URL,
      json:  {
        "botName" : "[젠킨스씨]",
        "botIconImage" : jenkinsIMG,
        "text" : "점심메뉴 볼 시간이다~",
        "attachments" : [
          {
          "title" : "이번주 메뉴",
          "titleLink" : weekMenu,
          "text" : "클릭하면 이동합니다.",
          "color" : "red"
          }
        ]
      }
    })
  });
  schedule.scheduleJob({hour: 18, minute: 06, dayOfWeek: new schedule.Range(1,5)}, function(){
    console.log("덕선 저녁 전송");  
    request.post({
      headers: {'content-type' : 'application/json'},
      uri: LL_URL,
      json:  {
        "botName" : "한덕선봇",
        "botIconImage" : duckIMG,
        "text" : "미리 볼거임 ㅋㅋ",
        "attachments" : [
          {
          "title" : "이번주 메뉴",
          "titleLink" : weekMenu,
          "text" : "클릭하면 이동합니다.",
          "color" : "red"
          }
        ]
      }
    })
  });
  schedule.scheduleJob({hour: 14, minute: 00, dayOfWeek: new schedule.Range(1,5)}, function(){
    console.log("민수봇 전송");  
    request.post({
      headers: {'content-type' : 'application/json'},
      uri: LL_URL,
      json:  {
        "botName" : "박민수봇",
        "botIconImage" : minsooIMG,
        "text" : "민수할뻔 하셨죠? 링크를 클릭해서 민수하지말자!",
        "attachments" : [
          {
          "title" : "잠 깨는법",
          "titleLink" : "http://www.kuccblog.net/797",
          "text" : "클릭하면 이동합니다.",
          "color" : "blue"
          }
        ]
      }
    })
  });
  schedule.scheduleJob({hour: 18, minute: 29, dayOfWeek: new schedule.Range(1,5)}, function(){
    console.log("김준현 퇴근봇 전송");
    request.post({
      headers: {'content-type' : 'application/json'},
      uri: RR5th_URL,
      json:  {
        "botName" : "김준현[퇴근봇]",
        "botIconImage" : joonhyunIMG,
        "text" : "벌써 6시 29분이네요. 고생많으셨습니다. 집가기 전에 저녁메뉴 한번 보고가세요!",
        "attachments" : [
          {
          "title" : "이번주 메뉴",
          "titleLink" : weekMenu,
          "text" : "클릭하면 이동합니다.",
          "color" : "red"
          }
        ]
      }
    })
  });
  schedule.scheduleJob({hour: 12, minute: 30, dayOfWeek: new schedule.Range(1,5)}, function(){
    console.log("김준현 점심봇 전송");
    request.post({
      headers: {'content-type' : 'application/json'},
      uri: RR5th_URL,
      json:  {
        "botName" : "김준현[점심봇]",
        "botIconImage" : joonhyunIMG,
        "text" : "벌써 12시 30분이네요. 배고프시죠? 식사 전에 메뉴 한번 보고가세요!",
        "attachments" : [
          {
          "title" : "이번주 메뉴",
          "titleLink" : weekMenu,
          "text" : "클릭하면 이동합니다.",
          "color" : "red"
          }
        ]
      }
    })
  });
});
