
var request=require('request');

if(process.argv[2]){
	var username=process.argv[2];
	var password=process.argv[2];
}else{
	console.log('username,password is not defined');
	return ;
}

var options={
	url:'http://yamashita002.je.tokyo-ct.ac.jp/reports2018_yama/4Jucom.php?',
	auth:{
		user:username,
		password:password
	}
}

request(options,function(err,res,body){
	if(err){
		console.dir(err);
		return;
	}
	console.log('headers',res.headers,'status code',res.statusCode,body);
});
