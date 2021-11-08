import { NgModule } from '@angular/core';
import { KklProjectListComponent } from './kkl-project-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
export class KklProjectListModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2tsLXByb2plY3QtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ra2wtcHJvamVjdC1saXN0L3NyYy9saWIva2tsLXByb2plY3QtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBQyxtQkFBbUIsRUFBa0MsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFjakcsTUFBTSxPQUFPLG9CQUFvQjs7a0hBQXBCLG9CQUFvQjttSEFBcEIsb0JBQW9CLGlCQVY3Qix1QkFBdUIsYUFHdkIsbUJBQW1CLEVBQUUsV0FBVztRQUNoQyxnQkFBZ0IsRUFBQyxZQUFZLGFBRzdCLHVCQUF1QjttSEFHZCxvQkFBb0IsWUFSdEI7WUFDUCxtQkFBbUIsRUFBRSxXQUFXO1lBQ2hDLGdCQUFnQixFQUFDLFlBQVk7U0FDOUI7NEZBS1Usb0JBQW9CO2tCQVpoQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUIsRUFBRSxXQUFXO3dCQUNoQyxnQkFBZ0IsRUFBQyxZQUFZO3FCQUM5QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsdUJBQXVCO3FCQUN4QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBLa2xQcm9qZWN0TGlzdENvbXBvbmVudCB9IGZyb20gJy4va2tsLXByb2plY3QtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlICxOZ0NvbnRyb2xTdGF0dXMsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEtrbFByb2plY3RMaXN0Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgS2tsUHJvamVjdExpc3RDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBLa2xQcm9qZWN0TGlzdE1vZHVsZSB7IH1cbiJdfQ==