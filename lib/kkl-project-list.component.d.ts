import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class KklProjectListComponent implements OnInit {
    private http;
    constructor(http: HttpClient);
    ngOnInit(): void;
    getProjectList(projectId: string): import("rxjs").Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<KklProjectListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KklProjectListComponent, "lib-kkl-projectList", never, {}, {}, never, never>;
}
