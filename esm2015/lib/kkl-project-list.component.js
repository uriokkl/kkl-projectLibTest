import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KklProjectListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-kkl-projectList',
                    template: `
     <div>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ra2wtcHJvamVjdC1saXN0L3NyYy9saWIva2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBcUJsRCxNQUFNLE9BQU8sdUJBQXVCO0lBSWxDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGcEMsZ0JBQVcsR0FBRSxFQUFFLENBQUM7SUFFd0IsQ0FBQztJQUV6QyxRQUFRO0lBQ1IsQ0FBQztJQUVELGNBQWMsQ0FBQyxTQUFpQjtRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLDJGQUEyRixDQUFDO2FBQ2pILFNBQVMsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUN0QixDQUFDO0lBQ0osQ0FBQzs7cUhBZFUsdUJBQXVCO3lHQUF2Qix1QkFBdUIsMkRBaEJ4Qjs7Ozs7Ozs7Ozs7O0dBWVQ7NEZBSVUsdUJBQXVCO2tCQWxCbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO29CQUNELE1BQU0sRUFBRSxFQUNQO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1ra2wtcHJvamVjdExpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgICA8ZGl2PlxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHByb2plY3REYXRhIG9mIHByb2plY3RMaXN0O1wiPlxuICAgICAgICA8dGQ+e3twcm9qZWN0RGF0YS5wcm9qZWN0SWR9fTwvdGQ+XG4gICAgICAgIDx0ZD57e3Byb2plY3REYXRhLmJvYXJkSWR9fTwvdGQ+XG4gICAgICAgIDx0ZD57e3Byb2plY3REYXRhLmRhdGV9fTwvdGQ+ICAgICAgICBcbiAgICAgICAgPHRkPnt7cHJvamVjdERhdGEuZGVzY3JpcHRpb259fTwvdGQ+ICAgICAgICBcbiAgICAgICAgPHRkPnt7cHJvamVjdERhdGEuZGVjaXNpb259fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBLa2xQcm9qZWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJvamVjdExpc3Q9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBnZXRQcm9qZWN0TGlzdChwcm9qZWN0SWQ6IHN0cmluZyApIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCAoXCJodHRwczovL3ZpcnRzZXJ2ZXIuc3dhZ2dlcmh1Yi5jb20vc2hpdmVrL1Byb2plY3RNbmdTY2VuYXJpb3MvMS4wLjAvc2NlbmFyaW8xMj9wcm9qZWN0SWQ9MVwiKVxuICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4gXG4gICAgdGhpcy5wcm9qZWN0TGlzdCA9IGRhdGFcbiAgICApO1xuICB9XG5cbn1cbiJdfQ==