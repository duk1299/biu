/*
oh
*/

var obj = JSON.parse($response.body); 

obj["hotCompany"] = {"items":[]}
obj["banner"] = {"items":[]}

$done({body:JSON.stringify(obj)});
// 
