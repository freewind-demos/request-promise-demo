var request = require("request-promise");

request.get("http://www.taobao.com")
.then(function(body) {
    console.log("body length: " + body.length);
})
.then(function() {
  // we need to wrap this request in a function
  return request.get("http://www.taobao.com");
})
.then(function(body) {
    console.log("body length again: " + body.length);
})
.catch(function(error) {
  console.error(error);
});
