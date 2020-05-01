"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vlider = /*#__PURE__*/function () {
  function Vlider(_ref) {
    var _ref$size = _ref.size,
        size = _ref$size === void 0 ? 3 : _ref$size,
        _ref$direction = _ref.direction,
        direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction,
        _ref$el = _ref.el,
        el = _ref$el === void 0 ? '.vlider' : _ref$el,
        _ref$withIndicator = _ref.withIndicator,
        withIndicator = _ref$withIndicator === void 0 ? false : _ref$withIndicator,
        _ref$autoPlay = _ref.autoPlay,
        autoPlay = _ref$autoPlay === void 0 ? false : _ref$autoPlay,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 3000 : _ref$delay;

    _classCallCheck(this, Vlider);

    this.size = size;
    this.direction = direction;
    this.el = el;
    this.withIndicator = withIndicator;
    this.autoPlay = autoPlay;
    this.delay = delay;
  }

  _createClass(Vlider, [{
    key: "init",
    value: function init() {
      var _this = this;

      var vlider = document.querySelector(this.el),
          vliderGrid = vlider.querySelector('.vlider-grid'),
          vliderPosition = 0,
          vliderItems = vlider.querySelectorAll('.vlider-item'),
          vliderPerClickMove = 100 / this.size,
          vliderLimit = vliderPerClickMove * vliderItems.length - vliderPerClickMove * this.size,
          vliderNext = vlider.querySelector('.vlider-next'),
          vliderPrev = vlider.querySelector('.vlider-prev'); // initialize the size of slider items

      vliderItems.forEach(function (item) {
        item.style.flexBasis = 100 / _this.size + '%';
      }); // function to make vlider indicator icon, and it's clickable

      var enableIndicator = function enableIndicator() {
        var result = '';

        if (result !== '') {
          var _result = '';
        }

        for (var i = 0; i < vliderItems.length / _this.size; i++) {
          result += "<span class=\"icon\"></span>";
        }

        return result;
      };

      var itemAutoPlay = function itemAutoPlay() {
        if (vliderPosition >= vliderLimit) {
          vliderPosition = 0;
        } else {
          vliderPosition += vliderPerClickMove;
        }

        vliderGrid.style.right = vliderPosition + '%';
      };

      if (this.autoPlay) {
        setInterval(function () {
          itemAutoPlay();
        }, this.delay);
      }

      if (this.withIndicator) {
        vlider.querySelector('.vlider-indicator').innerHTML = enableIndicator();
        var vliderIndicators = vlider.querySelectorAll(this.el + ' .vlider-indicator > .icon');
        vliderIndicators.forEach(function (indicator, index) {
          indicator.addEventListener('click', function (event) {
            vliderPosition = vliderPerClickMove * _this.size * index;
            vliderGrid.style.right = vliderPosition + '%';
          });
        });
      } // just for debugging


      console.log("\n            element: ".concat(this.el, ",\n            direction: ").concat(this.direction, ",\n            size: ").concat(this.size, "\n        "));
      vliderNext.addEventListener('click', function (event) {
        if (vliderPosition >= vliderLimit) {
          vliderPosition = 0;
        } else {
          vliderPosition += vliderPerClickMove;
        }

        vliderGrid.style.right = vliderPosition + '%';
      });
      vliderPrev.addEventListener('click', function (event) {
        if (vliderPosition <= 0) {
          vliderPosition = vliderLimit;
        } else {
          vliderPosition -= vliderPerClickMove;
        }

        vliderGrid.style.right = vliderPosition + '%';
      });
    }
  }]);

  return Vlider;
}();