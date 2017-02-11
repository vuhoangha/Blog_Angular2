import { Component, OnInit } from '@angular/core';
import { DataProvider } from './server/request';

@Component({
    selector: 'sumary-post',
    template: `
  <div>
vuhoangha
            </div>
  `,
    styles: ['h4 {color:blue;}']
})
export class SumaryPostComponent implements OnInit {
    public dicPost: any[];
    public dicCat: any[];
    public dicActor: any[];

    constructor(private dataProvider: DataProvider) {
    }

    ngOnInit() {
        this.getAllActor();
    }

    getAllActor() {
        this.dataProvider.getAllActor().subscribe((response: any) => {
            if (response != null) {
                const objResponse = JSON.parse(response);
                if (Array.isArray(objResponse)) {
                    
                }
            }
            this.dicActor = response;
            console.log(response);
            this.getAllCategory();
        }, error => {
            console.error(error);
        });
    }

    getAllCategory() {
        this.dataProvider.getAllCategory().subscribe((response: any) => {
            this.dicCat = response;
            console.log(response);
            this.getAllPost();
        }, error => {
            console.error(error);
        });
    }

    getAllPost() {
        this.dataProvider.getAllPost().subscribe((response: any) => {
            this.dicPost = response;
            console.log(response);
        }, error => {
            console.error(error);
        });
    }

}
