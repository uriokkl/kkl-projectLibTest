import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';

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
        this.projectId = "";
        this.projectList = [];
    }
    ngOnInit() {
    }
    GetProjects() {
        this.getProjectList(this.projectId);
    }
    getProjectList(projectId) {
        return this.http.get("https://virtserver.swaggerhub.com/shivek/ProjectMngScenarios/1.0.0/scenario12?projectId=1")
            .subscribe((data) => this.projectList = data);
    }
}
KklProjectListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListComponent, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Component });
KklProjectListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: KklProjectListComponent, selector: "lib-kkl-projectList", ngImport: i0, template: `
  <style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
     <div dir="rtl">
     <div>
     מספר פרוייקט 
      <input type="text" [(ngModel)]="projectId"> 
      <button type="button" (click)="GetProjects()">חיפוש</button>
     </div>
     {{projectList | json}}
      <br/>
      <br/>
      <table >
        <tr>
          <td>מספר פרוייקט</td>
          <td>boardId</td>
          <td>תאריך</td>
          <td>תאור</td>
          <td>החלטה</td>
        </tr>
        <tr *ngFor="let projectData of projectList;">
          <td>{{projectData.projectId}}</td>
          <td>{{projectData.boardId}}</td>
          <td>{{projectData.date}}</td>        
          <td>{{projectData.description}}</td>        
          <td>{{projectData.decision}}</td>
        </tr>
      </table>
    </div>
  `, isInline: true, styles: ["\ntable, th, td {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n"], directives: [{ type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "json": i3.JsonPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-kkl-projectList',
                    template: `
  <style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
     <div dir="rtl">
     <div>
     מספר פרוייקט 
      <input type="text" [(ngModel)]="projectId"> 
      <button type="button" (click)="GetProjects()">חיפוש</button>
     </div>
     {{projectList | json}}
      <br/>
      <br/>
      <table >
        <tr>
          <td>מספר פרוייקט</td>
          <td>boardId</td>
          <td>תאריך</td>
          <td>תאור</td>
          <td>החלטה</td>
        </tr>
        <tr *ngFor="let projectData of projectList;">
          <td>{{projectData.projectId}}</td>
          <td>{{projectData.boardId}}</td>
          <td>{{projectData.date}}</td>        
          <td>{{projectData.description}}</td>        
          <td>{{projectData.decision}}</td>
        </tr>
      </table>
    </div>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
class ProjectDetailModel {
}

class KklProjectListModule {
}
KklProjectListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
KklProjectListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListModule, declarations: [KklProjectListComponent], imports: [ReactiveFormsModule, FormsModule,
        HttpClientModule, CommonModule], exports: [KklProjectListComponent] });
KklProjectListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListModule, imports: [[
            ReactiveFormsModule, FormsModule,
            HttpClientModule, CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        KklProjectListComponent
                    ],
                    imports: [
                        ReactiveFormsModule, FormsModule,
                        HttpClientModule, CommonModule
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

export { KklProjectListComponent, KklProjectListModule, KklProjectListService, ProjectDetailModel };
//# sourceMappingURL=kkl-project-list.js.map
