import { NgModule } from '@angular/core';
import { KklProjectListComponent } from './kkl-project-list.component';
import { HttpClientModule } from '@angular/common/http';
export class KklProjectListModule {
}
KklProjectListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    KklProjectListComponent
                ],
                imports: [
                    HttpClientModule,
                ],
                exports: [
                    KklProjectListComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2tsLXByb2plY3QtbGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ra2wtcHJvamVjdC1saXN0L3NyYy9saWIva2tsLXByb2plY3QtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWN4RCxNQUFNLE9BQU8sb0JBQW9COzs7WUFYaEMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7aUJBQ3hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgS2tsUHJvamVjdExpc3RDb21wb25lbnQgfSBmcm9tICcuL2trbC1wcm9qZWN0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgS2tsUHJvamVjdExpc3RDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBLa2xQcm9qZWN0TGlzdENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEtrbFByb2plY3RMaXN0TW9kdWxlIHsgfVxuIl19