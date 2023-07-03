/**
 * 调用的是第三方 高德地图公开的API
 */
const fs = require("fs");
const qs = require("querystring");
const http = require("http");

const key = "f9ae7a5bc63d966ee3ee911f36b28051"; // 高德地图个人开发者 key
const host = "restapi.amap.com";

/**
 * param: city:stirng; extensions:string; output:JSON/XML;  fn: (value) => vood;
 * des: 根据adcode 查询天气
 */
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

/**
 * param: keywords: string; subdistrict: 1 | 2 | 3 | 4, fn: (value) => void;
 * des: 根据中文获取adcode
 */

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

/**
 * parmas fn: (value) => void;
 * des: 获取定位数据
 */

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
