var obj = JSON.parse($response.body);

// let newData = [];
// let oriData = obj["data"];

// for (let item of oriData) {
//   if (item["iconType"] === "ROBOT" || item["iconType"] === "MINE") {
//     newData.push(item);
//   }
// }

obj["data"] = [];

$done({body:JSON.stringify(obj)});
