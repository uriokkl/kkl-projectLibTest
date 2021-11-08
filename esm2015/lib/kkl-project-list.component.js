import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
export class KklProjectListComponent {
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
        return this.http.get("https://virtserver.swaggerhub.com/shivek/ProjectMngScenarios/1.0.0/scenario12?projectId=" + projectId)
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
  `, isInline: true, styles: ["\ntable, th, td {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n"], directives: [{ type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
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
export class ProjectDetailModel {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ra2wtcHJvamVjdC1saXN0L3NyYy9saWIva2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUE0Q2xELE1BQU0sT0FBTyx1QkFBdUI7SUFLbEMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQyxjQUFTLEdBQUUsRUFBRSxDQUFDO1FBQ2QsZ0JBQVcsR0FBd0IsRUFBRSxDQUFDO0lBRUUsQ0FBQztJQUV6QyxRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVc7UUFFVCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsY0FBYyxDQUFDLFNBQWlCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsMEZBQTBGLEdBQUMsU0FBUyxDQUFDO2FBQzFILFNBQVMsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUN0QixDQUFDO0lBQ0osQ0FBQzs7cUhBbkJVLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLDJEQXRDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ1Q7NEZBSVUsdUJBQXVCO2tCQXhDbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ1Q7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7O0FBd0JELE1BQU0sT0FBTyxrQkFBa0I7Q0FNOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1ra2wtcHJvamVjdExpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8c3R5bGU+XG50YWJsZSwgdGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG48L3N0eWxlPlxuICAgICA8ZGl2IGRpcj1cInJ0bFwiPlxuICAgICA8ZGl2PlxuICAgICDXnteh16TXqCDXpNeo15XXmdeZ16fXmCBcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwicHJvamVjdElkXCI+IFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIkdldFByb2plY3RzKClcIj7Xl9eZ16TXldepPC9idXR0b24+XG4gICAgIDwvZGl2PlxuICAgICBcbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuXG4gICAgICA8dGFibGUgPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPtee16HXpNeoINek16jXldeZ15nXp9eYPC90ZD5cbiAgICAgICAgICA8dGQ+Ym9hcmRJZDwvdGQ+XG4gICAgICAgICAgPHRkPteq15DXqNeZ15o8L3RkPlxuICAgICAgICAgIDx0ZD7XqteQ15XXqDwvdGQ+XG4gICAgICAgICAgPHRkPteU15fXnNeY15Q8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHByb2plY3REYXRhIG9mIHByb2plY3RMaXN0O1wiPlxuICAgICAgICAgIDx0ZD57e3Byb2plY3REYXRhLnByb2plY3RJZH19PC90ZD5cbiAgICAgICAgICA8dGQ+e3twcm9qZWN0RGF0YS5ib2FyZElkfX08L3RkPlxuICAgICAgICAgIDx0ZD57e3Byb2plY3REYXRhLmRhdGV9fTwvdGQ+ICAgICAgICBcbiAgICAgICAgICA8dGQ+e3twcm9qZWN0RGF0YS5kZXNjcmlwdGlvbn19PC90ZD4gICAgICAgIFxuICAgICAgICAgIDx0ZD57e3Byb2plY3REYXRhLmRlY2lzaW9ufX08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgS2tsUHJvamVjdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByb2plY3RJZCA9XCJcIjtcbiAgcHJvamVjdExpc3QgOlByb2plY3REZXRhaWxNb2RlbFtdPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgR2V0UHJvamVjdHMoKVxuICB7XG4gICAgdGhpcy5nZXRQcm9qZWN0TGlzdCh0aGlzLnByb2plY3RJZCk7XG4gIH1cbiAgZ2V0UHJvamVjdExpc3QocHJvamVjdElkOiBzdHJpbmcgKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQgKFwiaHR0cHM6Ly92aXJ0c2VydmVyLnN3YWdnZXJodWIuY29tL3NoaXZlay9Qcm9qZWN0TW5nU2NlbmFyaW9zLzEuMC4wL3NjZW5hcmlvMTI/cHJvamVjdElkPVwiK3Byb2plY3RJZClcbiAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IFxuICAgIHRoaXMucHJvamVjdExpc3QgPSBkYXRhXG4gICAgKTtcbiAgfVxuICBcbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3REZXRhaWxNb2RlbCB7XG4gIHByb2plY3RJZCE6IHN0cmluZztcbiAgYm9hcmRJZCE6IHN0cmluZztcbiAgZGF0ZSE6IHN0cmluZztcbiAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG4gIGRlY2lzaW9uITogc3RyaW5nO1xufSJdfQ==