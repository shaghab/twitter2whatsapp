const twit = require("twit");
const POLLING_INTERVAL = 10 * 1000; // milliseconds

const T = new twit({
  consumer_key: "...",
  consumer_secret: "...",
  access_token: "...",
  access_token_secret: "...",
  //timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
});

var params = {
  q: "#100DaysOfCode since:20200606",
  count: 20,
};

const main = async () => {
  T.get("search/tweets", params);
  console.log(".");
};

main();
setInterval(main, POLLING_INTERVAL);
