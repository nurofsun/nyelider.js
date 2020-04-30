"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vlider = /*#__PURE__*/function () {
  function Vlider(options) {
    _classCallCheck(this, Vlider);

    this.options = {
      size: 1,
      direction: 'horizontal',
      el: '.vlider'
    };
  }

  _createClass(Vlider, [{
    key: "init",
    value: function init() {
      var vlider = document.querySelector(el);
    }
  }]);

  return Vlider;
}();