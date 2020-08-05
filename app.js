"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 5000;
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.listen(PORT, function () {
  console.log(PORT, '번 포트에서 대기중~');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHAiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLDBCQUFaO0FBRUEsSUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixJQUFvQixJQUFqQztBQUVBRCxHQUFHLENBQUNJLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWE7QUFDdEJBLEVBQUFBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTLGFBQVQ7QUFDSCxDQUZEO0FBSUFQLEdBQUcsQ0FBQ1EsTUFBSixDQUFXUCxJQUFYLEVBQWlCLFlBQU07QUFDbkJRLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxJQUFaLEVBQWtCLGFBQWxCO0FBQ0gsQ0FGRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDA7XG5cbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpPT4ge1xuICAgIHJlcy5zZW5kKCdIZWxsbyBXb3JsZCcpICAgIFxufSk7XG5cbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFBPUlQsICfrsogg7Y+s7Yq47JeQ7IScIOuMgOq4sOykkX4nKVxufSlcbiJdfQ==