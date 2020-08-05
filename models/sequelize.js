"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = require("sequelize");

var env = process.env.NODE_ENV || 'development';

var config = require(__dirname + '/../config/config.json')[env];

var sequelize = new _sequelize.Sequelize(config.database, config.username, config.password, config);
exports.sequelize = sequelize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvc2VxdWVsaXplLnRzIl0sIm5hbWVzIjpbImVudiIsInByb2Nlc3MiLCJOT0RFX0VOViIsImNvbmZpZyIsInJlcXVpcmUiLCJfX2Rpcm5hbWUiLCJzZXF1ZWxpemUiLCJTZXF1ZWxpemUiLCJkYXRhYmFzZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0QsR0FBUixDQUFZRSxRQUFaLElBQXdCLGFBQXBDOztBQUNBLElBQU1DLE1BQU0sR0FBR0MsT0FBTyxDQUFDQyxTQUFTLEdBQUcsd0JBQWIsQ0FBUCxDQUE4Q0wsR0FBOUMsQ0FBZjs7QUFFTyxJQUFNTSxTQUFTLEdBQUcsSUFBSUMsb0JBQUosQ0FBY0osTUFBTSxDQUFDSyxRQUFyQixFQUErQkwsTUFBTSxDQUFDTSxRQUF0QyxFQUFnRE4sTUFBTSxDQUFDTyxRQUF2RCxFQUFpRVAsTUFBakUsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5cbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vY29uZmlnL2NvbmZpZy5qc29uJylbZW52XTtcblxuZXhwb3J0IGNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoY29uZmlnLmRhdGFiYXNlLCBjb25maWcudXNlcm5hbWUsIGNvbmZpZy5wYXNzd29yZCwgY29uZmlnKTsiXX0=