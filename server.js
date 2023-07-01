const fs = require("fs");
const qs = require("querystring");
const http = require("http");

const key = "f9ae7a5bc63d966ee3ee911f36b28051";
const host = "restapi.amap.com";

const getSearchWeatherData = (city, extensions, output = "JSON", fn) => {
  const params = {
    key,
    city,
    extensions,
    output,
  };

  const httpRequest = {
    host,
    path: `/v3/weather/weatherInfo?${qs.stringify(params)}`,
  };

  http
    .request(httpRequest, (res) => {
      let content = "";
      res.setEncoding("utf-8");
      res.on("data", (chunk) => {
        content += chunk;
      });
      res.on("end", () => {
        return fn(content);
      });
    })
    .end();
};

const getAdCode = (keywords, subdistrict = 1, fn) => {
  const params = {
    key,
    keywords,
    subdistrict,
  };

  const httpRequest = {
    host,
    path: `/v3/config/district?${qs.stringify(params)}`,
  };

  http
    .request(httpRequest, (res) => {
      let content = "";
      res.setEncoding("utf-8");
      res.on("data", (chunk) => {
        content += chunk;
      });
      res.on("end", () => {
        return fn(content);
      });
    })
    .end();
};

const getIP = (fn) => {
  const params = {
    key,
  };

  const httpRequest = {
    host,
    path: `/v3/ip?${qs.stringify(params)}`,
  };

  http
    .request(httpRequest, (res) => {
      let content = "";
      res.setEncoding("utf-8");
      res.on("data", (chunk) => {
        content += chunk;
      });
      res.on("end", () => {
        return fn(content);
      });
    })
    .end();
};

module.exports = {
  getSearchWeatherData,
  getAdCode,
  getIP,
};
