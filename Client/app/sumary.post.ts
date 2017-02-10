import { Component, OnInit } from '@angular/core';
import { DataProvider } from './server/request';

@Component({
    selector: 'sumary-post',
    template: `
  <div *ngFor="let post of listPost" className='summary-post'>
                <div onClick={() => { this.viewDetail(post.postId); }}>
                    {post.postTitle}
                </div>
                <div>{post.summary}</div>
                <div className='category' onClick={() => { this.viewDetail(post); }}>
                    {post.catName}
                </div>
                <div className='actor' onClick={() => { this.viewDetail(post); }}>
                    {post.acName}
                </div>
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
