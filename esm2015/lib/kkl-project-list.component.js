import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class KklProjectListComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    getProjectList(projectId) {
        return this.http.get("https://virtserver.swaggerhub.com/shivek/ProjectMngScenarios/1.0.0/scenario12?projectId=1")
            .subscribe((data) => alert(data));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ra2wtcHJvamVjdC1saXN0L3NyYy9saWIva2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBYWxELE1BQU0sT0FBTyx1QkFBdUI7SUFFbEMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsUUFBUTtJQUNSLENBQUM7SUFFRCxjQUFjLENBQUMsU0FBaUI7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRSwyRkFBMkYsQ0FBQzthQUNqSCxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQ1YsQ0FBQztJQUNKLENBQUM7O3FIQVpVLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLDJEQVJ4Qjs7OztHQUlUOzRGQUlVLHVCQUF1QjtrQkFWbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUU7Ozs7R0FJVDtvQkFDRCxNQUFNLEVBQUUsRUFDUDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWIta2tsLXByb2plY3RMaXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIGtrbC1wcm9qZWN0LWxpc3Qgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBLa2xQcm9qZWN0TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGdldFByb2plY3RMaXN0KHByb2plY3RJZDogc3RyaW5nICkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0IChcImh0dHBzOi8vdmlydHNlcnZlci5zd2FnZ2VyaHViLmNvbS9zaGl2ZWsvUHJvamVjdE1uZ1NjZW5hcmlvcy8xLjAuMC9zY2VuYXJpbzEyP3Byb2plY3RJZD0xXCIpXG4gICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiBcbiAgICBhbGVydChkYXRhKVxuICAgICk7XG4gIH1cblxufVxuIl19