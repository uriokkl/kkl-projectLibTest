import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class KklProjectListComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ra2wtcHJvamVjdC1saXN0L3NyYy9saWIva2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFZbEQsTUFBTSxPQUFPLHVCQUF1QjtJQUVsQyxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6QyxRQUFRO0lBQ1IsQ0FBQztJQUVELGNBQWMsQ0FBQyxTQUFpQjtRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLDJGQUEyRixDQUFDLENBQUM7SUFDckgsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7R0FJVDthQUdGOzs7WUFYUSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1ra2wtcHJvamVjdExpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAga2tsLXByb2plY3QtbGlzdCB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIEtrbFByb2plY3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgZ2V0UHJvamVjdExpc3QocHJvamVjdElkOiBzdHJpbmcgKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQgKFwiaHR0cHM6Ly92aXJ0c2VydmVyLnN3YWdnZXJodWIuY29tL3NoaXZlay9Qcm9qZWN0TW5nU2NlbmFyaW9zLzEuMC4wL3NjZW5hcmlvMTI/cHJvamVjdElkPTFcIik7XG4gIH1cblxufVxuIl19