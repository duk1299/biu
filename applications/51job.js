/*
oh
*/

var obj = JSON.parse($response.body);
//var obj = {};

obj.resultbody.hotCompany = {"items":[]}
obj.resultbody.banner = {"items":[]}

$done({body:JSON.stringify(obj)});
// 
