(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _devices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./devices.component */ "./src/app/devices.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./link.component */ "./src/app/link.component.ts");
/* harmony import */ var _link_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link.guard */ "./src/app/link.guard.ts");
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error.component */ "./src/app/error.component.ts");









var routes = [
    { path: '', redirectTo: 'devices', pathMatch: 'full' },
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'devices', component: _devices_component__WEBPACK_IMPORTED_MODULE_4__["DevicesComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'link-account', component: _link_component__WEBPACK_IMPORTED_MODULE_6__["LinkAccountComponent"], canActivate: [_link_guard__WEBPACK_IMPORTED_MODULE_7__["LinkGuard"]] },
    { path: 'error', component: _error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'Device Manager';
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.authService.auth.signOut().then(function () {
            _this.router.navigate(['login']);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n    <mat-toolbar>\n      <span>{{ title }}</span>\n      <span class=\"spacer\"></span>\n      <button *ngIf=\"authService.authState | async as user\" (click)=\"logout()\" mat-icon-button>\n        <mat-icon aria-label=\"Log out\">exit_to_app</mat-icon>\n      </button>\n    </mat-toolbar>\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _devices_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./devices.component */ "./src/app/devices.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _link_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./link.component */ "./src/app/link.component.ts");
/* harmony import */ var _link_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./link.guard */ "./src/app/link.guard.ts");
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error.component */ "./src/app/error.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _devices_component__WEBPACK_IMPORTED_MODULE_7__["DevicesComponent"],
                _link_component__WEBPACK_IMPORTED_MODULE_9__["LinkAccountComponent"],
                _error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"]
            ],
            providers: [
                _auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                _link_guard__WEBPACK_IMPORTED_MODULE_10__["LinkGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authService.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user == null) {
                _this.router.navigate(['login']);
                return false;
            }
            return true;
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/devices.component.ts":
/*!**************************************!*\
  !*** ./src/app/devices.component.ts ***!
  \**************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var DeviceType;
(function (DeviceType) {
    DeviceType["Light"] = "light";
    DeviceType["Thermostat"] = "thermostat";
})(DeviceType || (DeviceType = {}));
var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(authService, afStore, snackBar) {
        this.authService = authService;
        this.afStore = afStore;
        this.snackBar = snackBar;
    }
    DevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.devices = this.authService.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (user) { return user != null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            // List the collection of devices for this user once signed in
            return _this.afStore
                .collection('devices', function (ref) { return ref.where('owner', '==', user.uid); })
                .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                data.icon = _this.deviceIcon(data);
                data.status = _this.deviceState(data);
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            }); }));
        }));
    };
    /**
     * Determine the icon to display based on the device type
     */
    DevicesComponent.prototype.deviceIcon = function (device) {
        switch (device.type) {
            case DeviceType.Light: return 'lightbulb_outline';
            case DeviceType.Thermostat: return 'ac_unit';
            default: return 'developer_board';
        }
    };
    /**
     * Determine the state to display
     */
    DevicesComponent.prototype.deviceState = function (device) {
        if (!device.online || !device.state) {
            return 'Offline';
        }
        switch (device.type) {
            case DeviceType.Light:
                return device.state.on ? "Brightness: " + device.state.brightness : 'OFF';
            case DeviceType.Thermostat:
                return (device.state.mode !== 'off') ? "Mode: " + device.state.mode + ", Setpoint: " + device.state.setpoint : 'OFF';
            default:
                return 'Unknown Device';
        }
    };
    /**
     * Remove this device from the user's account
     */
    DevicesComponent.prototype.deleteDevice = function (device) {
        var _this = this;
        var batch = this.afStore.firestore.batch();
        // Delete the device configuration, followed by the device
        batch.delete(this.afStore.firestore.doc("device-configs/" + device.id));
        batch.delete(this.afStore.firestore.doc("devices/" + device.id));
        batch.commit().then(function () {
            _this.snackBar.open("Deleted " + device.name, '', {
                duration: 2000,
            });
        });
    };
    DevicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devices',
            template: "\n    <mat-list role=\"list\">\n      <mat-list-item role=\"listitem\" *ngFor=\"let device of devices | async\">\n        <mat-icon matListIcon aria-label=\"Device type\">{{ device.icon }}</mat-icon>\n        <h3 matLine> {{ device.name }} </h3>\n        <p matLine> {{ device.status }} </p>\n        <button mat-icon-button (click)=\"deleteDevice(device)\">\n            <mat-icon>delete</mat-icon>\n        </button>\n      </mat-list-item>\n    </mat-list>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/app/error.component.ts":
/*!************************************!*\
  !*** ./src/app/error.component.ts ***!
  \************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: "\n    <div style=\"text-align:center;\">\n      <h1>Account Linking Error</h1>\n      <p>We were unable to link your account with the Google Assistant.</p>\n    </div>\n  "
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/link.component.ts":
/*!***********************************!*\
  !*** ./src/app/link.component.ts ***!
  \***********************************/
/*! exports provided: LinkAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkAccountComponent", function() { return LinkAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





var LinkAccountComponent = /** @class */ (function () {
    function LinkAccountComponent(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    LinkAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.idToken.subscribe(function (token) {
            _this.idToken = token;
        });
        this.route.queryParamMap.subscribe(function (params) {
            _this.redirectUri = params.get('redirect_uri');
            _this.state = params.get('state');
        });
    };
    LinkAccountComponent.prototype.login = function () {
        var _this = this;
        this.authService.auth.setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].Auth.Persistence.NONE).then(function () {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
            _this.authService.auth.signInWithRedirect(provider);
        });
    };
    LinkAccountComponent.prototype.logout = function () {
        this.authService.auth.signOut();
    };
    LinkAccountComponent.prototype.linkAccount = function () {
        var next = new URL(this.redirectUri);
        next.searchParams.append('code', this.idToken);
        next.searchParams.append('state', this.state);
        window.location.href = next.toString();
    };
    LinkAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-link',
            template: "\n    <div style=\"text-align:center; padding:16px\">\n      <div *ngIf=\"authService.user | async as user; else showLogin\">\n        <h3>Logged in as {{ user.displayName }}</h3>\n        <p>\n          Click 'Link this Account' to authorize the Google Assistant\n          to control your Smart Home devices.\n        </p>\n        <button (click)=\"linkAccount()\" mat-raised-button style=\"margin-right: 8px;\">\n          Link this Account\n        </button>\n        <button (click)=\"logout()\" mat-raised-button>\n          Sign out\n        </button>\n      </div>\n    </div>\n\n    <ng-template #showLogin>\n      <h1>Link Smart Home Account</h1>\n      <p>Sign in with your Google account to link your devices to the Google Assistant.</p>\n      <button (click)=\"login()\" mat-raised-button>\n        Sign in with Google\n      </button>\n    </ng-template>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LinkAccountComponent);
    return LinkAccountComponent;
}());



/***/ }),

/***/ "./src/app/link.guard.ts":
/*!*******************************!*\
  !*** ./src/app/link.guard.ts ***!
  \*******************************/
/*! exports provided: LinkGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkGuard", function() { return LinkGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var LinkGuard = /** @class */ (function () {
    function LinkGuard(router) {
        this.router = router;
    }
    LinkGuard.prototype.canActivate = function (next, state) {
        var params = next.queryParamMap;
        var allowedHosts = [
            'https://oauth-redirect.googleusercontent.com',
            'https://developers.google.com'
        ];
        // Validate account linking request parameters
        if (!params.has('client_id')
            || !params.has('response_type')
            || !params.has('redirect_uri')
            // Client id matches expected value
            || params.get('client_id') !== _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].clientId
            // Client is requesting an authorization code
            || params.get('response_type') !== 'code'
            // Client requests a redirect to a known host
            || !allowedHosts.some(function (element, _index, _array) { return params.get('redirect_uri').startsWith(element); })) {
            console.error('Invalid Link Request', state.url);
            this.router.navigate(['error']);
            return false;
        }
        return true;
    };
    LinkGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LinkGuard);
    return LinkGuard;
}());



/***/ }),

/***/ "./src/app/login.component.ts":
/*!************************************!*\
  !*** ./src/app/login.component.ts ***!
  \************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Redirect only on successful login
        this.authService.authState.subscribe(function (user) {
            if (user) {
                _this.router.navigate(['devices']);
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
        this.authService.auth.signInWithRedirect(provider);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: "\n    <div style=\"text-align:center;\">\n      <h1>Smart Home Device Manager</h1>\n      <p>Sign in with your Google account to view and manage your IoT devices.</p>\n      <button (click)=\"login()\" mat-raised-button>\n        Sign in with Google\n      </button>\n    </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



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
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyChfxrbgd5OEJlgy7aw8D7pvlaHsPM1hlI",
        authDomain: "casaminha-2e0ca.firebaseapp.com",
        databaseURL: "https://casaminha-2e0ca.firebaseio.com",
        projectId: "casaminha-2e0ca",
        storageBucket: "casaminha-2e0ca.appspot.com",
        messagingSenderId: "567617726062"
    },
    clientId: "567617726062-9r9upj4tip1nfdupm3iin2ld6t7coa0t.apps.googleusercontent.com"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/neuberfran/GCP5final/nodejs-docs-samples/iot/mqtt_example/firebasebackup01/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map