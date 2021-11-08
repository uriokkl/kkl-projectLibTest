import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

class KklProjectListService {
    constructor() { }
}
KklProjectListService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
KklProjectListService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

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
KklProjectListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListComponent, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Component });
KklProjectListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: KklProjectListComponent, selector: "lib-kkl-projectList", ngImport: i0, template: `
    <p>
      kkl-project-list works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-kkl-projectList',
                    template: `
    <p>
      kkl-project-list works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

class KklProjectListModule {
}
KklProjectListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
KklProjectListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListModule, declarations: [KklProjectListComponent], imports: [HttpClientModule], exports: [KklProjectListComponent] });
KklProjectListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListModule, imports: [[
            HttpClientModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        KklProjectListComponent
                    ],
                    imports: [
                        HttpClientModule,
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

export { KklProjectListComponent, KklProjectListModule, KklProjectListService };
//# sourceMappingURL=kkl-project-list.js.map
