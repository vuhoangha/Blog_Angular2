import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {
    private urlActor = 'http://localhost:3000/actor';
    private urlCategory = 'http://localhost:4000/category';
    private urlPost = 'http://localhost:5000/post';

    constructor(private _http: Http) {

    }

    getAllActor(): Observable<any[]> {
        return this._http.get(this.urlActor).map((response: Response) => response.json())
    }

}

