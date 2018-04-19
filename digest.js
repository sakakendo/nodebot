
if (!process.argv[2]){
	console.log('username,pass is not deined');
	return ;
}
var digestRequest=require('request-digest')(process.argv[2],process.argv[2]);
digestRequest.requestAsync({
	host:'http://yamashita002.je.tokyo-ct.ac.jp',
	path:'/reports2018_yama/4Jucom.php?',
	method:'GET',
	headers:{
		'Custom-Header':'OneValue',
		'Other-Custom-Header':'OtherValue'}

})
.then(function(responce){
	console.log(responce.body);
})
.then(function(error){
	console.log(error.body);
})

