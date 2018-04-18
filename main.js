var FormData=require("form-data");
var fs=require("fs");
var request=require("request");

const token=process.env.SLACK_TOKEN;
const { RTMClient,WebClient}=require('@slack/client');
const web=new WebClient(token);
const rtm=new RTMClient(token);

rtm.start();

rtm.on('hello',(event)=>{
	console.log(event);
});

rtm.on('message',(event)=>{
	console.log('event occured');
	if(event.subtype && event.subtype ==='file_share'){
		console.log('file shared',event.subtype,event.file,event.file.url_private,event.file.filetype);
		download(event.file);
	} else console.log('another type');
});

function download(file){
	let headers={Authorization: ' Bearer '+token};
	console.log('headers',headers)
	console.log('name',file.name,'url',file.url_private,'filetype',file.filetype);
	console.log('dir ./files/'+file.name);
	request({
		url:file.url_private,
		headers:{'Authorization': 'Bearer '+token}}).pipe(fs.createWriteStream('./files/'+file.name));
}




// push file to yama
/*
var form=new FormData;
form.append("submit",fs.createReadStream("./sample.txt");

request.post({url:'http://yamashita002.je.tokyo-ct.ac.jp/reports2018_yama/4Jucom.php?',formData:form},function(err,httpResponce,body){
	if(err){
		return console.error('upload failed',err);
	}else{
		console.log('upload succeed');
	}
});
*/


