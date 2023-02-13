/*
oh
*/

var obj = JSON.parse($response.body); 

obj.resultbody = {}

$done({body:JSON.stringify(obj)});
// 
