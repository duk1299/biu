/*
oh
*/

var obj = JSON.parse($response.body);

printf(obj)

obj.resultbody.hotCompany = {"items":[]}
obj.resultbody.banner = {"items":[]}

$done({body:JSON.stringify(obj)});
// 
