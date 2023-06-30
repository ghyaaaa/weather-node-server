const express = require("express");
const router = express.Router();
const qs = require("querystring");
const service = require("./server");
const http = require("http");

router.get("/weatherSearch", (req, res, next) => {
  const search_key = qs.parse(req._parsedUrl.query);

  const { city, extensions, output } = search_key;

  service.getSearchWeatherData(city, extensions, output, (content) => {
    res.send(content);
  });
});

router.get("/getAdCode", (req, res, next) => {
  const search_key = qs.parse(req._parsedUrl.query);

  const { keywords, subdistrict } = search_key;

  service.getAdCode(keywords, subdistrict, (content) => {
    res.send(content);
  });
});

module.exports = router;
