(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('kkl-project-list', ['exports', '@angular/core', '@angular/common/http'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["kkl-project-list"] = {}, global.ng.core, global.ng.common.http));
})(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var KklProjectListService = /** @class */ (function () {
        function KklProjectListService() {
        }
        return KklProjectListService;
    }());
    KklProjectListService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    KklProjectListService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var KklProjectListComponent = /** @class */ (function () {
        function KklProjectListComponent(http) {
            this.http = http;
            this.projectList = [];
        }
        KklProjectListComponent.prototype.ngOnInit = function () {
        };
        KklProjectListComponent.prototype.getProjectList = function (projectId) {
            var _this = this;
            return this.http.get("https://virtserver.swaggerhub.com/shivek/ProjectMngScenarios/1.0.0/scenario12?projectId=1")
                .subscribe(function (data) { return _this.projectList = data; });
        };
        return KklProjectListComponent;
    }());
    KklProjectListComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListComponent, deps: [{ token: i1__namespace.HttpClient }], target: i0__namespace.ɵɵFactoryTarget.Component });
    KklProjectListComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: KklProjectListComponent, selector: "lib-kkl-projectList", ngImport: i0__namespace, template: "\n     <div>\n      <table>\n        <tr *ngFor=\"let projectData of projectList;\">\n        <td>{{projectData.projectId}}</td>\n        <td>{{projectData.boardId}}</td>\n        <td>{{projectData.date}}</td>        \n        <td>{{projectData.description}}</td>        \n        <td>{{projectData.decision}}</td>\n        </tr>\n      </table>\n    </div>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-kkl-projectList',
                        template: "\n     <div>\n      <table>\n        <tr *ngFor=\"let projectData of projectList;\">\n        <td>{{projectData.projectId}}</td>\n        <td>{{projectData.boardId}}</td>\n        <td>{{projectData.date}}</td>        \n        <td>{{projectData.description}}</td>        \n        <td>{{projectData.decision}}</td>\n        </tr>\n      </table>\n    </div>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.HttpClient }]; } });

    var KklProjectListModule = /** @class */ (function () {
        function KklProjectListModule() {
        }
        return KklProjectListModule;
    }());
    KklProjectListModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    KklProjectListModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListModule, declarations: [KklProjectListComponent], imports: [i1.HttpClientModule], exports: [KklProjectListComponent] });
    KklProjectListModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListModule, imports: [[
                i1.HttpClientModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            KklProjectListComponent
                        ],
                        imports: [
                            i1.HttpClientModule,
                        ],
                        exports: [
                            KklProjectListComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of kkl-project-list
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.KklProjectListComponent = KklProjectListComponent;
    exports.KklProjectListModule = KklProjectListModule;
    exports.KklProjectListService = KklProjectListService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=kkl-project-list.umd.js.map
