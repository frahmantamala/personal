exports.id = 396;
exports.ids = [396];
exports.modules = {

/***/ 4336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FeatureModule": () => (/* binding */ FeatureModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__(8583);
// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 1 modules
var core = __webpack_require__(8720);
// EXTERNAL MODULE: ./src/app/shared/header/header.component.ts
var header_component = __webpack_require__(9470);
// EXTERNAL MODULE: ./src/app/shared/navigation/navigation.component.ts
var navigation_component = __webpack_require__(7714);
// EXTERNAL MODULE: ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js + 11 modules
var router = __webpack_require__(2617);
;// CONCATENATED MODULE: ./src/app/feature/feature.component.ts




class FeatureComponent {
    constructor() { }
    ngOnInit() {
    }
}
FeatureComponent.ɵfac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(); };
FeatureComponent.ɵcmp = /*@__PURE__*/ core/* ɵɵdefineComponent */.Xpm({ type: FeatureComponent, selectors: [["app-feature"]], decls: 3, vars: 0, template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "app-header");
        core/* ɵɵelement */._UZ(1, "app-navigation");
        core/* ɵɵelement */._UZ(2, "router-outlet");
    } }, directives: [header_component/* HeaderComponent */.G, navigation_component/* NavigationComponent */.J, router/* RouterOutlet */.lC], styles: ["@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes topBounce{0%,to{transform:translateY(0)}50%{transform:translateY(25px)}}@keyframes leftBounce{0%,to{transform:translateX(0)}50%{transform:translatex(25px)}}"] });

// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 2 modules
var shared_module = __webpack_require__(3737);
;// CONCATENATED MODULE: ./src/app/feature/feature-routing.module.ts




const routes = [
    {
        path: '',
        component: FeatureComponent,
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/* import() */ 888).then(__webpack_require__.bind(__webpack_require__, 8888)).then(m => m.HomeModule)
            },
            {
                path: 'home',
                redirectTo: ''
            }
        ]
    },
];
class FeatureRoutingModule {
}
FeatureRoutingModule.ɵfac = function FeatureRoutingModule_Factory(t) { return new (t || FeatureRoutingModule)(); };
FeatureRoutingModule.ɵmod = /*@__PURE__*/ core/* ɵɵdefineNgModule */.oAB({ type: FeatureRoutingModule });
FeatureRoutingModule.ɵinj = /*@__PURE__*/ core/* ɵɵdefineInjector */.cJS({ imports: [[router/* RouterModule.forChild */.Bz.forChild(routes)], router/* RouterModule */.Bz] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(FeatureRoutingModule, { imports: [router/* RouterModule */.Bz], exports: [router/* RouterModule */.Bz] }); })();

;// CONCATENATED MODULE: ./src/app/feature/feature.module.ts





class FeatureModule {
}
FeatureModule.ɵfac = function FeatureModule_Factory(t) { return new (t || FeatureModule)(); };
FeatureModule.ɵmod = /*@__PURE__*/ core/* ɵɵdefineNgModule */.oAB({ type: FeatureModule });
FeatureModule.ɵinj = /*@__PURE__*/ core/* ɵɵdefineInjector */.cJS({ imports: [[
            common/* CommonModule */.ez,
            FeatureRoutingModule,
            shared_module/* SharedModule */.m
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(FeatureModule, { declarations: [FeatureComponent], imports: [common/* CommonModule */.ez,
        FeatureRoutingModule,
        shared_module/* SharedModule */.m] }); })();


/***/ }),

/***/ 5839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ EffectBulletComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8720);

class EffectBulletComponent {
    constructor() { }
    ngOnInit() {
    }
}
EffectBulletComponent.ɵfac = function EffectBulletComponent_Factory(t) { return new (t || EffectBulletComponent)(); };
EffectBulletComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({ type: EffectBulletComponent, selectors: [["app-effect-bullet"]], decls: 29, vars: 0, consts: [[1, "effect", "effect-2"]], template: function EffectBulletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    } }, styles: ["@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes topBounce{0%,to{transform:translateY(0)}50%{transform:translateY(25px)}}@keyframes leftBounce{0%,to{transform:translateX(0)}50%{transform:translatex(25px)}}.effect-2[_ngcontent-%COMP%]{left:3%;bottom:20%;width:40px;display:flex;flex-wrap:wrap;justify-content:space-between}.effect-2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{height:3px;width:3px;background-color:#ff9c07;margin:0 3px 8px;animation:topBounce 3s ease-in-out infinite}"] });


/***/ }),

/***/ 1533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ EffectLineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8720);

class EffectLineComponent {
    constructor() { }
    ngOnInit() {
    }
}
EffectLineComponent.ɵfac = function EffectLineComponent_Factory(t) { return new (t || EffectLineComponent)(); };
EffectLineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({ type: EffectLineComponent, selectors: [["app-effect-line"]], decls: 11, vars: 0, consts: [[1, "effect", "effect-5"]], template: function EffectLineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    } }, styles: ["@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes topBounce{0%,to{transform:translateY(0)}50%{transform:translateY(25px)}}@keyframes leftBounce{0%,to{transform:translateX(0)}50%{transform:translatex(25px)}}.effect-5[_ngcontent-%COMP%]{height:50px;width:50px;right:10%;top:30%;display:flex;justify-content:space-between;border-radius:50%;overflow:hidden;animation:spin 10s linear infinite}.effect-5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:1px;background-color:#4dd0e1}"] });


/***/ }),

/***/ 9421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ EffectRoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8720);

class EffectRoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
EffectRoundComponent.ɵfac = function EffectRoundComponent_Factory(t) { return new (t || EffectRoundComponent)(); };
EffectRoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({ type: EffectRoundComponent, selectors: [["app-effect-round"]], decls: 1, vars: 0, consts: [[1, "effect", "effect-3"]], template: function EffectRoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "div", 0);
    } }, styles: ["@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes topBounce{0%,to{transform:translateY(0)}50%{transform:translateY(25px)}}@keyframes leftBounce{0%,to{transform:translateX(0)}50%{transform:translatex(25px)}}.effect-3[_ngcontent-%COMP%]{height:180px;width:180px;border:25px solid #fb839e;border-radius:50%;left:50%;top:-120px;animation:leftBounce 3s ease-in-out infinite}"] });


/***/ }),

/***/ 6470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ EffectSquareComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8720);

class EffectSquareComponent {
    constructor() { }
    ngOnInit() {
    }
}
EffectSquareComponent.ɵfac = function EffectSquareComponent_Factory(t) { return new (t || EffectSquareComponent)(); };
EffectSquareComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({ type: EffectSquareComponent, selectors: [["app-effect-square"]], decls: 1, vars: 0, consts: [[1, "effect", "effect-1"]], template: function EffectSquareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "div", 0);
    } }, styles: ["@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes topBounce{0%,to{transform:translateY(0)}50%{transform:translateY(25px)}}@keyframes leftBounce{0%,to{transform:translateX(0)}50%{transform:translatex(25px)}}.effect-1[_ngcontent-%COMP%]{width:30px;height:30px;border:4px solid #8a49ff;right:10%;bottom:10%;animation:spin 10s linear infinite}"] });


/***/ }),

/***/ 8979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ EffectTriangleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8720);

class EffectTriangleComponent {
    constructor() { }
    ngOnInit() {
    }
}
EffectTriangleComponent.ɵfac = function EffectTriangleComponent_Factory(t) { return new (t || EffectTriangleComponent)(); };
EffectTriangleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({ type: EffectTriangleComponent, selectors: [["app-effect-triangle"]], decls: 1, vars: 0, consts: [[1, "effect", "effect-4"]], template: function EffectTriangleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(0, "div", 0);
    } }, styles: ["@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes topBounce{0%,to{transform:translateY(0)}50%{transform:translateY(25px)}}@keyframes leftBounce{0%,to{transform:translateX(0)}50%{transform:translatex(25px)}}.effect-4[_ngcontent-%COMP%]{left:30%;top:20%;animation:spin 15s linear infinite}.effect-4[_ngcontent-%COMP%], .effect-4[_ngcontent-%COMP%]:before{border-top:30px solid #0000;border-left:30px solid #06d79c}.effect-4[_ngcontent-%COMP%]:before{content:\"\";position:absolute;opacity:.5;left:-35px;top:-25px}"] });


/***/ }),

/***/ 9470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8720);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 0, consts: [[1, "header"], [1, "container"], [1, "row", "jc-sb"], [1, "logo"], ["href", "#"], [1, "humberger-btn", "outer-shadow", "hover-in-shadow"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(5, "FR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelement"] */ ._UZ(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    } }, styles: ["@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes topBounce{0%,to{transform:translateY(0)}50%{transform:translateY(25px)}}@keyframes leftBounce{0%,to{transform:translateX(0)}50%{transform:translatex(25px)}}.header[_ngcontent-%COMP%]{padding:20px 15px;position:absolute;width:100%;top:0;left:0;z-index:99}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;text-align:center;line-height:36px;height:40px;width:40px;font-size:24;color:#fb839e;border-radius:50px;border:2px solid #fb839e;font-weight:600;text-transform:uppercase}.header[_ngcontent-%COMP%]   .humberger-btn[_ngcontent-%COMP%]{height:40px;width:40px;display:flex;align-items:center;cursor:pointer;border-radius:50px;justify-content:center;transition:all .3s ease}.header[_ngcontent-%COMP%]   .humberger-btn[_ngcontent-%COMP%]:after{border-radius:50px}.header[_ngcontent-%COMP%]   .humberger-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;height:2px;width:16px;background-color:#000;position:relative}.header[_ngcontent-%COMP%]   .humberger-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after, .header[_ngcontent-%COMP%]   .humberger-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:\"\";position:absolute;left:0;width:100%;height:100%;background-color:#000}.header[_ngcontent-%COMP%]   .humberger-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{top:-6px}.header[_ngcontent-%COMP%]   .humberger-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after{top:6px}"] });


/***/ }),

/***/ 7714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8720);

class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 16, vars: 0, consts: [[1, "nav-menu"], [1, "close-nav-menu", "outer-shadow", "hover-in-shadow"], [1, "nav-menu-inner"], ["href", "", 1, "inner-shadow", "active"], ["href", "", 1, "outer-shadow", "hover-in-shadow"], [1, "copyright-text"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(2, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(7, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(10, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(13, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(15, "\u00A9 xxx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
    } }, styles: ["@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes topBounce{0%,to{transform:translateY(0)}50%{transform:translateY(25px)}}@keyframes leftBounce{0%,to{transform:translateX(0)}50%{transform:translatex(25px)}}.nav-menu[_ngcontent-%COMP%]{position:fixed;background-color:#eff0f4;padding:0 15px;left:0;top:0;width:100%;height:100%;z-index:-1;opacity:0;visibility:hidden;overflow-y:auto}.nav-menu[_ngcontent-%COMP%]   .close-nav-menu[_ngcontent-%COMP%]{height:40px;width:40px;display:block;font-size:35px;line-height:35px;border-radius:50px;position:absolute;right:15px;top:15px;cursor:pointer;text-align:center;color:#666;transition:all .3s ease}.nav-menu[_ngcontent-%COMP%]   .close-nav-menu[_ngcontent-%COMP%]:after{border-radius:50px}.nav-menu-inner[_ngcontent-%COMP%]{min-height:100vh;display:flex;align-items:center;justify-content:center}.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:15px}.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;margin-bottom:20px;text-align:center}.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;font-size:28px;font-weight:600;color:#555;padding:5px 30px;text-transform:capitalize;border-radius:30px;transition:all .3s ease}.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#fb839e}.nav-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{border-radius:30px}.nav-menu[_ngcontent-%COMP%]   .copyright-text[_ngcontent-%COMP%]{position:absolute;top:50%;font-size:15px;color:#666;transform:translateY(-50%) rotate(-90deg);left:-60px}"] });


/***/ }),

/***/ 3737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ SharedModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js
var common = __webpack_require__(8583);
// EXTERNAL MODULE: ./src/app/shared/header/header.component.ts
var header_component = __webpack_require__(9470);
// EXTERNAL MODULE: ./src/app/shared/navigation/navigation.component.ts
var navigation_component = __webpack_require__(7714);
// EXTERNAL MODULE: ./src/app/shared/effect/effect-bullet/effect-bullet.component.ts
var effect_bullet_component = __webpack_require__(5839);
// EXTERNAL MODULE: ./src/app/shared/effect/effect-line/effect-line.component.ts
var effect_line_component = __webpack_require__(1533);
// EXTERNAL MODULE: ./src/app/shared/effect/effect-round/effect-round.component.ts
var effect_round_component = __webpack_require__(9421);
// EXTERNAL MODULE: ./src/app/shared/effect/effect-square/effect-square.component.ts
var effect_square_component = __webpack_require__(6470);
// EXTERNAL MODULE: ./src/app/shared/effect/effect-triangle/effect-triangle.component.ts
var effect_triangle_component = __webpack_require__(8979);
// EXTERNAL MODULE: ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js + 1 modules
var core = __webpack_require__(8720);
;// CONCATENATED MODULE: ./src/app/shared/effect/effect.module.ts







class EffectModule {
}
EffectModule.ɵfac = function EffectModule_Factory(t) { return new (t || EffectModule)(); };
EffectModule.ɵmod = /*@__PURE__*/ core/* ɵɵdefineNgModule */.oAB({ type: EffectModule });
EffectModule.ɵinj = /*@__PURE__*/ core/* ɵɵdefineInjector */.cJS({ imports: [[
            common/* CommonModule */.ez
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(EffectModule, { declarations: [effect_bullet_component/* EffectBulletComponent */.w,
        effect_line_component/* EffectLineComponent */.V,
        effect_round_component/* EffectRoundComponent */.q,
        effect_square_component/* EffectSquareComponent */.Y,
        effect_triangle_component/* EffectTriangleComponent */.K], imports: [common/* CommonModule */.ez], exports: [effect_bullet_component/* EffectBulletComponent */.w,
        effect_line_component/* EffectLineComponent */.V,
        effect_round_component/* EffectRoundComponent */.q,
        effect_square_component/* EffectSquareComponent */.Y,
        effect_triangle_component/* EffectTriangleComponent */.K] }); })();

;// CONCATENATED MODULE: ./src/app/shared/spinner-preloader/spinner-preloader.component.ts

class SpinnerPreloaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerPreloaderComponent.ɵfac = function SpinnerPreloaderComponent_Factory(t) { return new (t || SpinnerPreloaderComponent)(); };
SpinnerPreloaderComponent.ɵcmp = /*@__PURE__*/ core/* ɵɵdefineComponent */.Xpm({ type: SpinnerPreloaderComponent, selectors: [["app-spinner-preloader"]], decls: 10, vars: 0, consts: [["id", "loader"], [1, "dot"], [1, "loading"]], template: function SpinnerPreloaderComponent_Template(rf, ctx) { if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0);
        core/* ɵɵelement */._UZ(1, "div", 1);
        core/* ɵɵelement */._UZ(2, "div", 1);
        core/* ɵɵelement */._UZ(3, "div", 1);
        core/* ɵɵelement */._UZ(4, "div", 1);
        core/* ɵɵelement */._UZ(5, "div", 1);
        core/* ɵɵelement */._UZ(6, "div", 1);
        core/* ɵɵelement */._UZ(7, "div", 1);
        core/* ɵɵelement */._UZ(8, "div", 1);
        core/* ɵɵelement */._UZ(9, "div", 2);
        core/* ɵɵelementEnd */.qZA();
    } }, styles: ["#loader[_ngcontent-%COMP%]{height:175px;width:175px}#loader[_ngcontent-%COMP%], #loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:100%;width:87.5px}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:before{border-radius:100%;content:\"\";height:87.5px;left:0;position:absolute;right:0;top:0;transform:scale(0);width:87.5px}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1){transform:rotate(45deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1):before{animation:load .8s linear .1s infinite normal none running;background:#00ff80 none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2){transform:rotate(90deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2):before{animation:load .8s linear .2s infinite normal none running;background:#00ffea none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3){transform:rotate(135deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3):before{animation:load .8s linear .3s infinite normal none running;background:#0af none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4){transform:rotate(180deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4):before{animation:load .8s linear .4s infinite normal none running;background:#0040ff none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5){transform:rotate(225deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5):before{animation:load .8s linear .5s infinite normal none running;background:#2a00ff none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6){transform:rotate(270deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6):before{animation:load .8s linear .6s infinite normal none running;background:#9500ff none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7){transform:rotate(315deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7):before{animation:load .8s linear .7s infinite normal none running;background:#f0f none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8){transform:rotate(1turn)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8):before{animation:load .8s linear .8s infinite normal none running;background:#ff0095 none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{background-position:50% 50%;background-repeat:no-repeat;bottom:-40px;height:20px;left:0;position:absolute;right:0;width:180px}@keyframes load{to{opacity:0;transform:scale(1)}}.spinner-message[_ngcontent-%COMP%]{text-align:center}"] });

;// CONCATENATED MODULE: ./src/app/shared/shared.module.ts






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ core/* ɵɵdefineNgModule */.oAB({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ core/* ɵɵdefineInjector */.cJS({ imports: [[
            common/* CommonModule */.ez
        ], EffectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(SharedModule, { declarations: [header_component/* HeaderComponent */.G,
        navigation_component/* NavigationComponent */.J,
        SpinnerPreloaderComponent], imports: [common/* CommonModule */.ez], exports: [header_component/* HeaderComponent */.G,
        navigation_component/* NavigationComponent */.J,
        EffectModule,
        SpinnerPreloaderComponent] }); })();


/***/ })

};
;