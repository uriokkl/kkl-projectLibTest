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
export class ProjectDetailModel {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ra2wtcHJvamVjdC1saXN0L3NyYy9saWIva2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUEyQ2xELE1BQU0sT0FBTyx1QkFBdUI7SUFLbEMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUhwQyxjQUFTLEdBQUUsRUFBRSxDQUFDO1FBQ2QsZ0JBQVcsR0FBd0IsRUFBRSxDQUFDO0lBRUUsQ0FBQztJQUV6QyxRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVc7UUFFVCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsY0FBYyxDQUFDLFNBQWlCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsMkZBQTJGLENBQUM7YUFDakgsU0FBUyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQ3RCLENBQUM7SUFDSixDQUFDOztxSEFuQlUsdUJBQXVCO3lHQUF2Qix1QkFBdUIsMkRBckN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNUOzRGQUlVLHVCQUF1QjtrQkF2Q25DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ1Q7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7O0FBd0JELE1BQU0sT0FBTyxrQkFBa0I7Q0FNOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1ra2wtcHJvamVjdExpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8c3R5bGU+XG50YWJsZSwgdGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG48L3N0eWxlPlxuICAgICA8ZGl2IGRpcj1cInJ0bFwiPlxuICAgICA8ZGl2PlxuICAgICDXnteh16TXqCDXpNeo15XXmdeZ16fXmCBcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwicHJvamVjdElkXCI+IFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIkdldFByb2plY3RzKClcIj7Xl9eZ16TXldepPC9idXR0b24+XG4gICAgIDwvZGl2PlxuICAgICB7e3Byb2plY3RMaXN0IHwganNvbn19XG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cbiAgICAgIDx0YWJsZSA+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+157Xodek16gg16TXqNeV15nXmden15g8L3RkPlxuICAgICAgICAgIDx0ZD5ib2FyZElkPC90ZD5cbiAgICAgICAgICA8dGQ+16rXkNeo15nXmjwvdGQ+XG4gICAgICAgICAgPHRkPteq15DXldeoPC90ZD5cbiAgICAgICAgICA8dGQ+15TXl9ec15jXlDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcHJvamVjdERhdGEgb2YgcHJvamVjdExpc3Q7XCI+XG4gICAgICAgICAgPHRkPnt7cHJvamVjdERhdGEucHJvamVjdElkfX08L3RkPlxuICAgICAgICAgIDx0ZD57e3Byb2plY3REYXRhLmJvYXJkSWR9fTwvdGQ+XG4gICAgICAgICAgPHRkPnt7cHJvamVjdERhdGEuZGF0ZX19PC90ZD4gICAgICAgIFxuICAgICAgICAgIDx0ZD57e3Byb2plY3REYXRhLmRlc2NyaXB0aW9ufX08L3RkPiAgICAgICAgXG4gICAgICAgICAgPHRkPnt7cHJvamVjdERhdGEuZGVjaXNpb259fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBLa2xQcm9qZWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJvamVjdElkID1cIlwiO1xuICBwcm9qZWN0TGlzdCA6UHJvamVjdERldGFpbE1vZGVsW109IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBHZXRQcm9qZWN0cygpXG4gIHtcbiAgICB0aGlzLmdldFByb2plY3RMaXN0KHRoaXMucHJvamVjdElkKTtcbiAgfVxuICBnZXRQcm9qZWN0TGlzdChwcm9qZWN0SWQ6IHN0cmluZyApIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCAoXCJodHRwczovL3ZpcnRzZXJ2ZXIuc3dhZ2dlcmh1Yi5jb20vc2hpdmVrL1Byb2plY3RNbmdTY2VuYXJpb3MvMS4wLjAvc2NlbmFyaW8xMj9wcm9qZWN0SWQ9MVwiKVxuICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4gXG4gICAgdGhpcy5wcm9qZWN0TGlzdCA9IGRhdGFcbiAgICApO1xuICB9XG4gIFxufVxuXG5leHBvcnQgY2xhc3MgUHJvamVjdERldGFpbE1vZGVsIHtcbiAgcHJvamVjdElkITogc3RyaW5nO1xuICBib2FyZElkITogc3RyaW5nO1xuICBkYXRlITogc3RyaW5nO1xuICBkZXNjcmlwdGlvbiE6IHN0cmluZztcbiAgZGVjaXNpb24hOiBzdHJpbmc7XG59Il19