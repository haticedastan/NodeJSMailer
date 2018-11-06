

/*çalışan processler hakkında bilgi veren parametredir. doc bilgileri gibi
process.argv bir dizidir. 
ve ilk indis node.exe nin hangi dizinde çalıştığını
ikincisi ise çalışan programın nereden çalıştığını belirtiyor. PATH
kodu çalıştırmak için ; node program.js 4 5 2 rasgele rakam girip konsoldan cevabı
görebilirsin.*/

/*var toplam = 0  ;

for ( var i = 2 ; i < process.argv.length ; i++)
{
    toplam +=Number(process.argv[i])
}
console.log(toplam)*/

/*bazı modüller kendiliğinden yüklenirken 
bazılarını bizim çağırmamız gerekiyor. */
 
//dosya okuma 

/*var http = require('http');
var fs = require('fs');
/*http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);
*/
//doc create

//var fs = require('fs');
/* fs.appendFile ('mynewfile.txt' , 'hello world' , function(err){
  if (err) throw err ;
  console.log('saved');

  });


  http.createServer(function (req, res){
    fs.readFile('mynewfile.txt',function(err,data){
      res.writeHead(200,{'Content-Type' : 'text/html' })
      res.write(data);
      return res.end ();
    })
  }).listen(3000)

  //fs.writeFile() >>> Varsa dosyanın içeriğini değiştirir
  //yoksa dosyayı oluşturup içeriği yazar. 
/*
  fs.writeFile ('mynewfile2.txt',' Merhaba Hatice', function (err){
    if (err) throw err ;
    console.log('Saved!');
  })
  */

  //update  
/*
  fs.appendFile('mynewfile.txt', 'This is my text', function(err){
    if(err) throw err ; 
    console.log ('updated');
  })
*/
  //delete files 

 /* fs.unlink('mynewfile.txt',function(err){
    if ( err ) throw err ; 
    console.log('file deleted');

  })*/

  //rename 
/*
  fs.rename ('mynewfile.txt','yeniad', function (err){
    if (err) throw err ; 
    console.log('rename!');
  })*/

  /*
var url = require ('url');
var adr = 'https://github.com/webpack/webpack/issues/4921';
var q = url.parse (adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

//sorgu özelliği tüm querystring parametrelerine sahip nesneleri özellik olarak döndürür. 

var qdata = q.query;
console.log(qdata.month);
*/

// dosya sunucusu 
/*
var http = require ('http');
var url = require ('url ');
var fs = require ('fs');

http.createServer (function (req, res){
  var q = url.parse (req.url,true);
  var filename = "." + q.pathname; 
  fs.readFile (filename , function (err , data){
    if (err){
      res.writeHead(404,{'Content-Type': 'text/html'});
      return res.end ("404 Not Found");

    }
    res.writeHead(200 , {'Content-Type':'text/html'})
    res.write(data);
    return res.end();
  })
}).listen(808);*/

//EVENTS
/*
var fs = require ('fs');
var rs = fs.createReadStream('./mynewfile2.txt');
rs.on('open',function(){
  console.log('the file is open');
})
*/

/*
var events = require ('events');
var eventEmitter = new  events.EventEmitter();

var myEventHandler = function (){
  console.log('I hear a scream');
}

eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');
*/

//NODEMAİLER

var nodemailer = require ('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth:{
    user : 'htcdstn58@gmail.com',
    pass: 'H1a2tice+!!'
  }
})

var mailOptions ={
  from :'htcdstn58@gmail.com',
  to : 'thunderat074@gmail.com',
  subject : 'NodeJs kullanarak Mail gönderme',
  text : 'Deneme'
}

transporter.sendMail(mailOptions, function(error, info){
  if (error){
    console.log(error);
  }else{
    console.log('email sent :' +info.response);
  }
})