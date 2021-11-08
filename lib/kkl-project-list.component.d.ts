import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export declare class KklProjectListComponent implements OnInit {
    private http;
    constructor(http: HttpClient);
    ngOnInit(): void;
    getProjectList(projectId: string): import("rxjs").Observable<Object>;
}
