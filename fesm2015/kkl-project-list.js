import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    getProjectList(projectId) {
        return this.http.get("https://virtserver.swaggerhub.com/shivek/ProjectMngScenarios/1.0.0/scenario12?projectId=1");
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
KklProjectListComponent.ctorParameters = () => [
    { type: HttpClient }
];

class KklProjectListModule {
}
KklProjectListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    KklProjectListComponent
                ],
                imports: [
                    HttpClientModule,
                ],
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
