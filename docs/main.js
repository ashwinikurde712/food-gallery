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
/* harmony import */ var _food_gallary_food_gallary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-gallary/food-gallary.component */ "./src/app/food-gallary/food-gallary.component.ts");
/* harmony import */ var _food_detail_food_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food-detail/food-detail.component */ "./src/app/food-detail/food-detail.component.ts");





var routes = [
    { path: '', redirectTo: 'FoodGallary', pathMatch: 'full' },
    { path: 'FoodGallary', component: _food_gallary_food_gallary_component__WEBPACK_IMPORTED_MODULE_3__["FoodGallaryComponent"] },
    { path: 'foodDetails', component: _food_detail_food_detail_component__WEBPACK_IMPORTED_MODULE_4__["FoodDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Food';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _food_detail_food_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./food-detail/food-detail.component */ "./src/app/food-detail/food-detail.component.ts");
/* harmony import */ var _food_gallary_food_gallary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./food-gallary/food-gallary.component */ "./src/app/food-gallary/food-gallary.component.ts");
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-stars */ "./node_modules/ngx-stars/fesm5/ngx-stars.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _food_detail_food_detail_component__WEBPACK_IMPORTED_MODULE_8__["FoodDetailComponent"], _food_gallary_food_gallary_component__WEBPACK_IMPORTED_MODULE_9__["FoodGallaryComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_stars__WEBPACK_IMPORTED_MODULE_10__["NgxStarsModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/flickr.service.ts":
/*!***********************************!*\
  !*** ./src/app/flickr.service.ts ***!
  \***********************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FlickrService = /** @class */ (function () {
    function FlickrService(http) {
        this.http = http;
        this.flickrParams = {
            params: {
                api_key: 'c28c40210d45d354468a989246cd4b54',
                format: 'json',
                nojsoncallback: '1',
                per_page: '30'
            }
        };
        this.flickrUrl = "https://api.flickr.com/services/rest/";
    }
    FlickrService.prototype.getDishPics = function (pageNumber) {
        var API_URL = this.flickrUrl;
        this.flickrParams.params['method'] = 'flickr.photos.search';
        this.flickrParams.params['tags'] = 'food';
        this.flickrParams.params['text'] = 'food';
        this.flickrParams.params['page'] = pageNumber.toString();
        return this.http.get(API_URL, this.flickrParams);
    };
    FlickrService.prototype.getDishInfo = function (photoId) {
        var API_URL = this.flickrUrl;
        this.flickrParams.params['method'] = 'flickr.photos.getInfo';
        this.flickrParams.params['photo_id'] = photoId;
        return this.http.get(API_URL, this.flickrParams);
    };
    FlickrService.prototype.formFlickrData = function (food) {
        return 'http://farm' + food.farm + '.static.flickr.com/' + food.server + '/' + food.id + '_' + food.secret + '.jpg';
    };
    FlickrService.prototype.createToast = function (message, backgroundColor) {
        console.log("tst");
        var snackbar = document.getElementById("snackbar");
        console.log(snackbar);
        snackbar.className = "showToast";
        snackbar.style.background = backgroundColor || "#000";
        snackbar.innerHTML = message;
        setTimeout(function () {
            snackbar.className = snackbar.className.replace("showToast", "");
        }, 3000);
    };
    FlickrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/food-detail/food-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/food-detail/food-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Food Card css */\r\n\r\n.food-item {\r\n  width:50%;\r\n  height:50%;\r\n  margin:20px auto;\r\n}\r\n\r\n.food-image {\r\n  width:500px;\r\n  height:350px;\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.food-image img {\r\n  /* display: block;\r\n   max-width:100%;\r\n   max-height:180px;\r\n   width: auto;\r\n   height: auto; */\r\n   height: 100%;\r\n   width: 100%;\r\n   -o-object-fit: contain;\r\n      object-fit: contain;\r\n}\r\n\r\n.food-content {\r\n  margin:15px;\r\n}\r\n\r\n.review-btn {\r\n  margin:10px;\r\n  float: right;\r\n}\r\n\r\n/*  Toast Message css */\r\n\r\n#snackbar {\r\n  visibility: hidden; /* Hidden by default. Visible on click */\r\n  min-width: 250px; /* Set a default minimum width */\r\n  margin-left: -125px; /* Divide value of min-width by 2 */\r\n  background-color: #333; /* Black background color */\r\n  color: #fff; /* White text color */\r\n  text-align: center; /* Centered text */\r\n  border-radius: 2px; /* Rounded borders */\r\n  padding: 16px; /* Padding */\r\n  position: fixed; /* Sit on top of the screen */\r\n  z-index: 1; /* Add a z-index if needed */\r\n  left: 50%; /* Center the snackbar */\r\n  bottom: 30px; /* 30px from the bottom */\r\n}\r\n\r\n#snackbar.showToast {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    z-index: 10000;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC1kZXRhaWwvZm9vZC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7O0FBRWxCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7Ozs7a0JBSWdCO0dBQ2YsWUFBWTtHQUNaLFdBQVc7R0FDWCxzQkFBbUI7TUFBbkIsbUJBQW1CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSx1QkFBdUI7O0FBRXZCO0VBQ0Usa0JBQWtCLEVBQUUsd0NBQXdDO0VBQzVELGdCQUFnQixFQUFFLGdDQUFnQztFQUNsRCxtQkFBbUIsRUFBRSxtQ0FBbUM7RUFDeEQsc0JBQXNCLEVBQUUsMkJBQTJCO0VBQ25ELFdBQVcsRUFBRSxxQkFBcUI7RUFDbEMsa0JBQWtCLEVBQUUsa0JBQWtCO0VBQ3RDLGtCQUFrQixFQUFFLG9CQUFvQjtFQUN4QyxhQUFhLEVBQUUsWUFBWTtFQUMzQixlQUFlLEVBQUUsNkJBQTZCO0VBQzlDLFVBQVUsRUFBRSw0QkFBNEI7RUFDeEMsU0FBUyxFQUFFLHdCQUF3QjtFQUNuQyxZQUFZLEVBQUUseUJBQXlCO0FBQ3pDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlEQUFpRDtJQUNqRCx5Q0FBeUM7SUFDekMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQztJQUM1QixJQUFJLFlBQVksRUFBRSxVQUFVLENBQUM7QUFDakM7O0FBRUE7SUFDSSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7SUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQ2pDOztBQUVBO0lBQ0ksTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0lBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM5Qjs7QUFFQTtJQUNJLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztJQUMvQixJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9mb29kLWRldGFpbC9mb29kLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9vZCBDYXJkIGNzcyAqL1xyXG5cclxuLmZvb2QtaXRlbSB7XHJcbiAgd2lkdGg6NTAlO1xyXG4gIGhlaWdodDo1MCU7XHJcbiAgbWFyZ2luOjIwcHggYXV0bztcclxufVxyXG5cclxuLmZvb2QtaW1hZ2Uge1xyXG4gIHdpZHRoOjUwMHB4O1xyXG4gIGhlaWdodDozNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvb2QtaW1hZ2UgaW1nIHtcclxuICAvKiBkaXNwbGF5OiBibG9jaztcclxuICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgIG1heC1oZWlnaHQ6MTgwcHg7XHJcbiAgIHdpZHRoOiBhdXRvO1xyXG4gICBoZWlnaHQ6IGF1dG87ICovXHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5mb29kLWNvbnRlbnQge1xyXG4gIG1hcmdpbjoxNXB4O1xyXG59XHJcblxyXG4ucmV2aWV3LWJ0biB7XHJcbiAgbWFyZ2luOjEwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4vKiAgVG9hc3QgTWVzc2FnZSBjc3MgKi9cclxuXHJcbiNzbmFja2JhciB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBIaWRkZW4gYnkgZGVmYXVsdC4gVmlzaWJsZSBvbiBjbGljayAqL1xyXG4gIG1pbi13aWR0aDogMjUwcHg7IC8qIFNldCBhIGRlZmF1bHQgbWluaW11bSB3aWR0aCAqL1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTI1cHg7IC8qIERpdmlkZSB2YWx1ZSBvZiBtaW4td2lkdGggYnkgMiAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIEJsYWNrIGJhY2tncm91bmQgY29sb3IgKi9cclxuICBjb2xvcjogI2ZmZjsgLyogV2hpdGUgdGV4dCBjb2xvciAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyZWQgdGV4dCAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDsgLyogUm91bmRlZCBib3JkZXJzICovXHJcbiAgcGFkZGluZzogMTZweDsgLyogUGFkZGluZyAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgc2NyZWVuICovXHJcbiAgei1pbmRleDogMTsgLyogQWRkIGEgei1pbmRleCBpZiBuZWVkZWQgKi9cclxuICBsZWZ0OiA1MCU7IC8qIENlbnRlciB0aGUgc25hY2tiYXIgKi9cclxuICBib3R0b206IDMwcHg7IC8qIDMwcHggZnJvbSB0aGUgYm90dG9tICovXHJcbn1cclxuXHJcbiNzbmFja2Jhci5zaG93VG9hc3Qge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XHJcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcclxuICAgIHotaW5kZXg6IDEwMDAwO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbiAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxuICAgIHRvIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxyXG4gICAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxyXG4gICAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/food-detail/food-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/food-detail/food-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card food-item\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"food-content\">\n        <h3>{{chosenFood.title._content}}</h3>\n      </div>\n    </div>\n    <div class=\"col-sm-12\">\n      <div class=\"food-image\">\n        <img class=\"card-img-top\" [src]=\"getImageUrl()\" alt=\"Card image\">\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body food-content\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <h4>By: </h4>\n        <p>{{chosenFood.owner.realname}}</p>\n      </div>\n      <div class=\"col-sm-6\">\n        <h4>Taken: </h4>\n        <p>{{chosenFood.dates.taken | date}}</p>\n      </div>\n      <div class=\"col-sm-12\">\n        <h4>Description :</h4>\n        <p>{{chosenFood.description._content}}</p>\n      </div>\n      <div class=\"col-sm-12\">\n        <h3>Rating :</h3>\n      </div>\n      <div class=\"col-sm-12\">\n        <ngx-stars [size]=\"3\" (ratingOutput)=\"onRatingSet($event)\" [maxStars]=\"10\" [initialStars]=\"initialStars\"></ngx-stars>\n      </div>\n       <div class=\"col-sm-12\">\n        <label for=\"reviewText\"> Rating provided by : </label>\n        <input type=\"text\" class=\"form-control rounded-0\" placeholder=\"Provider Name.\" name=\"retingProvider\" [(ngModel)]=\"userReview.retingProvider\" />\n      </div>\n      <div class=\"col-sm-12\">\n        <label for=\"reviewText\"> Reason for the rating : </label>\n        <textarea class=\"form-control rounded-0\" placeholder=\"Please write your opinion here..\" name=\"reviewText\" [(ngModel)]=\"userReview.reviewText\" rows=\"5\"></textarea>\n      </div>\n      <div class=\"col-sm-12\">\n        <button type=\"button\" class=\"btn btn-primary review-btn\" (click)=\"createPhotoReview()\" name=\"button\"> Create Review </button>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"snackbar\">\n</div>\n\n\n  \n"

/***/ }),

/***/ "./src/app/food-detail/food-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/food-detail/food-detail.component.ts ***!
  \******************************************************/
/*! exports provided: FoodDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDetailComponent", function() { return FoodDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _flickr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../flickr.service */ "./src/app/flickr.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");





var FoodDetailComponent = /** @class */ (function () {
    function FoodDetailComponent(flickrService, _sharedService, router) {
        this.flickrService = flickrService;
        this._sharedService = _sharedService;
        this.router = router;
        this.chosenFood = {};
        this.userReview = {};
        this.initialStars = 0;
    }
    FoodDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.item = this.flickrService.item;
        if (localStorage.getItem('pid' + this._sharedService.chosenFood.id) != null) {
            this.userReview = JSON.parse(localStorage.getItem('pid' + this._sharedService.chosenFood.id));
            this.initialStars = this.userReview.reviewStars;
        }
        this.flickrService.getDishInfo(this._sharedService.chosenFood.id).subscribe(function (result) {
            _this.chosenFood = result.photo;
            console.log(_this.chosenFood);
        }, function (error) {
            console.log(error);
        });
    };
    FoodDetailComponent.prototype.getImageUrl = function () {
        return this.flickrService.formFlickrData(this.chosenFood);
    };
    FoodDetailComponent.prototype.onRatingSet = function (stars) {
        this.userReview.reviewStars = stars;
    };
    FoodDetailComponent.prototype.createPhotoReview = function () {
        console.log(this.userReview);
        if (this.userReview["reviewText"] || this.userReview["reviewText"].length !== 0) {
            localStorage.setItem('pid' + this.chosenFood.id, JSON.stringify(this.userReview));
            this.flickrService.createToast("Review added successfully", "green");
            this.router.navigate(['/FoodGallary']);
        }
        else {
            this.flickrService.createToast("Please provide your opinion", "red");
        }
    };
    FoodDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-food-detail',
            template: __webpack_require__(/*! ./food-detail.component.html */ "./src/app/food-detail/food-detail.component.html"),
            styles: [__webpack_require__(/*! ./food-detail.component.css */ "./src/app/food-detail/food-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_flickr_service__WEBPACK_IMPORTED_MODULE_2__["FlickrService"], _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FoodDetailComponent);
    return FoodDetailComponent;
}());



/***/ }),

/***/ "./src/app/food-gallary/food-gallary.component.css":
/*!*********************************************************!*\
  !*** ./src/app/food-gallary/food-gallary.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Food List css */\r\n\r\n.food-list {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.food-item {\r\n  width:400px;\r\n  height:300px;\r\n  overflow: hidden;\r\n  margin: 10px;\r\n}\r\n\r\n.food-image {\r\n  /* width:390px; */\r\n  height:240px;\r\n}\r\n\r\n.food-image img {\r\n   height: 100%;\r\n   width: 100%;\r\n   -o-object-fit: contain;\r\n      object-fit: contain;\r\n}\r\n\r\n.food-bottom {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.food-list:hover {\r\n  border-color: grey;\r\n}\r\n\r\n/* Pagination css */\r\n\r\n.pages {\r\n  margin:15px;\r\n}\r\n\r\n.prev-page {\r\n  float: left;\r\n  background-color: #f1f1f1;\r\n  color: black;\r\n}\r\n\r\n.next-page {\r\n  float: right;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n\r\n.page-link {\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  padding: 8px 16px;\r\n}\r\n\r\n.page-link:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n.page-no {\r\n  text-align: center;\r\n}\r\n\r\n/* Loader css  */\r\n\r\n.loader {\r\n  border: 16px solid #f3f3f3; /* Light grey */\r\n  border-top: 16px solid #3498db; /* Blue */\r\n  border-radius: 50%;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n          animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC1nYWxsYXJ5L2Zvb2QtZ2FsbGFyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQjs7QUFFbEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7R0FDRyxZQUFZO0dBQ1osV0FBVztHQUNYLHNCQUFtQjtNQUFuQixtQkFBbUI7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsZ0JBQWdCOztBQUNoQjtFQUNFLDBCQUEwQixFQUFFLGVBQWU7RUFDM0MsOEJBQThCLEVBQUUsU0FBUztFQUN6QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQ0FBa0M7VUFBbEMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDOztBQUhBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvZm9vZC1nYWxsYXJ5L2Zvb2QtZ2FsbGFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9vZCBMaXN0IGNzcyAqL1xyXG5cclxuLmZvb2QtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb29kLWl0ZW0ge1xyXG4gIHdpZHRoOjQwMHB4O1xyXG4gIGhlaWdodDozMDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmZvb2QtaW1hZ2Uge1xyXG4gIC8qIHdpZHRoOjM5MHB4OyAqL1xyXG4gIGhlaWdodDoyNDBweDtcclxufVxyXG5cclxuLmZvb2QtaW1hZ2UgaW1nIHtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICB3aWR0aDogMTAwJTtcclxuICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLmZvb2QtYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5mb29kLWxpc3Q6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcclxufVxyXG5cclxuLyogUGFnaW5hdGlvbiBjc3MgKi9cclxuXHJcbi5wYWdlcyB7XHJcbiAgbWFyZ2luOjE1cHg7XHJcbn1cclxuXHJcbi5wcmV2LXBhZ2Uge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubmV4dC1wYWdlIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wYWdlLWxpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbn1cclxuXHJcbi5wYWdlLWxpbms6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucGFnZS1ubyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBMb2FkZXIgY3NzICAqL1xyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjsgLyogQmx1ZSAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/food-gallary/food-gallary.component.html":
/*!**********************************************************!*\
  !*** ./src/app/food-gallary/food-gallary.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"pages\">\n      <div class=\"prev-page\" *ngIf=\"pageNumber!=1\">\n        <a href=\"javascript:void(0);\" class=\"page-link\" (click)=\"pageNumber=pageNumber-1; getFoodList()\" >&laquo; Previous page</a>\n      </div>\n      <div class=\"next-page\">\n        <a href=\"javascript:void(0);\" class=\"page-link\" (click)=\"pageNumber=pageNumber+1; getFoodList()\" > Next page &raquo;</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12\">\n    <div class=\"page-no\">\n      <p> Page number: {{pageNumber}}</p>\n    </div>\n  </div>\n  <div class=\"col-sm-12 food-list\">\n    <div class=\"loader\" *ngIf=\"showLoader\"> </div>\n  </div>\n  <div class=\"col-sm-4 food-list\" *ngFor=\"let food of foodList\">\n      <div class=\"card food-item\">\n        <a href=\"javascript:void(0);\" (click)=\"foodSelected(food)\">\n          <div class=\"food-image\">\n            <img class=\"card-img-top hoverable\" [src]=\"getImageUrl(food)\" alt=\"Card image\">\n          </div>\n          <div class=\"card-body food-content\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\">\n                <ngx-stars [readonly]=\"true\" [size]=\"2\" [maxStars]=\"10\" [initialStars]=\"checkAlreadyReviewed(food.id)\"></ngx-stars>\n              </div>\n            </div>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!-- <div *ngFor=\"let item of flickerResponse?.items\">\n  <img [src]=\"item.media.m\" [alt]=\"item.title\">\n</div> -->\n"

/***/ }),

/***/ "./src/app/food-gallary/food-gallary.component.ts":
/*!********************************************************!*\
  !*** ./src/app/food-gallary/food-gallary.component.ts ***!
  \********************************************************/
/*! exports provided: FoodGallaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodGallaryComponent", function() { return FoodGallaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _flickr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../flickr.service */ "./src/app/flickr.service.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "./src/app/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FoodGallaryComponent = /** @class */ (function () {
    function FoodGallaryComponent(flickrService, _sharedService, router) {
        this.flickrService = flickrService;
        this._sharedService = _sharedService;
        this.router = router;
        this.foodList = [];
        this.pageNumber = 1;
        this.showLoader = false;
    }
    FoodGallaryComponent.prototype.ngOnInit = function () {
        this.getFoodList();
    };
    FoodGallaryComponent.prototype.getFoodList = function () {
        var _this = this;
        this.showLoader = true;
        this.flickrService.getDishPics(this.pageNumber).subscribe(function (result) {
            _this.foodList = result.photos.photo;
            _this.showLoader = false;
        });
    };
    FoodGallaryComponent.prototype.getImageUrl = function (food) {
        return this.flickrService.formFlickrData(food);
    };
    FoodGallaryComponent.prototype.checkAlreadyReviewed = function (id) {
        return this._sharedService.getInitialStars(id);
    };
    FoodGallaryComponent.prototype.foodSelected = function (food) {
        this._sharedService.updateChosenFood(food);
        this.router.navigate(['/foodDetails']);
    };
    FoodGallaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-food-gallary',
            template: __webpack_require__(/*! ./food-gallary.component.html */ "./src/app/food-gallary/food-gallary.component.html"),
            styles: [__webpack_require__(/*! ./food-gallary.component.css */ "./src/app/food-gallary/food-gallary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_flickr_service__WEBPACK_IMPORTED_MODULE_2__["FlickrService"], _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FoodGallaryComponent);
    return FoodGallaryComponent;
}());



/***/ }),

/***/ "./src/app/shared.service.ts":
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.chosenFood = {};
    }
    SharedService.prototype.updateChosenFood = function (food) {
        this.chosenFood = food;
    };
    SharedService.prototype.getInitialStars = function (id) {
        if (localStorage.getItem('pid' + id) != null) {
            return JSON.parse(localStorage.getItem('pid' + id)).reviewStars;
        }
        else
            return 0;
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ash\Angular\foodgallery\food-gallery\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map