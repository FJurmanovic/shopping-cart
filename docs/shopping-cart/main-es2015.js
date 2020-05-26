(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-shelf></app-shelf>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shelf/shelf.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shelf/shelf.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='collective'>\r\n      \r\n  <a href=\"#\" (click)=\"toggleSide()\" class=\"toggle\" id=\"toggle\">\r\n    <div class=\"toggleBtn\"></div>\r\n  </a>\r\n\r\n\r\n  <div class='side' id=\"side\">\r\n      <div class='sideHeader'>\r\n        <h1>Kosarica</h1>\r\n      </div>\r\n      <div class='card' *ngFor=\"let product of inCart\">\r\n        <div class='thumbnail'>\r\n          <img src=\"{{product.image}}\" alt=\"{{product.name}}\">\r\n        </div>\r\n        <div class='counts'>\r\n          <span class='productCount'>{{product.count}}x</span>\r\n          <br>\r\n          <div class='addRem'>\r\n            <button class='add' (click)=\"remCount(product.id)\">-</button>\r\n            <button class='remove' (click)=\"addCount(product.id)\">+</button>\r\n          </div>\r\n        </div>\r\n        <div class='twoProds'>\r\n          <span class='productName'>{{product.name}}</span>\r\n          <span class='productPrice'>Ukupno: {{(product.price * product.count).toFixed(2)}} kn</span>\r\n        </div>\r\n        <button class='removeBtn' (click)=\"remProd(product.id)\">x</button>\r\n      </div> \r\n      <hr>\r\n      <div class='sideFooter'>\r\n        <div class='sumPrice'>\r\n          <span class='iznosText'>Ukupan iznos:</span>\r\n          <span class='ukupanIznos'>{{ sum.toFixed(2) }} kn </span>\r\n        </div>   \r\n        <div class='ftrBtn'>\r\n          <button>Checkout</button>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      \r\n  </div>\r\n\r\n  <div class='cart' *ngIf=\"products\" id=\"cart\">\r\n    <div class='card' *ngFor=\"let item of products\">\r\n        <img src=\"{{ item.image }}\" alt=\"{{ item.name }}\">\r\n        <br>\r\n        <div class='name'>{{ item.name }}</div>\r\n        <br>\r\n        <div class='price'>{{ item.price.amount + \" \" + item.price.currency + \"/\" + item.price.measureUnit }}</div>\r\n        <br>\r\n        <button (click)=\"toCart(item.id)\">DODAJ</button>\r\n    </div>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_shelf_shelf_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shelf/shelf.component */ "./src/app/components/shelf/shelf.component.ts");




const routes = [
    { path: '', component: _components_shelf_shelf_component__WEBPACK_IMPORTED_MODULE_3__["ShelfComponent"], data: { title: 'Shopping Cart' } },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'shopping-cart';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shelf_shelf_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shelf/shelf.component */ "./src/app/components/shelf/shelf.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_shelf_shelf_component__WEBPACK_IMPORTED_MODULE_5__["ShelfComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/shelf/shelf.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/shelf/shelf.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Open+Sans&display=swap\");\n* {\n  box-sizing: border-box;\n}\n.collective {\n  font-family: \"Open Sans\", sans-serif;\n}\n.collective a.toggle div.toggleBtn.on::before {\n  right: 0;\n}\n.collective a.toggle div.on:hover + .hover {\n  display: block;\n  position: absolute;\n  top: 10px;\n  right: 0;\n}\n.collective a.toggle div.toggleBtn::before {\n  content: \" \";\n  height: 0;\n  position: absolute;\n  top: 10px;\n  width: 0;\n  z-index: 1;\n  right: 400px;\n  border: medium solid #000000;\n  border-width: 20px 20px 20px 0;\n  border-color: transparent #000000 transparent transparent;\n}\n.collective .cart {\n  width: calc(100% - 400px);\n  flex-basis: 0;\n  flex-grow: 999;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 1rem;\n  flex: 3 0px;\n}\n.collective .cart .card {\n  border: 1px solid black;\n  text-align: center;\n  margin: 6px 6px;\n  padding-bottom: 15px;\n}\n.collective .cart .card img {\n  margin-top: 15px;\n  width: 90%;\n  border: 1px solid #000000;\n}\n.collective .cart .card .name {\n  width: 90%;\n  font-size: 1.1rem;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.collective .cart .card .price {\n  font-size: 1.1rem;\n  padding-top: 6px;\n  font-weight: bold;\n  color: #000000;\n}\n.collective .cart .card button {\n  width: 45%;\n  height: 2rem;\n  background-color: #eeeeee;\n  border: 1px solid #dddddd;\n}\n.collective .cart .card button:hover {\n  background-color: #e6e6e6;\n}\n.collective .cart .card:hover {\n  border: 1px solid #aaaaaa;\n}\n.collective .side {\n  height: 100%;\n  width: 400px;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  background-color: #424242;\n  color: #ffffff;\n  overflow-x: hidden;\n  padding-top: 20px;\n}\n.collective .side .sideHeader {\n  width: 100%;\n  text-align: center;\n}\n.collective .side .card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  overflow: hidden;\n  position: relative;\n  margin: 10px 1rem;\n  display: inline-grid;\n  grid-template-columns: 100px 50px auto;\n  grid-gap: 10px;\n  align-items: center;\n  justify-items: center;\n  background: #f3f3f3;\n  color: #202020;\n}\n.collective .side .card .thumbnail {\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  z-index: 2;\n  left: 0;\n  margin: auto;\n  padding: 2px;\n}\n.collective .side .card .thumbnail img {\n  width: 90px;\n  height: 90px;\n  border-radius: 100%;\n  border: 1px solid #202020;\n  margin: 4px;\n  padding: 3px;\n}\n.collective .side .card .counts {\n  height: 1fr;\n  text-align: center;\n}\n.collective .side .card .counts .productCount {\n  font-size: 2em;\n}\n.collective .side .card .counts .addRem {\n  text-align: center;\n}\n.collective .side .card .counts .addRem button {\n  width: 20px;\n  height: 20px;\n  margin: 0 1px;\n  text-decoration: none;\n  color: #ffffff;\n  background-color: #333333;\n  border-radius: 100%;\n  border: none;\n}\n.collective .side .card .counts .addRem button:hover {\n  background-color: #666666;\n}\n.collective .side .card .twoProds {\n  width: 190px;\n}\n.collective .side .card .twoProds .productName {\n  display: block;\n  max-width: 95%;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n.collective .side .card .twoProds .productPrice {\n  display: block;\n  font-weight: bold;\n}\n.collective .side .card .removeBtn {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  margin: 0 1px;\n  text-decoration: none;\n  color: #ffffff;\n  background-color: #333333;\n  border-radius: 100%;\n  border: none;\n  top: 5px;\n  right: 5px;\n}\n.collective .side .card .removeBtn:hover {\n  background-color: #666666;\n}\n.collective .side .card:hover {\n  background-color: #ececec;\n}\n.collective .side .sideFooter {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.collective .side .sideFooter .sumPrice .izonsText {\n  font-size: 1.3em;\n}\n.collective .side .sideFooter .sumPrice .ukupanIznos {\n  font-size: 1.7em;\n  display: block;\n  font-weight: bold;\n}\n.collective .side .sideFooter .ftrBtn {\n  right: 15px;\n  display: inline;\n}\n.collective .side .sideFooter .ftrBtn button {\n  padding-right: 15px;\n  padding-left: 15px;\n  height: 2rem;\n  background-color: #eeeeee;\n  border: 1px solid #dddddd;\n}\n.collective .side .sideFooter .ftrBtn button:hover {\n  background-color: 1px solid #e6e6e6;\n}\n@media only screen and (max-width: 680px) {\n  .collective .side {\n    position: relative;\n    width: 100%;\n  }\n  .collective .side .card {\n    width: 98%;\n    margin-left: 1%;\n  }\n  .collective .cart {\n    width: 100%;\n  }\n  .collective .toggle {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGVsZi9FOlxccmVwb3NcXGdpdGh1Yi5jb21cXFl1cm1hXFxzaG9wcGluZy1jYXJ0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaGVsZlxcc2hlbGYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hlbGYvc2hlbGYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkVBQUE7QUFFUjtFQUNFLHNCQUFBO0FDQUY7QURJQTtFQUNFLG9DQUFBO0FDREY7QURJSTtFQUNFLFFBQUE7QUNGTjtBRE9FO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNMSjtBRFFFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EseURBQUE7QUNOSjtBRFFFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw0REFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDTko7QURPSTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNMTjtBRE1NO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNKUjtBRE1NO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKUjtBRE1NO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0pSO0FETU07RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNKUjtBRE1NO0VBQ0UseUJBQUE7QUNKUjtBRE9JO0VBQ0UseUJBQUE7QUNMTjtBRFNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1BKO0FEUU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNOUjtBRFVNO0VBQ0UsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ1JSO0FEU1E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1JWO0FEU1U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1BaO0FEVVE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNSVjtBRFNVO0VBQ0UsY0FBQTtBQ1BaO0FEU1U7RUFDRSxrQkFBQTtBQ1BaO0FEUVk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ05kO0FEUVk7RUFDRSx5QkFBQTtBQ05kO0FEVVE7RUFDRSxZQUFBO0FDUlY7QURTVTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FDUFo7QURTVTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ1BaO0FEVVE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNSVjtBRFVRO0VBQ0UseUJBQUE7QUNSVjtBRFdNO0VBQ0UseUJBQUE7QUNUUjtBRFdNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNUUjtBRFdVO0VBQ0UsZ0JBQUE7QUNUWjtBRFdVO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNUWjtBRFlRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNWVjtBRFdVO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDVFo7QURXVTtFQUNFLG1DQUFBO0FDVFo7QURrQkE7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtFQ2hCSjtFRGlCSTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VDZk47RURrQkU7SUFDRSxXQUFBO0VDaEJKO0VEa0JFO0lBQ0UsYUFBQTtFQ2hCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGVsZi9zaGVsZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbi5jb2xsZWN0aXZle1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgJiBhLnRvZ2dsZSBkaXYudG9nZ2xlQnRuIHtcclxuICAgICYub246OmJlZm9yZSB7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gICYgYS50b2dnbGUgZGl2Lm9uOmhvdmVyICsuaG92ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gICYgYS50b2dnbGUgZGl2LnRvZ2dsZUJ0bjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcmlnaHQ6IDQwMHB4O1xyXG4gICAgYm9yZGVyOiBtZWRpdW0gc29saWQgIzAwMDAwMDtcclxuICAgIGJvcmRlci13aWR0aDogMjBweCAyMHB4IDIwcHggMDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzAwMDAwMCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmNhcnR7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDAwcHgpO1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICAgIGZsZXgtZ3JvdzogOTk5O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgIGdyaWQtZ2FwOiAxcmVtO1xyXG4gICAgZmxleDogMyAwcHg7XHJcbiAgICAuY2FyZHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiA2cHggNnB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgaW1ne1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwOyAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLm5hbWV7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB9XHJcbiAgICAgIC5wcmljZXtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbnsgICBcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkOmhvdmVye1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGV7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgd2lkdGg6IDQwMHB4OyBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7IFxyXG4gICAgdG9wOiAwOyBcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4OyAgXHJcbiAgICAgIC5zaWRlSGVhZGVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoMXtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmR7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IC00cHggcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDUwcHggYXV0bztcclxuICAgICAgICBncmlkLWdhcDogMTBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xyXG4gICAgICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgICAgIC50aHVtYm5haWx7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgLy90cmFuc2l0aW9uOiB3aWR0aCAwLjRzO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMjAyMDIwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY291bnRze1xyXG4gICAgICAgICAgaGVpZ2h0OiAxZnI7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAucHJvZHVjdENvdW50e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hZGRSZW17XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMXB4O1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlcntcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50d29Qcm9kc3tcclxuICAgICAgICAgIHdpZHRoOiAxOTBweDtcclxuICAgICAgICAgIC5wcm9kdWN0TmFtZXtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2R1Y3RQcmljZXtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVtb3ZlQnRue1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMXB4O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlbW92ZUJ0bjpob3ZlcntcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbiAgICAgIH1cclxuICAgICAgLnNpZGVGb290ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAuc3VtUHJpY2V7XHJcbiAgICAgICAgICAuaXpvbnNUZXh0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVrdXBhbkl6bm9ze1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mdHJCdG57XHJcbiAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b246aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIHtcclxuICAuY29sbGVjdGl2ZSB7XHJcbiAgICAuc2lkZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcnQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC50b2dnbGUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbGxlY3RpdmUge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbi5jb2xsZWN0aXZlIGEudG9nZ2xlIGRpdi50b2dnbGVCdG4ub246OmJlZm9yZSB7XG4gIHJpZ2h0OiAwO1xufVxuLmNvbGxlY3RpdmUgYS50b2dnbGUgZGl2Lm9uOmhvdmVyICsgLmhvdmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMDtcbn1cbi5jb2xsZWN0aXZlIGEudG9nZ2xlIGRpdi50b2dnbGVCdG46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMDtcbiAgei1pbmRleDogMTtcbiAgcmlnaHQ6IDQwMHB4O1xuICBib3JkZXI6IG1lZGl1bSBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItd2lkdGg6IDIwcHggMjBweCAyMHB4IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzAwMDAwMCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cbi5jb2xsZWN0aXZlIC5jYXJ0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwMHB4KTtcbiAgZmxleC1iYXNpczogMDtcbiAgZmxleC1ncm93OiA5OTk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDFyZW07XG4gIGZsZXg6IDMgMHB4O1xufVxuLmNvbGxlY3RpdmUgLmNhcnQgLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDZweCA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLmNvbGxlY3RpdmUgLmNhcnQgLmNhcmQgaW1nIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cbi5jb2xsZWN0aXZlIC5jYXJ0IC5jYXJkIC5uYW1lIHtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY29sbGVjdGl2ZSAuY2FydCAuY2FyZCAucHJpY2Uge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmNvbGxlY3RpdmUgLmNhcnQgLmNhcmQgYnV0dG9uIHtcbiAgd2lkdGg6IDQ1JTtcbiAgaGVpZ2h0OiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuLmNvbGxlY3RpdmUgLmNhcnQgLmNhcmQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cbi5jb2xsZWN0aXZlIC5jYXJ0IC5jYXJkOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYWFhYTtcbn1cbi5jb2xsZWN0aXZlIC5zaWRlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNDAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29sbGVjdGl2ZSAuc2lkZSAuc2lkZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29sbGVjdGl2ZSAuc2lkZSAuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTBweCAxcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCA1MHB4IGF1dG87XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIGNvbG9yOiAjMjAyMDIwO1xufVxuLmNvbGxlY3RpdmUgLnNpZGUgLmNhcmQgLnRodW1ibmFpbCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMjtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAycHg7XG59XG4uY29sbGVjdGl2ZSAuc2lkZSAuY2FyZCAudGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMDIwMjA7XG4gIG1hcmdpbjogNHB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG4uY29sbGVjdGl2ZSAuc2lkZSAuY2FyZCAuY291bnRzIHtcbiAgaGVpZ2h0OiAxZnI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb2xsZWN0aXZlIC5zaWRlIC5jYXJkIC5jb3VudHMgLnByb2R1Y3RDb3VudCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLmNvbGxlY3RpdmUgLnNpZGUgLmNhcmQgLmNvdW50cyAuYWRkUmVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbGxlY3RpdmUgLnNpZGUgLmNhcmQgLmNvdW50cyAuYWRkUmVtIGJ1dHRvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMCAxcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jb2xsZWN0aXZlIC5zaWRlIC5jYXJkIC5jb3VudHMgLmFkZFJlbSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xufVxuLmNvbGxlY3RpdmUgLnNpZGUgLmNhcmQgLnR3b1Byb2RzIHtcbiAgd2lkdGg6IDE5MHB4O1xufVxuLmNvbGxlY3RpdmUgLnNpZGUgLmNhcmQgLnR3b1Byb2RzIC5wcm9kdWN0TmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5jb2xsZWN0aXZlIC5zaWRlIC5jYXJkIC50d29Qcm9kcyAucHJvZHVjdFByaWNlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbGxlY3RpdmUgLnNpZGUgLmNhcmQgLnJlbW92ZUJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwIDFweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbn1cbi5jb2xsZWN0aXZlIC5zaWRlIC5jYXJkIC5yZW1vdmVCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2NjY2O1xufVxuLmNvbGxlY3RpdmUgLnNpZGUgLmNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xufVxuLmNvbGxlY3RpdmUgLnNpZGUgLnNpZGVGb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5jb2xsZWN0aXZlIC5zaWRlIC5zaWRlRm9vdGVyIC5zdW1QcmljZSAuaXpvbnNUZXh0IHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbn1cbi5jb2xsZWN0aXZlIC5zaWRlIC5zaWRlRm9vdGVyIC5zdW1QcmljZSAudWt1cGFuSXpub3Mge1xuICBmb250LXNpemU6IDEuN2VtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29sbGVjdGl2ZSAuc2lkZSAuc2lkZUZvb3RlciAuZnRyQnRuIHtcbiAgcmlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5jb2xsZWN0aXZlIC5zaWRlIC5zaWRlRm9vdGVyIC5mdHJCdG4gYnV0dG9uIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBoZWlnaHQ6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG4uY29sbGVjdGl2ZSAuc2lkZSAuc2lkZUZvb3RlciAuZnRyQnRuIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IDFweCBzb2xpZCAjZTZlNmU2O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY4MHB4KSB7XG4gIC5jb2xsZWN0aXZlIC5zaWRlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNvbGxlY3RpdmUgLnNpZGUgLmNhcmQge1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICB9XG4gIC5jb2xsZWN0aXZlIC5jYXJ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuY29sbGVjdGl2ZSAudG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/shelf/shelf.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/shelf/shelf.component.ts ***!
  \*****************************************************/
/*! exports provided: ShelfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShelfComponent", function() { return ShelfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ShelfComponent = class ShelfComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.products = [];
        this.inCart = [];
    }
    toggleSide() {
        let side = document.getElementById("side");
        let toggle = document.getElementById("toggle");
        let div0 = toggle.getElementsByTagName("div")[0];
        let cart = document.getElementById("cart");
        if (side.style.display != "none") {
            side.style.display = "none";
            div0.className = "toggleBtn on";
            cart.style.width = "100%";
        }
        else {
            side.style.display = "block";
            div0.className = "toggleBtn";
            cart.style.width = "";
        }
    }
    toCart(id) {
        if ((this.inCart.filter((obj) => obj.id === id).length) > 0) {
            this.inCart.find(x => x.id == id).count++;
        }
        else {
            this.inCart.push({ id: id, name: this.products[id - 1].name, image: this.products[id - 1].image, price: this.products[id - 1].price["amount"], count: 1 });
        }
        this.sum += this.inCart.find(x => x.id == id).price;
    }
    addCount(id) {
        this.inCart.find(x => x.id == id).count++;
        this.sum += this.inCart.find(x => x.id == id).price;
    }
    remCount(id) {
        if (this.inCart.find(x => x.id == id).count <= 1) {
            this.sum -= this.inCart.find(x => x.id == id).price;
            this.inCart.splice(this.inCart.findIndex(x => x.id == id), 1);
        }
        else if (this.inCart.find(x => x.id == id).count > 0) {
            this.inCart.find(x => x.id == id).count--;
            this.sum -= this.inCart.find(x => x.id == id).price;
        }
    }
    remProd(id) {
        this.sum -= this.inCart.find(x => x.id == id).price * this.inCart.find(x => x.id == id).count;
        this.inCart.splice(this.inCart.findIndex(x => x.id == id), 1);
        if (this.sum < 0) {
            this.sum = 0.00;
        }
    }
    ngOnInit() {
        this.sum = 0.00;
        this.httpService.get('./assets/products.json').subscribe(data => {
            this.productsObject = data;
            console.log(this.productsObject);
            this.products = this.productsObject["products"];
            console.log(this.products);
        }, (err) => {
            console.log(err.message);
        });
    }
};
ShelfComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShelfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shelf',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shelf.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shelf/shelf.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shelf.component.scss */ "./src/app/components/shelf/shelf.component.scss")).default]
    })
], ShelfComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\repos\github.com\Yurma\shopping-cart\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map