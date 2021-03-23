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
      }), __jsx(_components_listDeshboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        dataTableColumn: this.props.dataTableColumn,
        dataTable: this.props.dataTable,
        dataChart: this.props.dataChart,
        TotalTransaction: this.props.TotalTransaction,
        TotalIncome: this.props.TotalIncome,
        TotalCategory: this.props.TotalCategory,
        TotalProduct: this.props.TotalProduct,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRhdGFUYWJsZUNvbHVtbiIsImRhdGFUYWJsZSIsImRhdGFDaGFydCIsIlRvdGFsVHJhbnNhY3Rpb24iLCJUb3RhbEluY29tZSIsIlRvdGFsQ2F0ZWdvcnkiLCJUb3RhbFByb2R1Y3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7Ozs7Ozs7Ozs2QkFDTztBQUNMLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUksTUFBQyxpRUFBRDtBQUNJLHVCQUFlLEVBQUUsS0FBS0MsS0FBTCxDQUFXQyxlQURoQztBQUVJLGlCQUFTLEVBQUUsS0FBS0QsS0FBTCxDQUFXRSxTQUYxQjtBQUdJLGlCQUFTLEVBQUUsS0FBS0YsS0FBTCxDQUFXRyxTQUgxQjtBQUlJLHdCQUFnQixFQUFFLEtBQUtILEtBQUwsQ0FBV0ksZ0JBSmpDO0FBS0ksbUJBQVcsRUFBRSxLQUFLSixLQUFMLENBQVdLLFdBTDVCO0FBTUkscUJBQWEsRUFBRSxLQUFLTCxLQUFMLENBQVdNLGFBTjlCO0FBT0ksb0JBQVksRUFBRSxLQUFLTixLQUFMLENBQVdPLFlBUDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQURKO0FBY0g7Ozs7RUFoQmVDLCtDOztBQW1CTFQsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDcxZGU0NDE5ZTIxMDczZjE2ODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCBkYXRhQ2hhcnQgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRfZGF0ZTogJzIyLzExLzIwMjEnLFxuICAgICAgICAgICAgaW5jb21lOiA0MDAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0X2RhdGU6ICcyMi8xMS8yMDIxJyxcbiAgICAgICAgICAgIGluY29tZTogMzAwMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdF9kYXRlOiAnMjIvMTEvMjAyMScsXG4gICAgICAgICAgICBpbmNvbWU6IDIwMDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRfZGF0ZTogJzIyLzExLzIwMjEnLFxuICAgICAgICAgICAgaW5jb21lOiAyNzgwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0X2RhdGU6ICcyMi8xMS8yMDIxJyxcbiAgICAgICAgICAgIGluY29tZTogMTg5MCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdF9kYXRlOiAnMjIvMTEvMjAyMScsXG4gICAgICAgICAgICBpbmNvbWU6IDIzOTAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRfZGF0ZTogJzIyLzExLzIwMjEnLFxuICAgICAgICAgICAgaW5jb21lOiAzNDkwLFxuICAgICAgICB9LFxuICAgIF07XG4gICAgY29uc3QgZGF0YVRhYmxlID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHJlY2VpcHRfbm86ICcxMTExJyxcbiAgICAgICAgICAgIHJlY2VpcHRfZGF0ZTogJzExLzExLzIwMjEnLFxuICAgICAgICAgICAgcXR5OiAnMTInLFxuICAgICAgICAgICAgdG90YWw6ICcxMjAwJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICByZWNlaXB0X25vOiAnMTExMScsXG4gICAgICAgICAgICByZWNlaXB0X2RhdGU6ICcxMS8xMS8yMDIxJyxcbiAgICAgICAgICAgIHF0eTogJzEyJyxcbiAgICAgICAgICAgIHRvdGFsOiAnMTIwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgcmVjZWlwdF9ubzogJzExMTEnLFxuICAgICAgICAgICAgcmVjZWlwdF9kYXRlOiAnMTEvMTEvMjAyMScsXG4gICAgICAgICAgICBxdHk6ICcxMicsXG4gICAgICAgICAgICB0b3RhbDogJzEyMDAnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHJlY2VpcHRfbm86ICcxMTExJyxcbiAgICAgICAgICAgIHJlY2VpcHRfZGF0ZTogJzExLzExLzIwMjEnLFxuICAgICAgICAgICAgcXR5OiAnMTInLFxuICAgICAgICAgICAgdG90YWw6ICcxMjAwJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICByZWNlaXB0X25vOiAnMTExMScsXG4gICAgICAgICAgICByZWNlaXB0X2RhdGU6ICcxMS8xMS8yMDIxJyxcbiAgICAgICAgICAgIHF0eTogJzEyJyxcbiAgICAgICAgICAgIHRvdGFsOiAnMTIwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgcmVjZWlwdF9ubzogJzExMTEnLFxuICAgICAgICAgICAgcmVjZWlwdF9kYXRlOiAnMTEvMTEvMjAyMScsXG4gICAgICAgICAgICBxdHk6ICcxMicsXG4gICAgICAgICAgICB0b3RhbDogJzEyMDAnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHJlY2VpcHRfbm86ICcxMTExJyxcbiAgICAgICAgICAgIHJlY2VpcHRfZGF0ZTogJzExLzExLzIwMjEnLFxuICAgICAgICAgICAgcXR5OiAnMTInLFxuICAgICAgICAgICAgdG90YWw6ICcxMjAwJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICByZWNlaXB0X25vOiAnMTExMScsXG4gICAgICAgICAgICByZWNlaXB0X2RhdGU6ICcxMS8xMS8yMDIxJyxcbiAgICAgICAgICAgIHF0eTogJzEyJyxcbiAgICAgICAgICAgIHRvdGFsOiAnMTIwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgcmVjZWlwdF9ubzogJzExMTEnLFxuICAgICAgICAgICAgcmVjZWlwdF9kYXRlOiAnMTEvMTEvMjAyMScsXG4gICAgICAgICAgICBxdHk6ICcxMicsXG4gICAgICAgICAgICB0b3RhbDogJzEyMDAnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHJlY2VpcHRfbm86ICcxMTExJyxcbiAgICAgICAgICAgIHJlY2VpcHRfZGF0ZTogJzExLzExLzIwMjEnLFxuICAgICAgICAgICAgcXR5OiAnMTInLFxuICAgICAgICAgICAgdG90YWw6ICcxMjAwJyxcbiAgICAgICAgfVxuICAgIF1cbiAgICBjb25zdCBkYXRhVGFibGVDb2x1bW4gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdSZWNlaXB0JyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncmVjZWlwdF9ubycsXG4gICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0RhdGUnLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICdyZWNlaXB0X2RhdGUnLFxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdRdHknLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICdxdHknLFxuICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUb3RhbCcsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3RvdGFsJyxcbiAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRhdGFUYWJsZUNvbHVtbjpkYXRhVGFibGVDb2x1bW4sXG4gICAgICAgICAgICBUb3RhbFRyYW5zYWN0aW9uOlwiMjAwXCIsXG4gICAgICAgICAgICBUb3RhbEluY29tZTpcIjQwMFwiLFxuICAgICAgICAgICAgVG90YWxDYXRlZ29yeTpcIjYwMFwiLFxuICAgICAgICAgICAgVG90YWxQcm9kdWN0OlwiMTUwMFwiLFxuICAgICAgICAgICAgZGF0YUNoYXJ0OmRhdGFDaGFydCxcbiAgICAgICAgICAgIGRhdGFUYWJsZTpkYXRhVGFibGUsXG4gICAgICAgIH1cbiAgICB9XG59ICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpc3REZXNoYm9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0RGVzaGJvYXJkJztcbmltcG9ydCBOYXZNZW51RGVza3RvcCBmcm9tICcuLi9jb21wb25lbnRzL05hdk1lbnVEZXNrdG9wJztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdk1lbnVEZXNrdG9wLz5cbiAgICAgICAgICAgICAgICA8TGlzdERlc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICBkYXRhVGFibGVDb2x1bW49e3RoaXMucHJvcHMuZGF0YVRhYmxlQ29sdW1ufVxuICAgICAgICAgICAgICAgICAgICBkYXRhVGFibGU9e3RoaXMucHJvcHMuZGF0YVRhYmxlfVxuICAgICAgICAgICAgICAgICAgICBkYXRhQ2hhcnQ9e3RoaXMucHJvcHMuZGF0YUNoYXJ0fVxuICAgICAgICAgICAgICAgICAgICBUb3RhbFRyYW5zYWN0aW9uPXt0aGlzLnByb3BzLlRvdGFsVHJhbnNhY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIFRvdGFsSW5jb21lPXt0aGlzLnByb3BzLlRvdGFsSW5jb21lfVxuICAgICAgICAgICAgICAgICAgICBUb3RhbENhdGVnb3J5PXt0aGlzLnByb3BzLlRvdGFsQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIFRvdGFsUHJvZHVjdD17dGhpcy5wcm9wcy5Ub3RhbFByb2R1Y3R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==