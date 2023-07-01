const express = require("express");
const router = express.Router();
const qs = require("querystring");
const service = require("./server");

router.get("/weatherSearch", (req, res, next) => {
  const search_key = qs.parse(req._parsedUrl.query);

  const { city, extensions, output } = search_key;

  service.getSearchWeatherData(city, extensions, output, (content) => {
    res.send({
      data: content,
    });
  });
});

router.get("/getAdCode", (req, res, next) => {
  const search_key = qs.parse(req._parsedUrl.query);

  const { keywords, subdistrict } = search_key;

  service.getAdCode(keywords, subdistrict, (content) => {
    res.send({
      data: content,
    });
  });
});

router.get("/getIP", (req, res, next) => {
  service.getIP((content) => {
    res.send({
      data: content,
    });
  });
});

module.exports = router;
