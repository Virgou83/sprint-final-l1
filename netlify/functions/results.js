const https = require("https");

exports.handler = async function (event, context) {
  const API_KEY = process.env.FOOTBALL_API_KEY;
  const url =
    "https://api.football-data.org/v4/competitions/FL1/matches?season=2025";

  return new Promise((resolve) => {
    const req = https.get(
      url,
      { headers: { "X-Auth-Token": API_KEY } },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          resolve({
            statusCode: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: data,
          });
        });
      }
    );
    req.on("error", (e) => {
      resolve({
        statusCode: 500,
        body: JSON.stringify({ error: e.message }),
      });
    });
  });
};
