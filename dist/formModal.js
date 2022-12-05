"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./App.css");
var FormModal = function FormModal(props) {
  var closeModal = props.closeModal;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modalBackground"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-text"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-container",
    onClick: closeModal,
    "aria-label": "cross-icon"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-lg fa-times",
    "aria-hidden": "true"
  })), /*#__PURE__*/_react.default.createElement("p", null, "Employee successfully created !"))));
};
var _default = FormModal;
exports.default = _default;