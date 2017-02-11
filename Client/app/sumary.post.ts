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
    public listPost: any[];
    constructor(private dataProvider: DataProvider) {

    }
    ngOnInit() {
        this.dataProvider.getAllActor().subscribe((response: any) => {
            this.listPost = response;
            console.log(response);
        }, error => {
            console.error(error);
        });
    }

}
