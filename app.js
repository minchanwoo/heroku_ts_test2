"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 5000;
app.get('/', function (req, res) {
  res.send('Hello World HAHAHA~!!');
});
app.listen(PORT, function () {
  console.log(PORT, '번 포트에서 대기중~');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHAiLCJQT1JUIiwicHJvY2VzcyIsImVudiIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLDBCQUFaO0FBRUEsSUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixJQUFvQixJQUFqQztBQUVBRCxHQUFHLENBQUNJLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWE7QUFDdEJBLEVBQUFBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTLHVCQUFUO0FBQ0gsQ0FGRDtBQUlBUCxHQUFHLENBQUNRLE1BQUosQ0FBV1AsSUFBWCxFQUFpQixZQUFNO0FBQ25CUSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsSUFBWixFQUFrQixhQUFsQjtBQUNILENBRkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwO1xuXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKT0+IHtcbiAgICByZXMuc2VuZCgnSGVsbG8gV29ybGQgSEFIQUhBfiEhJykgICAgXG59KTtcblxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coUE9SVCwgJ+uyiCDtj6ztirjsl5DshJwg64yA6riw7KSRficpXG59KVxuIl19