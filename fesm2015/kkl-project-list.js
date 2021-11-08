import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class KklProjectListService {
    constructor() { }
}
KklProjectListService.ɵprov = i0.ɵɵdefineInjectable({ factory: function KklProjectListService_Factory() { return new KklProjectListService(); }, token: KklProjectListService, providedIn: "root" });
KklProjectListService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
KklProjectListService.ctorParameters = () => [];

class KklProjectListComponent {
    constructor() { }
    ngOnInit() {
    }
}
KklProjectListComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-kkl-projectList',
                template: `
    <p>
      kkl-project-list works!
    </p>
  `
            },] }
];
KklProjectListComponent.ctorParameters = () => [];

class KklProjectListModule {
}
KklProjectListModule.decorators = [
    { type: NgModule, args: [{
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

export { KklProjectListComponent, KklProjectListModule, KklProjectListService };
//# sourceMappingURL=kkl-project-list.js.map
