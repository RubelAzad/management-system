webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_laragon_www_pos_system_client_side_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_laragon_www_pos_system_client_side_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_laragon_www_pos_system_client_side_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_laragon_www_pos_system_client_side_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_laragon_www_pos_system_client_side_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_listDeshboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/listDeshboard */ "./components/listDeshboard.js");
/* harmony import */ var _components_NavMenuDesktop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavMenuDesktop */ "./components/NavMenuDesktop.js");





var _jsxFileName = "C:\\laragon\\www\\pos-system\\client-side\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_laragon_www_pos_system_client_side_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_laragon_www_pos_system_client_side_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_laragon_www_pos_system_client_side_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* export async function getStaticProps() {
    const dataChart = [
        {
            t_date: '22/11/2021',
            income: 4000,
        },
        {
            t_date: '22/11/2021',
            income: 3000,
        },
        {
            t_date: '22/11/2021',
            income: 2000,
        },
        {
            t_date: '22/11/2021',
            income: 2780,
        },
        {
            t_date: '22/11/2021',
            income: 1890,
        },
        {
            t_date: '22/11/2021',
            income: 2390,
        },
        {
            t_date: '22/11/2021',
            income: 3490,
        },
    ];
    const dataTable = [
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        },
        {
            id: 1,
            receipt_no: '1111',
            receipt_date: '11/11/2021',
            qty: '12',
            total: '1200',
        }
    ]
    const dataTableColumn = [
        {
            name: 'Receipt',
            selector: 'receipt_no',
            sortable: true,
        },
        {
            name: 'Date',
            selector: 'receipt_date',
            sortable: true,
        },
        {
            name: 'Qty',
            selector: 'qty',
            sortable: true,
        },
        {
            name: 'Total',
            selector: 'total',
            sortable: true,
        },
    ];
    return {
        props: {
            dataTableColumn:dataTableColumn,
            TotalTransaction:"200",
            TotalIncome:"400",
            TotalCategory:"600",
            TotalProduct:"1500",
            dataChart:dataChart,
            dataTable:dataTable,
        }
    }
} */




var Index = /*#__PURE__*/function (_Component) {
  Object(C_laragon_www_pos_system_client_side_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    Object(C_laragon_www_pos_system_client_side_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(C_laragon_www_pos_system_client_side_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }
      }, __jsx(_components_NavMenuDesktop__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      }), __jsx(TopicsList, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7Ozs7Ozs7Ozs2QkFDTztBQUNMLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUksTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQURKO0FBTUg7Ozs7RUFSZUMsK0M7O0FBV0xELG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzYTdiMTUzZjkwZDY4NjFlMjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgZGF0YUNoYXJ0ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICB0X2RhdGU6ICcyMi8xMS8yMDIxJyxcbiAgICAgICAgICAgIGluY29tZTogNDAwMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdF9kYXRlOiAnMjIvMTEvMjAyMScsXG4gICAgICAgICAgICBpbmNvbWU6IDMwMDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRfZGF0ZTogJzIyLzExLzIwMjEnLFxuICAgICAgICAgICAgaW5jb21lOiAyMDAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0X2RhdGU6ICcyMi8xMS8yMDIxJyxcbiAgICAgICAgICAgIGluY29tZTogMjc4MCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdF9kYXRlOiAnMjIvMTEvMjAyMScsXG4gICAgICAgICAgICBpbmNvbWU6IDE4OTAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRfZGF0ZTogJzIyLzExLzIwMjEnLFxuICAgICAgICAgICAgaW5jb21lOiAyMzkwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0X2RhdGU6ICcyMi8xMS8yMDIxJyxcbiAgICAgICAgICAgIGluY29tZTogMzQ5MCxcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIGNvbnN0IGRhdGFUYWJsZSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICByZWNlaXB0X25vOiAnMTExMScsXG4gICAgICAgICAgICByZWNlaXB0X2RhdGU6ICcxMS8xMS8yMDIxJyxcbiAgICAgICAgICAgIHF0eTogJzEyJyxcbiAgICAgICAgICAgIHRvdGFsOiAnMTIwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgcmVjZWlwdF9ubzogJzExMTEnLFxuICAgICAgICAgICAgcmVjZWlwdF9kYXRlOiAnMTEvMTEvMjAyMScsXG4gICAgICAgICAgICBxdHk6ICcxMicsXG4gICAgICAgICAgICB0b3RhbDogJzEyMDAnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHJlY2VpcHRfbm86ICcxMTExJyxcbiAgICAgICAgICAgIHJlY2VpcHRfZGF0ZTogJzExLzExLzIwMjEnLFxuICAgICAgICAgICAgcXR5OiAnMTInLFxuICAgICAgICAgICAgdG90YWw6ICcxMjAwJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICByZWNlaXB0X25vOiAnMTExMScsXG4gICAgICAgICAgICByZWNlaXB0X2RhdGU6ICcxMS8xMS8yMDIxJyxcbiAgICAgICAgICAgIHF0eTogJzEyJyxcbiAgICAgICAgICAgIHRvdGFsOiAnMTIwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgcmVjZWlwdF9ubzogJzExMTEnLFxuICAgICAgICAgICAgcmVjZWlwdF9kYXRlOiAnMTEvMTEvMjAyMScsXG4gICAgICAgICAgICBxdHk6ICcxMicsXG4gICAgICAgICAgICB0b3RhbDogJzEyMDAnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHJlY2VpcHRfbm86ICcxMTExJyxcbiAgICAgICAgICAgIHJlY2VpcHRfZGF0ZTogJzExLzExLzIwMjEnLFxuICAgICAgICAgICAgcXR5OiAnMTInLFxuICAgICAgICAgICAgdG90YWw6ICcxMjAwJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICByZWNlaXB0X25vOiAnMTExMScsXG4gICAgICAgICAgICByZWNlaXB0X2RhdGU6ICcxMS8xMS8yMDIxJyxcbiAgICAgICAgICAgIHF0eTogJzEyJyxcbiAgICAgICAgICAgIHRvdGFsOiAnMTIwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgcmVjZWlwdF9ubzogJzExMTEnLFxuICAgICAgICAgICAgcmVjZWlwdF9kYXRlOiAnMTEvMTEvMjAyMScsXG4gICAgICAgICAgICBxdHk6ICcxMicsXG4gICAgICAgICAgICB0b3RhbDogJzEyMDAnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHJlY2VpcHRfbm86ICcxMTExJyxcbiAgICAgICAgICAgIHJlY2VpcHRfZGF0ZTogJzExLzExLzIwMjEnLFxuICAgICAgICAgICAgcXR5OiAnMTInLFxuICAgICAgICAgICAgdG90YWw6ICcxMjAwJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICByZWNlaXB0X25vOiAnMTExMScsXG4gICAgICAgICAgICByZWNlaXB0X2RhdGU6ICcxMS8xMS8yMDIxJyxcbiAgICAgICAgICAgIHF0eTogJzEyJyxcbiAgICAgICAgICAgIHRvdGFsOiAnMTIwMCcsXG4gICAgICAgIH1cbiAgICBdXG4gICAgY29uc3QgZGF0YVRhYmxlQ29sdW1uID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnUmVjZWlwdCcsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3JlY2VpcHRfbm8nLFxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdEYXRlJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncmVjZWlwdF9kYXRlJyxcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnUXR5JyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncXR5JyxcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVG90YWwnLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICd0b3RhbCcsXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBkYXRhVGFibGVDb2x1bW46ZGF0YVRhYmxlQ29sdW1uLFxuICAgICAgICAgICAgVG90YWxUcmFuc2FjdGlvbjpcIjIwMFwiLFxuICAgICAgICAgICAgVG90YWxJbmNvbWU6XCI0MDBcIixcbiAgICAgICAgICAgIFRvdGFsQ2F0ZWdvcnk6XCI2MDBcIixcbiAgICAgICAgICAgIFRvdGFsUHJvZHVjdDpcIjE1MDBcIixcbiAgICAgICAgICAgIGRhdGFDaGFydDpkYXRhQ2hhcnQsXG4gICAgICAgICAgICBkYXRhVGFibGU6ZGF0YVRhYmxlLFxuICAgICAgICB9XG4gICAgfVxufSAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaXN0RGVzaGJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdERlc2hib2FyZCc7XG5pbXBvcnQgTmF2TWVudURlc2t0b3AgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZNZW51RGVza3RvcCc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZNZW51RGVza3RvcC8+XG4gICAgICAgICAgICAgICAgPFRvcGljc0xpc3QvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9