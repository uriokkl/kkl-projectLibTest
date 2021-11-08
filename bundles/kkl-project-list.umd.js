(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('kkl-project-list', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["kkl-project-list"] = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

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

    var KklProjectListService = /** @class */ (function () {
        function KklProjectListService() {
        }
        return KklProjectListService;
    }());
    KklProjectListService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function KklProjectListService_Factory() { return new KklProjectListService(); }, token: KklProjectListService, providedIn: "root" });
    KklProjectListService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    KklProjectListService.ctorParameters = function () { return []; };

    var KklProjectListComponent = /** @class */ (function () {
        function KklProjectListComponent() {
        }
        KklProjectListComponent.prototype.ngOnInit = function () {
        };
        return KklProjectListComponent;
    }());
    KklProjectListComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-kkl-projectList',
                    template: "\n    <p>\n      kkl-project-list works!\n    </p>\n  "
                },] }
    ];
    KklProjectListComponent.ctorParameters = function () { return []; };

    var KklProjectListModule = /** @class */ (function () {
        function KklProjectListModule() {
        }
        return KklProjectListModule;
    }());
    KklProjectListModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [
                        KklProjectListComponent
                    ],
                    imports: [],
                    exports: [
                        KklProjectListComponent
                    ]
                },] }
    ];

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
