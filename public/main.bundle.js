webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(189),
        styles: [__webpack_require__(175)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_timeline_timeline_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_post_image_post_image_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_post_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routes__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_draw_image_draw_image_component__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Components







// Services





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_timeline_timeline_component__["a" /* TimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_post_image_post_image_component__["a" /* PostImageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_draw_image_draw_image_component__["a" /* DrawImageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_15__app_routes__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_timeline_timeline_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_post_image_post_image_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_timeline_timeline_component__["a" /* TimelineComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'post-image', component: __WEBPACK_IMPORTED_MODULE_4__components_post_image_post_image_component__["a" /* PostImageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DrawImageComponent = (function () {
    // @ViewChild('canvasObj') canvasObj:ElementRef;
    // canvas;
    // c;
    function DrawImageComponent(myElement) {
        this.myElement = myElement;
    }
    DrawImageComponent.prototype.ngAfterViewInit = function () {
        this.loadScript("setup.js");
        this.loadScript("toolbar.js");
    };
    DrawImageComponent.prototype.loadScript = function (name) {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "http://localhost:3001/js/" + name;
        this.myElement.nativeElement.appendChild(s);
    };
    DrawImageComponent.prototype.ngOnInit = function () {
        // this.canvas = this.canvasObj.nativeElement;
        // this.c = this.canvas.getContext("2d");
        // this.c.fillStyle = "red";
        // this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    return DrawImageComponent;
}());
DrawImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-draw-image',
        template: __webpack_require__(190),
        styles: [__webpack_require__(176), __webpack_require__(177), __webpack_require__(178), __webpack_require__(179), __webpack_require__(180), __webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], DrawImageComponent);

var _a;
//# sourceMappingURL=draw-image.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationComponent = (function () {
    function NavigationComponent(builder, authService, router, _flashMessagesService) {
        this.builder = builder;
        this.authService = authService;
        this.router = router;
        this._flashMessagesService = _flashMessagesService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate['login'];
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(192),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], NavigationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return passwordConfirmed; });
var pass = '';
var isEmail = function (c) {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return EMAIL_REGEXP.test(c.value) ? null : {
        isEmail: {
            valid: false
        }
    };
};
var password = function (c) {
    pass = c.value;
    return 1 ? null : {
        passwordConfirmed: {
            valid: false
        }
    };
};
var passwordConfirmed = function (c) {
    return pass == c.value ? null : {
        passwordConfirmed: {
            valid: false
        }
    };
};
//# sourceMappingURL=form.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3001/api/users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3001/api/users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3001/api/users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('usen', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null,
            this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".img{\n\twidth: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "#container{\n\tmargin: 10px 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "#logo{\n\twidth: 8%;\n}\n\n.tool-icon{\n\twidth: 30px;\n\theight: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "#wrapper{\r\n\twidth: 100%;\r\n}\r\n\r\n#editor-container{\r\n\tmargin-top: 15px;\r\n\theight: 500px;\r\n\toverflow: hidden;\r\n\tborder: 2px solid #d9d9d9;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n#canvas{\r\n\tdisplay: inline-block;\r\n\theight: 100%;\r\n\tfloat: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".color{\n\tdisplay: block;\n\twidth: 30px;\n\theight: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".tools-toolbar{\n\tdisplay: inline-block;\n\twidth: 50px;\n\theight: 100%;\n\tfloat: left;\n\n\tbackground-color: #f2f2f2;\n}\n\n.right-border{\n\tborder-right: 3px solid #d9d9d9;\n}\n.left-border{\n\tborder-left: 3px solid #d9d9d9;\n}\n\n.tool{\n\theight: 30px;\n\tpadding: 10px;\n\n\tborder-bottom: 2px solid #d9d9d9;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "ul{\n\tdisplay: block;\n\theight: 50px;\n\toverflow: hidden;\n\tfont-size: 20px;\n\t\n\tbackground-color: white;\n}\n\n.nav-elem{\n\theight: 100%;\n}\n\n.nav-elem a{\n\tdisplay: inline-block;\n\tmin-width: 70px;\n\theight: 100%;\n\tline-height: 25px;\n\ttext-align: center;\n\tpadding: 10px;\n\tcolor: black;\n\n\tbackground-color: white;\n}\n\n.nav-elem a:hover{\n\tbackground-color: #e6e6e6;\n}\n\n.left{\n\tfloat: left;\n}\n\n.right{\n\tfloat: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "#add-tag{\n\tdisplay: inline-block;\n\theight: 100%;\n\tfloat: left;\n\tmargin-left: 10px;\n}\n\n#post-image-tags{\n\tmargin-top: 15px;\n\tmargin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<div id=\"page-container\">\n\t<div id=\"page-header\">\n\t\t<img src=\"/img/drawingapp/logo.png\" class=\"img\" />\n\t\t<app-navigation></app-navigation>\n\t</div>\n\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n\t<div id=\"wrapper\">\n\t\t<!-- <img src=\"/img/drawingapp/logo.png\" id=\"logo\"> -->\n\n\t\t<div id=\"editor-container\">\n\t\t\t<div class=\"tools-toolbar right-border\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li class=\"tool\" id=\"brush\"><img src=\"/img/drawingapp/paintbrush.png\" class=\"tool-icon\"></li>\n\t\t\t\t\t<li class=\"tool\" id=\"line\"><img src=\"/img/drawingapp/diag-line.png\" class=\"tool-icon\"></li>\n\t\t\t\t\t<li class=\"tool\" id=\"circle\"><img src=\"/img/drawingapp/circle.png\" class=\"tool-icon\"></li>\n\t\t\t\t\t<li class=\"tool\" id=\"square\"><img src=\"/img/drawingapp/square.png\" class=\"tool-icon\"></li>\n\t\t\t\t\t<li class=\"tool\" id=\"eraser\"><img src=\"/img/drawingapp/eraser.png\" class=\"tool-icon\"></li>\n\t\t\t\t\t<!-- <li class=\"tool\" id=\"undo\"><img src=\"img/undo.png\" class=\"tool-icon\"></li> -->\n\t\t\t\t\t<li class=\"tool\" id=\"bin\"><img src=\"/img/drawingapp/bin.png\" class=\"tool-icon\"></li>\n\t\t\t\t\t<li class=\"tool\"><a download=\"name.png\" id=\"save\"><img src=\"/img/drawingapp/save.png\" class=\"tool-icon\"></a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t\t<canvas id=\"canvas\" width=\"1060\" height=\"500\" #canvasObj></canvas>\n\n\t\t\t<div class=\"tools-toolbar left-border\">\n\t\t\t\t<ul>\n\t\t\t\t\t<li class=\"tool\"><a id=\"red\" class=\"color\"></a></li>\n\t\t\t\t\t<li class=\"tool\"><a id=\"blue\" class=\"color\"></a></li>\n\t\t\t\t\t<li class=\"tool\"><a id=\"yellow\" class=\"color\"></a></li>\n\t\t\t\t\t<li class=\"tool\"><a id=\"green\" class=\"color\"></a></li>\n\t\t\t\t\t<li class=\"tool\"><a id=\"orange\" class=\"color\"></a></li>\n\t\t\t\t\t<li class=\"tool\"><a id=\"white\" class=\"color\"></a></li>\n\t\t\t\t\t<li class=\"tool\"><a id=\"gray\" class=\"color\"></a></li>\n\t\t\t\t\t<li class=\"tool\"><a id=\"black\" class=\"color\"></a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<div class=\"block content\">\n\t<h1 class=\"med-title\" id=\"form-header\">Login</h1>\n\n\t<flash-messages></flash-messages>\n\n\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\t\t<div class=\"form-line\">\n\t\t\t<input type=\"text\" name=\"username\" id=\"username\" formControlName=\"username\" placeholder=\"Username\" class=\"input\">\n\t\t</div>\n\n\t\t<div class=\"form-line\">\n\t\t\t<input type=\"password\" name=\"password\" id=\"password\" formControlName=\"password\" placeholder=\"Password\" class=\"input\">\n\t\t</div>\n\n\t\t<button type=\"submit\" class=\"basic-button\" id=\"submit\">Submit</button>\n\t</form>\n</div>\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<nav class=\"block\">\n\t<ul>\n\t\t<li class=\"nav-elem left\"><a routerLink=\"/\">Home</a></li>\n\t\t<!-- <li class=\"nav-elem left\"><a routerLink=\"/\">Category</a></li> -->\n\t\t<li class=\"nav-elem left\" *ngIf=\"authService.loggedIn()\"><a routerLink=\"/post-image\">Draw Image</a></li>\n\t\t<li class=\"nav-elem right\" *ngIf=\"authService.loggedIn()\"><a routerLink=\"/profile\">Profile</a></li>\n\t\t<li class=\"nav-elem right\" *ngIf=\"!authService.loggedIn()\"><a routerLink=\"/login\">Login</a></li>\n\t\t<li class=\"nav-elem right\" *ngIf=\"!authService.loggedIn()\"><a routerLink=\"/register\">Register</a></li>\n\t\t<li class=\"nav-elem right\" *ngIf=\"authService.loggedIn()\"><a href=\"#\" (click)=\"onLogout()\">Logout</a></li>\n\t</ul>\n</nav>\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<div class=\"block content\">\n\t<h1 class=\"med-title\" id=\"form-header\">Draw Image</h1>\n\n\t<app-draw-image></app-draw-image>\n\n\t<form [formGroup]=\"postImageForm\" (ngSubmit)=\"postImage()\">\n\t\t<div class=\"form-line\">\n\t\t\t<input type=\"text\" name=\"title\" id=\"title\" formControlName=\"title\" placeholder=\"Title\" class=\"input\">\n\t\t</div>\n\n\t\t<div class=\"form-line\">\n\t\t\t<div formArrayName=\"tags\"></div>\n\t\t\t<input type=\"text\" name=\"tagInput\" id=\"tagInput\" formControlName=\"tagInput\" placeholder=\"Tags\" class=\"input\">\n\t\t\t<input type=\"button\" id=\"add-tag\" class=\"basic-button\" value=\"Add tag\" (click)=\"addTag()\"/>\n\t\t</div>\n\n\t\t<ul class=\"tags\" id=\"post-image-tags\">\n\t\t\t<li class=\"tag underline-small\" *ngFor=\"let tag of this.postImageForm.controls.tags['controls']\">\n\t\t\t\t<a routerLink=\"/\">{{ tag.value }}; </a>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<button type=\"submit\" class=\"basic-button\">Submit</button>\n\t</form>\n</div>\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<div class=\"block content\">\n\t<div *ngIf=\"user\">\n\t\t<ul>\n\t\t\t<li>Username: {{ user.username }}</li>\n\t\t\t<li>Email: {{ user.email }}</li>\n\t\t</ul>\n\t</div>\n</div>\n"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<div class=\"block content\">\n\t<h1 class=\"med-title\" id=\"form-header\">Register</h1>\n\n\t<flash-messages></flash-messages>\n\n\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\t\t<div class=\"form-line\">\n\t\t\t<input type=\"text\" name=\"username\" id=\"username\" formControlName=\"username\" placeholder=\"Username\" class=\"input\">\n\t\t</div>\n\n\t\t<div class=\"form-line\">\n\t\t\t<input type=\"text\" name=\"email\" id=\"email\" formControlName=\"email\" placeholder=\"Email\" class=\"input\">\n\t\t</div>\n\n\t\t<div class=\"form-line\">\n\t\t\t<input type=\"password\" name=\"password\" id=\"password\" formControlName=\"password\" placeholder=\"Password\" class=\"input\">\n\t\t</div>\n\n\t\t<div class=\"form-line\">\n\t\t\t<input type=\"password\" name=\"confirm-password\" id=\"confirm-password\" formControlName=\"confirmPassword\" placeholder=\"Confirm Password\" class=\"input\">\n\t\t</div>\n\n\t\t<button type=\"submit\" class=\"basic-button\">Submit</button>\n\t</form>\n</div>\n"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div class=\"block content\">\n\t<div class=\"post-container\" *ngFor=\"let post of data\">\n\t\t<div class=\"post-header\">\n\t\t\t<h1 class=\"post-title underline\">{{ post.title }}</h1>\n\t\t\t<div class=\"post-details\">\n\t\t\t\t<span class=\"post-date\">{{ post.date }}</span><span class=\"post-author\">{{ post.author_name }}</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- <img src=\"{{ post['img-url'] }}\"> -->\n\n\t\t<ul class=\"tags\">\n\t\t\t<li class=\"tag underline-small\" *ngFor=\"let tag of post.tags\">\n\t\t\t\t<a routerLink=\"/\">{{ tag }}</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(builder, _flashMessagesService, authService, router) {
        this.builder = builder;
        this._flashMessagesService = _flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.loginForm = this.builder.group({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required
            ]),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.valid) {
            var user = {
                username: this.loginForm.value.username,
                password: this.loginForm.value.password
            };
            this.authService.authenticateUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.authService.storeUserData(data.token, data.user);
                    _this.router.navigate(['/profile']);
                }
                else {
                    _this._flashMessagesService.show('DSADSD', { cssClass: 'alert-danger', timeout: 5000 });
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(191),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostImageComponent = (function () {
    function PostImageComponent(builder, _flashMessagesService, authService, router, http) {
        this.builder = builder;
        this._flashMessagesService = _flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.postImageForm = this.builder.group({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required
            ]),
            tagInput: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            tags: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormArray */]([]),
        });
    }
    PostImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            console.log("user", _this.user);
        }, function (err) {
            console.log(err);
            //return false;
        });
    };
    PostImageComponent.prototype.addTag = function () {
        var value = this.postImageForm.value.tagInput;
        var control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](value, [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required
        ]);
        if (value != '')
            this.postImageForm.controls.tags['controls'].push(control);
        this.postImageForm.controls.tagInput.setValue('');
        console.log("formtags", this.postImageForm.controls.tags['controls']);
    };
    PostImageComponent.prototype.postImage = function () {
        var _this = this;
        var tagsVal = [];
        if (this.postImageForm.valid) {
            for (var i = 0; i < this.postImageForm.controls.tags['controls'].length; i++) {
                //console.log(this.postImageForm.controls.tags['controls'][i].value);
                tagsVal.push(this.postImageForm.controls.tags['controls'][i].value);
            }
            var picture = {
                author_name: this.user['username'],
                title: this.postImageForm.value.title,
                tags: tagsVal
            };
            console.log(picture);
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            this.http.post('http://localhost:3001/picture/post-picture', picture, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                if (data.success) {
                    _this.router.navigate(['/']);
                }
            });
        }
    };
    return PostImageComponent;
}());
PostImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post-image',
        template: __webpack_require__(193),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"]) === "function" && _e || Object])
], PostImageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=post-image.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            //console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(194),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_form__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(builder, _flashMessagesService, authService, router) {
        this.builder = builder;
        this._flashMessagesService = _flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.loginForm = this.builder.group({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(10)
            ]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__validators_form__["a" /* isEmail */]
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__validators_form__["b" /* password */]
            ]),
            confirmPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__validators_form__["c" /* passwordConfirmed */]
            ]),
        });
    }
    RegisterComponent.prototype.detectChanges = function () {
        console.log('changed');
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.controls.username.valid) {
            this._flashMessagesService.show('Missing username', { cssClass: 'alert-danger', timeout: 5000 });
        }
        else if (!this.loginForm.controls.email.valid) {
            this._flashMessagesService.show('Wrong email', { cssClass: 'alert-danger', timeout: 5000 });
        }
        else if (!this.loginForm.controls.password.valid) {
            this._flashMessagesService.show('Missing password', { cssClass: 'alert-danger', timeout: 5000 });
        }
        else if (!this.loginForm.controls.confirmPassword.valid) {
            this._flashMessagesService.show('Missing password', { cssClass: 'alert-danger', timeout: 5000 });
        }
        if (this.loginForm.valid) {
            var user = {
                username: this.loginForm.value.username,
                email: this.loginForm.value.email,
                password: this.loginForm.value.password,
            };
            this.authService.registerUser(user).subscribe(function (data) {
                if (data.success) {
                    _this._flashMessagesService.show('Registered successfully', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/login']);
                }
                else {
                    //this._flashMessagesService.show('Something went wrong', {cssClass: 'alert-success', timeout: 3000});
                    _this.router.navigate(['/register']);
                }
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(195),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_post_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineComponent = (function () {
    function TimelineComponent(posts) {
        var _this = this;
        posts.getPosts().subscribe(function (data) {
            if (data.success) {
                console.log("Data retrieved successfully");
                _this.data = data.doc;
                console.log("DATA: ", _this.data);
            }
        });
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timeline',
        template: __webpack_require__(196),
        styles: [__webpack_require__(187)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_post_service__["a" /* PostService */]) === "function" && _a || Object])
], TimelineComponent);

var _a;
//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.url = "http://localhost:3001/api/picture/get-pictures";
    }
    PostService.prototype.getPosts = function () {
        return this.http.get(this.url).map(function (response) { return response.json(); });
    };
    return PostService;
}());
PostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 96;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(112);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[231]);
//# sourceMappingURL=main.bundle.js.map