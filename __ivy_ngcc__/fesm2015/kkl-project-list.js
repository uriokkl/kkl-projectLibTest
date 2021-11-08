import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

import * as ɵngcc0 from '@angular/core';
class KklProjectListService {
    constructor() { }
}
KklProjectListService.ɵfac = function KklProjectListService_Factory(t) { return new (t || KklProjectListService)(); };
KklProjectListService.ɵprov = i0.ɵɵdefineInjectable({ factory: function KklProjectListService_Factory() { return new KklProjectListService(); }, token: KklProjectListService, providedIn: "root" });
KklProjectListService.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(KklProjectListService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class KklProjectListComponent {
    constructor() { }
    ngOnInit() {
    }
}
KklProjectListComponent.ɵfac = function KklProjectListComponent_Factory(t) { return new (t || KklProjectListComponent)(); };
KklProjectListComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: KklProjectListComponent, selectors: [["lib-kkl-projectList"]], decls: 2, vars: 0, template: function KklProjectListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, " kkl-project-list works! ");
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
KklProjectListComponent.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(KklProjectListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-kkl-projectList',
                template: `
    <p>
      kkl-project-list works!
    </p>
  `
            }]
    }], function () { return []; }, null); })();

class KklProjectListModule {
}
KklProjectListModule.ɵfac = function KklProjectListModule_Factory(t) { return new (t || KklProjectListModule)(); };
KklProjectListModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: KklProjectListModule });
KklProjectListModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(KklProjectListModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    KklProjectListComponent
                ],
                imports: [],
                exports: [
                    KklProjectListComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(KklProjectListModule, { declarations: [KklProjectListComponent], exports: [KklProjectListComponent] }); })();

/*
 * Public API Surface of kkl-project-list
 */

/**
 * Generated bundle index. Do not edit.
 */

export { KklProjectListComponent, KklProjectListModule, KklProjectListService };

//# sourceMappingURL=kkl-project-list.js.map