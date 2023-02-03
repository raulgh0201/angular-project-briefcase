import { Component, OnInit, ViewChild } from '@angular/core';
import { AnyTxtRecord } from 'dns';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public captionsSlider: boolean;
  public anchuraToSlider: any;
  public author: any;
  
  constructor(){
    this.widthSlider = 0;
    this.captionsSlider = false;
    this.anchuraToSlider = 0;
   }

  ngOnInit(): void {
    console.log(<HTMLDivElement>document.querySelector('#text'));
  }

  loadSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetSlider(){
    this.anchuraToSlider = false;
  }

  getAuthor(event: any){
    this.author = event;
    console.log(this.author);
  }

}
