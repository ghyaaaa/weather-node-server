const express = require("express");
const app = express();

const weatherRoutes = require("./router");

app.use("", weatherRoutes);

app.listen(4000, () => console.log(`服务器启动成功, 监听 ${4000} 端口`));
