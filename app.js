"use strict";

var _express = _interopRequireDefault(require("express"));

var _models = _interopRequireDefault(require("./models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_models["default"].sequelize.sync();

var PORT = process.env.PORT || 5000;
app.get('/', function (req, res) {
  res.send('Hello World HAHAHA~!!');
});
app.listen(PORT, function () {
  console.log(PORT, '번 포트에서 대기중~');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJhcHAiLCJtb2RlbHMiLCJzZXF1ZWxpemUiLCJzeW5jIiwiUE9SVCIsInByb2Nlc3MiLCJlbnYiLCJnZXQiLCJyZXEiLCJyZXMiLCJzZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUVBLElBQU1BLEdBQUcsR0FBRywwQkFBWjs7QUFFQUMsbUJBQU9DLFNBQVAsQ0FBaUJDLElBQWpCOztBQUVBLElBQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosSUFBb0IsSUFBakM7QUFFQUosR0FBRyxDQUFDTyxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFhO0FBQ3RCQSxFQUFBQSxHQUFHLENBQUNDLElBQUosQ0FBUyx1QkFBVDtBQUNILENBRkQ7QUFJQVYsR0FBRyxDQUFDVyxNQUFKLENBQVdQLElBQVgsRUFBaUIsWUFBTTtBQUNuQlEsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULElBQVosRUFBa0IsYUFBbEI7QUFDSCxDQUZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgbW9kZWxzIGZyb20gJy4vbW9kZWxzJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5tb2RlbHMuc2VxdWVsaXplLnN5bmMoKTtcblxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMDtcblxuYXBwLmdldCgnLycsIChyZXEsIHJlcyk9PiB7XG4gICAgcmVzLnNlbmQoJ0hlbGxvIFdvcmxkIEhBSEFIQX4hIScpICAgIFxufSk7XG5cbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFBPUlQsICfrsogg7Y+s7Yq47JeQ7IScIOuMgOq4sOykkX4nKVxufSlcbiJdfQ==