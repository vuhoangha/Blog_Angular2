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

    getAllCategory(): Observable<any[]> {
        return this._http.get(this.urlCategory).map((response: Response) => response.json())
    }

    getAllPost(): Observable<any[]> {
        return this._http.get(this.urlPost).map((response: Response) => response.json())
    }

    getPostById(postId): Observable<any[]> {
        const key = { postId: postId };
        const newUrl = this.urlPost + '?key=' + JSON.stringify(key);
        return this._http.get(newUrl).map((response: Response) => response.json())
    }

    getActorById(actorId): Observable<any[]> {
        const key = { acId: actorId };
        const newUrl = this.urlActor + '?key=' + JSON.stringify(key);
        return this._http.get(newUrl).map((response: Response) => response.json())
    }

    getCategoryById(catId): Observable<any[]> {
        const key = { catId: catId };
        const newUrl = this.urlCategory + '?key=' + JSON.stringify(key);
        return this._http.get(newUrl).map((response: Response) => response.json())
    }

}

