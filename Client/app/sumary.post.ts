import { Component, OnInit } from '@angular/core';
import { DataProvider } from './server/request';

@Component({
    selector: 'sumary-post',
    templateUrl: './app/sumary.post.html',
    styles: ['h4 {color:blue;}']
})
export class SumaryPostComponent implements OnInit {
    public listPost = [];
    public dicCat = {};
    public dicActor = {};

    constructor(private dataProvider: DataProvider) {
    }

    ngOnInit() {
        this.getAllActor();
    }

    getAllActor() {
        this.dataProvider.getAllActor().subscribe((response: any) => {
            if (response != null) {
                if (Array.isArray(response)) {
                    for (let actor of response) {
                        const objActor = JSON.parse(actor);
                        this.dicActor[objActor.acId] = objActor;
                    }
                }
            }
            console.log(this.dicActor);
            this.getAllCategory();
        }, error => {
            console.error(error);
        });
    }

    getAllCategory() {
        this.dataProvider.getAllCategory().subscribe((response: any) => {
            if (response != null) {
                if (Array.isArray(response)) {
                    for (let category of response) {
                        const objActor = JSON.parse(category);
                        this.dicCat[objActor.catId] = objActor;
                    }
                }
            }
            console.log(this.dicCat);
            this.getAllPost();
        }, error => {
            console.error(error);
        });
    }

    getAllPost() {
        this.dataProvider.getAllPost().subscribe((response: any) => {
            if (response != null) {
                console.log(response);
                if (Array.isArray(response)) {
                    for (let post of response) {
                        console.log(post);
                        const objActor = JSON.parse(post);
                        console.log(objActor);
                        var newObj: {
                            postTitle: String,
                            summary: String,
                            acName: String,
                            catName: String
                        } = {
                                postTitle: '',
                                summary: '',
                                acName: '',
                                catName: ''
                            };
                        newObj.postTitle = objActor.postTitle;
                        newObj.summary = objActor.summary;
                        if (Reflect.has(this.dicActor, objActor.acId)) {
                            newObj.acName = this.dicActor[objActor.acId].acName;
                        }
                        if (Reflect.has(this.dicCat, objActor.acId)) {
                            newObj.catName = this.dicCat[objActor.catId].catName;
                        }
                        this.listPost.push(newObj);
                    }
                    console.log(this.listPost);
                }
            }
        }, error => {
            console.error(error);
        });
    }

}
