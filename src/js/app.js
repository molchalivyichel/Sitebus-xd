const http = require("http");
const fs = require("fs");
  
http.createServer(async (request, response) => {
        
    if(request.url == "/user"){
           
          let body = "";   // буфер для получаемых данных
         // получаем данные из запроса в буфер
          for await (const chunk of request) {
            body += chunk;
          }
        let userfromWhere = "";
        let userfrom = "";
        let date = "";
        // разбиваем запрос на параметры по символу &
        const params = body.split("&");
        // проходим по всем параметрам и определяем их значения
        for(param of params){
            const [paramName, paramValue] = param.split("=");
            if(paramName === "fromWhere") userfromWhere = paramValue;
            if(paramName === "from") userfrom = paramValue;
            if(paramName === "date") date = paramValue;
        }
        console.log(`Your fromWhere: ${userfromWhere}  Your where: ${userfrom} and Your date" ${date}`);
        console.log(params);
        console.log(body);
        response.end(`Your fromWhere: ${userfromWhere}  Your where: ${userfrom} and Your date" ${date}`);
    }
    else{
        fs.readFile("index.html", (_, data) => response.end(data));
    }
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));