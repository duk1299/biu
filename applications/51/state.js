/*
oh
*/

var obj = JSON.parse($response.body); 

obj.resultbody = {"userStatus":10}

$done({body:JSON.stringify(obj)});
// 
