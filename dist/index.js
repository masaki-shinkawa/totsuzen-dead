#!/usr/bin/env node

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Main =
/*#__PURE__*/
function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, [{
    key: "help",
    value: function help() {
      console.log("Usage: totsuzen-dead KEYWORD");
    }
  }, {
    key: "run",
    value: function run() {
      if (process.argv.length <= 2) {
        this.help();
        return;
      }

      var str = process.argv.slice(2).join(' ');

      var eaw = require('eastasianwidth');

      var charaLength = Math.ceil(eaw.length(str) / 2);
      var upper = "".concat(_toConsumableArray(Array(charaLength)).map(function () {
        return '人';
      }).join(''));
      var bottom = "".concat(_toConsumableArray(Array(charaLength)).map(function () {
        return '^Y';
      }).join(''));
      console.log("\uFF3F\u4EBA".concat(upper, "\uFF3F\n\uFF1E ").concat(str, " \uFF1C\n\uFFE3Y").concat(bottom, "\uFFE3"));
    }
  }]);

  return Main;
}();

var main = new Main();
main.run(); // `＿人人人人人人＿
//  ＞ 突然の死 ＜
//  ￣Y^Y^Y^Y^Y^￣`
// `＿人人人人＿
//  ＞ 1234 ＜
//  ￣Y^Y^YY￣`
