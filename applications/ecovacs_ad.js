var obj = JSON.parse($response.body);

// for (let item of oriData) {
//   if (item["iconType"] === "ROBOT" || item["iconType"] === "MINE") {
//     newData.push(item);
//   }
// }

obj.data.bannerInfoList = [];

$done({body:JSON.stringify(obj)});
