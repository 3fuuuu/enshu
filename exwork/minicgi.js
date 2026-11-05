// node.js + Express.js を用いた Web サーバー
// Express.js モジュールの読み込み
const express = require("express");
const app = express();
const path = require("path");
const port = 3000; // ポート番号 3000
const fs = require("fs");
// ドキュメントルートの指定
// (公開 Web ページ設置フォルダの指定）
app.use(express.static(path.join(__dirname, "htdocs")));
// リクエスト監視
const server = app.listen(port, function () {
  console.log(`Start http Server: http://localhost:${port}`);
});
// POST を受け付けるために必要なコード
app.use(express.urlencoded({ extended: true }));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
//
app.get("/mini1_html", function (req, res) {
  // 受信パラメータの取得
  const p1 = req.query.p1;
  console.log(p1);
  console.log(path.join(__dirname, "htdocs", "minicgi", "template.html"));
  // テンプレートの HTML を読み込み
  fs.readFile(
    path.join(__dirname, "htdocs", "minicgi", "template.html"),
    "utf8",
    (error, source) => {
      let html = source;
      html = html.replace("___p1___", String(p1));
      html = html.replace("___result___", String(parseInt(p1) * 2));
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    },
  );
});
