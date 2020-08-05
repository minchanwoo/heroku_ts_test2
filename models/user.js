"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = require("./sequelize");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var User = /*#__PURE__*/function (_Model) {
  _inherits(User, _Model);

  var _super = _createSuper(User);

  function User() {
    _classCallCheck(this, User);

    return _super.apply(this, arguments);
  }

  return User;
}(_sequelize.Model);

User.init({
  email: {
    type: _sequelize.DataTypes.STRING(100)
  },
  nick: {
    type: _sequelize.DataTypes.STRING(20)
  },
  name: {
    type: _sequelize.DataTypes.STRING(20)
  }
}, {
  sequelize: _sequelize2.sequelize,
  modelName: 'user',
  paranoid: true
});
var _default = User;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6WyJVc2VyIiwiTW9kZWwiLCJpbml0IiwiZW1haWwiLCJ0eXBlIiwiRGF0YVR5cGVzIiwiU1RSSU5HIiwibmljayIsIm5hbWUiLCJzZXF1ZWxpemUiLCJtb2RlbE5hbWUiLCJwYXJhbm9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7Ozs7Ozs7Ozs7RUFBYUMsZ0I7O0FBQ25CRCxJQUFJLENBQUNFLElBQUwsQ0FBVTtBQUNSQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsSUFBSSxFQUFFQyxxQkFBVUMsTUFBVixDQUFpQixHQUFqQjtBQURELEdBREM7QUFJUkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pILElBQUFBLElBQUksRUFBRUMscUJBQVVDLE1BQVYsQ0FBaUIsRUFBakI7QUFERixHQUpFO0FBT1JFLEVBQUFBLElBQUksRUFBRTtBQUNKSixJQUFBQSxJQUFJLEVBQUVDLHFCQUFVQyxNQUFWLENBQWlCLEVBQWpCO0FBREY7QUFQRSxDQUFWLEVBVUc7QUFDREcsRUFBQUEsU0FBUyxFQUFUQSxxQkFEQztBQUVEQyxFQUFBQSxTQUFTLEVBQUUsTUFGVjtBQUdEQyxFQUFBQSxRQUFRLEVBQUU7QUFIVCxDQVZIO2VBZ0JlWCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGVzLCBNb2RlbCB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuaW1wb3J0IHsgc2VxdWVsaXplIH0gZnJvbSAnLi9zZXF1ZWxpemUnO1xuXG5jbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWwge31cblVzZXIuaW5pdCh7XG4gIGVtYWlsOiB7XG4gICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygxMDApLFxuICB9LFxuICBuaWNrOiB7XG4gICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyMCksXG4gIH0sXG4gIG5hbWU6IHtcbiAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDIwKSxcbiAgfVxufSwge1xuICBzZXF1ZWxpemUsXG4gIG1vZGVsTmFtZTogJ3VzZXInLFxuICBwYXJhbm9pZDogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyIl19