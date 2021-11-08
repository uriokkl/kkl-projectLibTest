import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/common";
export class KklProjectListComponent {
    constructor(http) {
        this.http = http;
        this.projectList = [];
    }
    ngOnInit() {
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
  `, isInline: true, styles: ["\ntable, th, td {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n"], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "json": i2.JsonPipe } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ra2wtcHJvamVjdC1saXN0L3NyYy9saWIva2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQXNDbEQsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLGdCQUFXLEdBQXdCLEVBQUUsQ0FBQztJQUVFLENBQUM7SUFFekMsUUFBUTtJQUNSLENBQUM7SUFFRCxjQUFjLENBQUMsU0FBaUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRSwyRkFBMkYsQ0FBQzthQUNqSCxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FDdEIsQ0FBQztJQUNKLENBQUM7O3FIQWRVLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLDJEQWhDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0QlQ7NEZBSVUsdUJBQXVCO2tCQWxDbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0QlQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7O0FBbUJELE1BQU0sT0FBTyxrQkFBa0I7Q0FNOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1ra2wtcHJvamVjdExpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8c3R5bGU+XG50YWJsZSwgdGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG48L3N0eWxlPlxuICAgICA8ZGl2IGRpcj1cInJ0bFwiPlxuICAgICB7e3Byb2plY3RMaXN0IHwganNvbn19XG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cbiAgICAgIDx0YWJsZSA+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+157Xodek16gg16TXqNeV15nXmden15g8L3RkPlxuICAgICAgICAgIDx0ZD5ib2FyZElkPC90ZD5cbiAgICAgICAgICA8dGQ+16rXkNeo15nXmjwvdGQ+XG4gICAgICAgICAgPHRkPteq15DXldeoPC90ZD5cbiAgICAgICAgICA8dGQ+15TXl9ec15jXlDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcHJvamVjdERhdGEgb2YgcHJvamVjdExpc3Q7XCI+XG4gICAgICAgICAgPHRkPnt7cHJvamVjdERhdGEucHJvamVjdElkfX08L3RkPlxuICAgICAgICAgIDx0ZD57e3Byb2plY3REYXRhLmJvYXJkSWR9fTwvdGQ+XG4gICAgICAgICAgPHRkPnt7cHJvamVjdERhdGEuZGF0ZX19PC90ZD4gICAgICAgIFxuICAgICAgICAgIDx0ZD57e3Byb2plY3REYXRhLmRlc2NyaXB0aW9ufX08L3RkPiAgICAgICAgXG4gICAgICAgICAgPHRkPnt7cHJvamVjdERhdGEuZGVjaXNpb259fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBLa2xQcm9qZWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJvamVjdExpc3QgOlByb2plY3REZXRhaWxNb2RlbFtdPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgZ2V0UHJvamVjdExpc3QocHJvamVjdElkOiBzdHJpbmcgKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQgKFwiaHR0cHM6Ly92aXJ0c2VydmVyLnN3YWdnZXJodWIuY29tL3NoaXZlay9Qcm9qZWN0TW5nU2NlbmFyaW9zLzEuMC4wL3NjZW5hcmlvMTI/cHJvamVjdElkPTFcIilcbiAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IFxuICAgIHRoaXMucHJvamVjdExpc3QgPSBkYXRhXG4gICAgKTtcbiAgfVxuICBcbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3REZXRhaWxNb2RlbCB7XG4gIHByb2plY3RJZCE6IHN0cmluZztcbiAgYm9hcmRJZCE6IHN0cmluZztcbiAgZGF0ZSE6IHN0cmluZztcbiAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG4gIGRlY2lzaW9uITogc3RyaW5nO1xufSJdfQ==