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
     <div>
     {{projectList | json}}
      <table>
        <tr *ngFor="let projectData of projectList;">
        <td>{{projectData.projectId}}</td>
        <td>{{projectData.boardId}}</td>
        <td>{{projectData.date}}</td>        
        <td>{{projectData.description}}</td>        
        <td>{{projectData.decision}}</td>
        </tr>
      </table>
    </div>
  `, isInline: true, directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "json": i2.JsonPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-kkl-projectList',
                    template: `
     <div>
     {{projectList | json}}
      <table>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ra2wtcHJvamVjdC1saXN0L3NyYy9saWIva2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7OztBQXVCbEQsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLGdCQUFXLEdBQXdCLEVBQUUsQ0FBQztJQUVFLENBQUM7SUFFekMsUUFBUTtJQUNSLENBQUM7SUFFRCxjQUFjLENBQUMsU0FBaUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRSwyRkFBMkYsQ0FBQzthQUNqSCxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FDdEIsQ0FBQztJQUNKLENBQUM7O3FIQWRVLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLDJEQWpCeEI7Ozs7Ozs7Ozs7Ozs7R0FhVDs0RkFJVSx1QkFBdUI7a0JBbkJuQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7OztHQWFUO29CQUNELE1BQU0sRUFBRSxFQUNQO2lCQUNGOztBQW1CRCxNQUFNLE9BQU8sa0JBQWtCO0NBTTlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWIta2tsLXByb2plY3RMaXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgPGRpdj5cbiAgICAge3twcm9qZWN0TGlzdCB8IGpzb259fVxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHByb2plY3REYXRhIG9mIHByb2plY3RMaXN0O1wiPlxuICAgICAgICA8dGQ+e3twcm9qZWN0RGF0YS5wcm9qZWN0SWR9fTwvdGQ+XG4gICAgICAgIDx0ZD57e3Byb2plY3REYXRhLmJvYXJkSWR9fTwvdGQ+XG4gICAgICAgIDx0ZD57e3Byb2plY3REYXRhLmRhdGV9fTwvdGQ+ICAgICAgICBcbiAgICAgICAgPHRkPnt7cHJvamVjdERhdGEuZGVzY3JpcHRpb259fTwvdGQ+ICAgICAgICBcbiAgICAgICAgPHRkPnt7cHJvamVjdERhdGEuZGVjaXNpb259fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBLa2xQcm9qZWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJvamVjdExpc3QgOlByb2plY3REZXRhaWxNb2RlbFtdPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgZ2V0UHJvamVjdExpc3QocHJvamVjdElkOiBzdHJpbmcgKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQgKFwiaHR0cHM6Ly92aXJ0c2VydmVyLnN3YWdnZXJodWIuY29tL3NoaXZlay9Qcm9qZWN0TW5nU2NlbmFyaW9zLzEuMC4wL3NjZW5hcmlvMTI/cHJvamVjdElkPTFcIilcbiAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IFxuICAgIHRoaXMucHJvamVjdExpc3QgPSBkYXRhXG4gICAgKTtcbiAgfVxuICBcbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3REZXRhaWxNb2RlbCB7XG4gIHByb2plY3RJZCE6IHN0cmluZztcbiAgYm9hcmRJZCE6IHN0cmluZztcbiAgZGF0ZSE6IHN0cmluZztcbiAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG4gIGRlY2lzaW9uITogc3RyaW5nO1xufSJdfQ==