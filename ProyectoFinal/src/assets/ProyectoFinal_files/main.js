"use strict";
(self["webpackChunkProyectoFinal"] = self["webpackChunkProyectoFinal"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentes/inicio/inicio.component */ 784);
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/login/login.component */ 1293);
/* harmony import */ var _componentes_sala_sala_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/sala/sala.component */ 3312);
/* harmony import */ var _componentes_crear_juego_crear_juego_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/crear-juego/crear-juego.component */ 5914);
/* harmony import */ var _componentes_crear_propuesta_crear_propuesta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/crear-propuesta/crear-propuesta.component */ 2027);
/* harmony import */ var _componentes_crear_actividad_crear_actividad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/crear-actividad/crear-actividad.component */ 7831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









const routes = [{
  path: '',
  redirectTo: '/inicio',
  pathMatch: 'full'
}, {
  path: 'inicio',
  component: _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_0__.InicioComponent
}, {
  path: 'login',
  component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'sala',
  component: _componentes_sala_sala_component__WEBPACK_IMPORTED_MODULE_2__.SalaComponent
}, {
  path: 'juego',
  component: _componentes_crear_juego_crear_juego_component__WEBPACK_IMPORTED_MODULE_3__.CrearJuegoComponent
}, {
  path: 'propuesta',
  component: _componentes_crear_propuesta_crear_propuesta_component__WEBPACK_IMPORTED_MODULE_4__.CrearPropuestaComponent
}, {
  path: 'actividad',
  component: _componentes_crear_actividad_crear_actividad_component__WEBPACK_IMPORTED_MODULE_5__.CrearActividadComponent
}, {
  path: 'registrarse',
  component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'ProyectoFinal';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/inicio/inicio.component */ 784);
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/login/login.component */ 1293);
/* harmony import */ var _componentes_crear_juego_crear_juego_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/crear-juego/crear-juego.component */ 5914);
/* harmony import */ var _componentes_crear_propuesta_crear_propuesta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/crear-propuesta/crear-propuesta.component */ 2027);
/* harmony import */ var _componentes_crear_actividad_crear_actividad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/crear-actividad/crear-actividad.component */ 7831);
/* harmony import */ var _componentes_sala_sala_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/sala/sala.component */ 3312);
/* harmony import */ var _componentes_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/header/header.component */ 9671);
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/footer/footer.component */ 242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);












class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__.InicioComponent, _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _componentes_crear_juego_crear_juego_component__WEBPACK_IMPORTED_MODULE_4__.CrearJuegoComponent, _componentes_crear_propuesta_crear_propuesta_component__WEBPACK_IMPORTED_MODULE_5__.CrearPropuestaComponent, _componentes_crear_actividad_crear_actividad_component__WEBPACK_IMPORTED_MODULE_6__.CrearActividadComponent, _componentes_sala_sala_component__WEBPACK_IMPORTED_MODULE_7__.SalaComponent, _componentes_header_header_component__WEBPACK_IMPORTED_MODULE_8__.HeaderComponent, _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 7831:
/*!**************************************************************************!*\
  !*** ./src/app/componentes/crear-actividad/crear-actividad.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearActividadComponent: () => (/* binding */ CrearActividadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 9671);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 242);



class CrearActividadComponent {
  static #_ = this.ɵfac = function CrearActividadComponent_Factory(t) {
    return new (t || CrearActividadComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CrearActividadComponent,
    selectors: [["app-crear-actividad"]],
    decls: 4,
    vars: 0,
    template: function CrearActividadComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "crear-actividad works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
      }
    },
    dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5914:
/*!******************************************************************!*\
  !*** ./src/app/componentes/crear-juego/crear-juego.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearJuegoComponent: () => (/* binding */ CrearJuegoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 9671);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 242);



class CrearJuegoComponent {
  static #_ = this.ɵfac = function CrearJuegoComponent_Factory(t) {
    return new (t || CrearJuegoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CrearJuegoComponent,
    selectors: [["app-crear-juego"]],
    decls: 4,
    vars: 0,
    template: function CrearJuegoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "crear-juego works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
      }
    },
    dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2027:
/*!**************************************************************************!*\
  !*** ./src/app/componentes/crear-propuesta/crear-propuesta.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrearPropuestaComponent: () => (/* binding */ CrearPropuestaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 9671);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 242);



class CrearPropuestaComponent {
  static #_ = this.ɵfac = function CrearPropuestaComponent_Factory(t) {
    return new (t || CrearPropuestaComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CrearPropuestaComponent,
    selectors: [["app-crear-propuesta"]],
    decls: 4,
    vars: 0,
    template: function CrearPropuestaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "crear-propuesta works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
      }
    },
    dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 242:
/*!********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 5,
    vars: 0,
    consts: [[1, "container"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p")(2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Proyecto realizado por:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Ignacio Perez, Nicolas Mazzey, Chichita y Jos\u00E9 Varela. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    justify-content: flex-start;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLDJCQUEyQjtBQUMvQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9671:
/*!********************************************************!*\
  !*** ./src/app/componentes/header/header.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


const _c0 = function () {
  return ["/inicio"];
};
const _c1 = function () {
  return ["/propuesta"];
};
const _c2 = function () {
  return ["/actividad"];
};
const _c3 = function () {
  return ["/juego"];
};
const _c4 = function () {
  return ["/login"];
};
const _c5 = function () {
  return ["/registrarse"];
};
class HeaderComponent {
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 15,
    vars: 12,
    consts: [[1, "container"], [1, "menu"], [1, "btn", "btn-danger", 3, "routerLink"], [1, "loger"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Crear Propuesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Crear Actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Crear Juego");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3)(11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c5));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".container[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    \n    margin: 0; \n\n    padding: 0; \n\n    margin-bottom: 30px;\n}\n\n.menu[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-start;\n    padding: 5px;\n}\n\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-right: 5px; \n\n}\n\n.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n    margin-right: 0; \n\n}\n\n\n.loger[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n}\n\n.loger[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: auto;\n    margin-right: 5px; \n\n}\n.loger[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n    margin-right: 0; \n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7O0lBRTlCLFNBQVMsRUFBRSx1REFBdUQ7SUFDbEUsVUFBVSxFQUFFLHdEQUF3RDtJQUNwRSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUIsRUFBRSx5REFBeUQ7QUFDaEY7O0FBRUE7SUFDSSxlQUFlLEVBQUUsK0NBQStDO0FBQ3BFOzs7QUFHQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCLEVBQUUseURBQXlEO0FBQ2hGO0FBQ0E7SUFDSSxlQUFlLEVBQUUsK0NBQStDO0FBQ3BFIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgXG4gICAgbWFyZ2luOiAwOyAvKiBBw4PCsWFkaXIgZXN0byBwYXJhIGVsaW1pbmFyIGVsIG1hcmdlbiBwcmVkZXRlcm1pbmFkbyAqL1xuICAgIHBhZGRpbmc6IDA7IC8qIEHDg8KxYWRpciBlc3RvIHBhcmEgZWxpbWluYXIgZWwgcmVsbGVubyBwcmVkZXRlcm1pbmFkbyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5tZW51IGJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IC8qIEFncmVnYSB1biBtYXJnZW4gZGVyZWNobyBkZSAxMHB4IGEgdG9kb3MgbG9zIGJvdG9uZXMgKi9cbn1cblxuLm1lbnUgYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDsgLyogRWxpbWluYSBlbCBtYXJnZW4gZGVyZWNobyBkZWwgw4PCumx0aW1vIGJvdMODwrNuICovXG59XG5cblxuLmxvZ2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxvZ2VyIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogNXB4OyAvKiBBZ3JlZ2EgdW4gbWFyZ2VuIGRlcmVjaG8gZGUgMTBweCBhIHRvZG9zIGxvcyBib3RvbmVzICovXG59XG4ubG9nZXIgYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDsgLyogRWxpbWluYSBlbCBtYXJnZW4gZGVyZWNobyBkZWwgw4PCumx0aW1vIGJvdMODwrNuICovXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 784:
/*!********************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InicioComponent: () => (/* binding */ InicioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 9671);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 242);



class InicioComponent {
  static #_ = this.ɵfac = function InicioComponent_Factory(t) {
    return new (t || InicioComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: InicioComponent,
    selectors: [["app-inicio"]],
    decls: 7,
    vars: 0,
    consts: [[1, "container"], [1, "Inicio"], ["src", "./assets/TituloBienvenida.png", "alt", "Titulo Bienvenida"]],
    template: function InicioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Bienvenidos!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-footer");
      }
    },
    dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center; \n\n    align-items: center; \n\n    height: 50vh; \n\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QixFQUFFLDJCQUEyQjtJQUNwRCxtQkFBbUIsRUFBRSx5QkFBeUI7SUFDOUMsWUFBWSxFQUFFLDBDQUEwQztBQUM1RCIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRyYSBob3Jpem9udGFsbWVudGUgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50cmEgdmVydGljYWxtZW50ZSAqL1xuICAgIGhlaWdodDogNTB2aDsgLyogQWp1c3RhIGxhIGFsdHVyYSBhbCAxMDAlIGRlbCB2aWV3cG9ydCAqL1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1293:
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_servicios_controlador_juegos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/servicios/controlador-juegos.service */ 5912);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ 9671);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 242);




class LoginComponent {
  constructor(controlador) {
    this.controlador = controlador;
  }
  login(nombre, contrasenia) {
    this.controlador.crearUsuario(nombre, contrasenia);
    console.log(this.controlador.listarUsuario());
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_servicios_controlador_juegos_service__WEBPACK_IMPORTED_MODULE_0__.ControladorJuegosService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 19,
    vars: 0,
    consts: [[1, "loginBody"], [1, "loginName"], ["for", "nombre"], ["nombre", ""], [1, "loginPass"], ["for", "contrase\u00F1a"], ["contrasenia", ""], ["id", "loginButton", "type", "button", 1, "btn", "btn-light", 3, "click"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Login de Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 1)(5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Nombre de usuario: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4)(10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Contrase\u00F1a: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.login(_r0.value, _r1.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Falta modificar si toco Registrarse o Login interactue diferente, y aparezca boton login o boton register que haga un post");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-footer");
      }
    },
    dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
    styles: [".loginBody[_ngcontent-%COMP%]{\n    margin-left: 10px;\n}\n\n.loginName[_ngcontent-%COMP%] {\n    padding-bottom: 5px;\n    display: flex;\n    align-items: flex-start; \n\n}\n\n.loginName[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-right: 10px; \n\n}\n\n.loginPass[_ngcontent-%COMP%] {\n    padding-bottom: 5px;\n    display: flex;\n    align-items: flex-start; \n\n}\n\n.loginPass[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-right: 65px; \n\n}\n\ninput[_ngcontent-%COMP%] {\n    border-radius: 5px; \n\n    border: 1px solid black; \n\n}\n\n#loginButton[_ngcontent-%COMP%]{\n    margin-left: 275px;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCLEVBQUUsNERBQTREO0FBQ3pGOztBQUVBO0lBQ0ksa0JBQWtCLEVBQUUsZ0VBQWdFO0FBQ3hGOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUIsRUFBRSw0REFBNEQ7QUFDekY7O0FBRUE7SUFDSSxrQkFBa0IsRUFBRSxnRUFBZ0U7QUFDeEY7O0FBRUE7SUFDSSxrQkFBa0IsRUFBRSw2REFBNkQ7SUFDakYsdUJBQXVCLEVBQUUsaUNBQWlDO0FBQzlEOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luQm9keXtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxvZ2luTmFtZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBBbGluZWEgbG9zIGVsZW1lbnRvcyB2ZXJ0aWNhbG1lbnRlIGVuIGxhIHBhcnRlIHN1cGVyaW9yICovXG59XG5cbi5sb2dpbk5hbWUgbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDsgLyogQWdyZWdhIHVuIG1hcmdlbiBkZXJlY2hvIHBhcmEgc2VwYXJhciBsYSBldGlxdWV0YSBkZWwgaW5wdXQgKi9cbn1cblxuLmxvZ2luUGFzcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBBbGluZWEgbG9zIGVsZW1lbnRvcyB2ZXJ0aWNhbG1lbnRlIGVuIGxhIHBhcnRlIHN1cGVyaW9yICovXG59XG5cbi5sb2dpblBhc3MgbGFiZWwge1xuICAgIG1hcmdpbi1yaWdodDogNjVweDsgLyogQWdyZWdhIHVuIG1hcmdlbiBkZXJlY2hvIHBhcmEgc2VwYXJhciBsYSBldGlxdWV0YSBkZWwgaW5wdXQgKi9cbn1cblxuaW5wdXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogQWp1c3RhIGVsIHZhbG9yIHNlZ8ODwrpuIGxhIGNhbnRpZGFkIGRlIHJlZG9uZGV6IHF1ZSBkZXNlZXMgKi9cbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgLyogQW5jaG8sIGVzdGlsbyAoc29saWQpLCBjb2xvciAqL1xufVxuXG4jbG9naW5CdXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDI3NXB4O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3312:
/*!****************************************************!*\
  !*** ./src/app/componentes/sala/sala.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalaComponent: () => (/* binding */ SalaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 9671);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 242);



class SalaComponent {
  static #_ = this.ɵfac = function SalaComponent_Factory(t) {
    return new (t || SalaComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SalaComponent,
    selectors: [["app-sala"]],
    decls: 4,
    vars: 0,
    template: function SalaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "sala works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
      }
    },
    dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5912:
/*!*********************************************************!*\
  !*** ./src/app/servicios/controlador-juegos.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControladorJuegosService: () => (/* binding */ ControladorJuegosService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ControladorJuegosService {
  constructor() {
    this.juegos = [];
    this.propuestas = [];
    this.actividades = [];
    this.usuarios = [];
  }
  crearUsuario(nombre, contrasenia) {
    let id = this.usuarios.length + 1;
    let usuario = {
      id,
      nombre,
      contrasenia
    };
    this.usuarios.push(usuario);
  }
  listarUsuario() {
    return this.usuarios;
  }
  crearActividad(titulo, descripcion, imagen) {
    let id = this.actividades.length + 1;
    if (imagen) {
      imagen = "";
    }
    let actividad = {
      id,
      titulo,
      descripcion,
      imagen
    };
    this.actividades.push(actividad);
  }
  listarActividades() {
    return this.actividades;
  }
  crearPropuesta(actividades) {
    let id = this.propuestas.length + 1;
    let propuesta = {
      id,
      actividades
    };
    this.propuestas.push(propuesta);
  }
  listarPropuestas() {
    return this.propuestas;
  }
  crearJuego(prop) {}
  listarJuegos() {
    return this.juegos;
  }
  static #_ = this.ɵfac = function ControladorJuegosService_Factory(t) {
    return new (t || ControladorJuegosService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ControladorJuegosService,
    factory: ControladorJuegosService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(6576), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map