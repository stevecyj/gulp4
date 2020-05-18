// gulp 3.9.1 寫法
// 在 CLI 輸入 gulp hello3，會印出 hello gulp 3.9.1

/* var gulp = require("gulp"); // CommonJS 引入模組寫法。引用 gulp 模組

gulp.task("hello3", function (cb) {
  // gulp 3.9.1 的 task 寫法。設定 hello3 這個 task
  console.log("hello gulp 3.9.1");
  cb();
});
 */

// gulpfile.js
// 在 CLI 輸入 gulp hello4CommonJS，會印出 hello gulp , CommonJS format

/* var gulp = require("gulp");

function hello4CommonJS(cb) {
  console.log("hello gulp 4.0, CommonJS format");
  cb();
}

exports.hello4CommonJS = hello4CommonJS; */

// gulpfile.babel.js
// 在 CLI 輸入 gulp hello4ES6，會印出錯誤訊息

import gulp from "gulp"; // ES6 引入模組寫法

export function hello4ES6(cb) {
  console.log("hello gulp 4.0, ES6 format");
  cb();
}
