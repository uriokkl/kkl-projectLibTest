(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('kkl-project-list', ['exports', '@angular/core', '@angular/common/http', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["kkl-project-list"] = {}, global.ng.core, global.ng.common.http, global.ng.common));
})(this, (function (exports, i0, i1, i2) { 'use strict';

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
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

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
    KklProjectListComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: KklProjectListComponent, selector: "lib-kkl-projectList", ngImport: i0__namespace, template: "\n  <style>\ntable, th, td {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n</style>\n     <div>\n     {{projectList | json}}\n      <br/>\n      <table >\n        <tr>\n          <td>\u05DE\u05E1\u05E4\u05E8 \u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8</td>\n          <td>boardId</td>\n          <td>\u05EA\u05D0\u05E8\u05D9\u05DA</td>\n          <td>\u05EA\u05D0\u05D5\u05E8</td>\n          <td>\u05D4\u05D7\u05DC\u05D8\u05D4</td>\n        </tr>\n        <tr *ngFor=\"let projectData of projectList;\">\n          <td>{{projectData.projectId}}</td>\n          <td>{{projectData.boardId}}</td>\n          <td>{{projectData.date}}</td>        \n          <td>{{projectData.description}}</td>        \n          <td>{{projectData.decision}}</td>\n        </tr>\n      </table>\n    </div>\n  ", isInline: true, styles: ["\ntable, th, td {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n"], directives: [{ type: i2__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "json": i2__namespace.JsonPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-kkl-projectList',
                        template: "\n  <style>\ntable, th, td {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n</style>\n     <div>\n     {{projectList | json}}\n      <br/>\n      <table >\n        <tr>\n          <td>\u05DE\u05E1\u05E4\u05E8 \u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8</td>\n          <td>boardId</td>\n          <td>\u05EA\u05D0\u05E8\u05D9\u05DA</td>\n          <td>\u05EA\u05D0\u05D5\u05E8</td>\n          <td>\u05D4\u05D7\u05DC\u05D8\u05D4</td>\n        </tr>\n        <tr *ngFor=\"let projectData of projectList;\">\n          <td>{{projectData.projectId}}</td>\n          <td>{{projectData.boardId}}</td>\n          <td>{{projectData.date}}</td>        \n          <td>{{projectData.description}}</td>        \n          <td>{{projectData.decision}}</td>\n        </tr>\n      </table>\n    </div>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.HttpClient }]; } });
    var ProjectDetailModel = /** @class */ (function () {
        function ProjectDetailModel() {
        }
        return ProjectDetailModel;
    }());

    var KklProjectListModule = /** @class */ (function () {
        function KklProjectListModule() {
        }
        return KklProjectListModule;
    }());
    KklProjectListModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    KklProjectListModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListModule, declarations: [KklProjectListComponent], imports: [i1.HttpClientModule, i2.CommonModule], exports: [KklProjectListComponent] });
    KklProjectListModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListModule, imports: [[
                i1.HttpClientModule, i2.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KklProjectListModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            KklProjectListComponent
                        ],
                        imports: [
                            i1.HttpClientModule, i2.CommonModule
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
    exports.ProjectDetailModel = ProjectDetailModel;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=kkl-project-list.umd.js.map
