
// all img downlode korar jonno kono web site ar console log theke 
// 1. jei canvas img downlode korte chao tar je kono akta img ar coppy all har korte hobe 
// 2. console a ase akta har name variable banaye coppy kora har ke peast korte bobe 
// 3. har() ta ke call korte hobe 

var imageUrls = [];
har.log.entries.forEach(function (entry) {
  if (entry.response.content.mimeType.indexOf("image/") !== 0) return;
  imageUrls.push(entry.request.url);
});
console.log(imageUrls.join('\n'));