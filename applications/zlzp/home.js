/*
oh
*/

var obj = JSON.parse($response.body); 

obj.resultbody.data = {}
obj.resultbody.apis = []

$done({body:JSON.stringify(obj)});
// 
