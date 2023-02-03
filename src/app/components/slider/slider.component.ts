import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AnyTxtRecord } from 'dns';
declare var $:any;


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() width: number;
  @Input() captions: boolean;
  @Output() getAuthor = new EventEmitter();

  public author: any;

  constructor() { 
    this.width = 0;
    this.captions = false;

    this.author = {
      name: 'Raul Garcia Hidalgo',
      website: 'rghweb.com'
    };
  }

  ngOnInit(): void { 
      $('.slider').bxSlider({
        slideWidth: this.width,
        captions: this.captions
      });

      this.getAuthor.emit(this.author);
  }

  launch(event: any){
    console.log(event);
    this.getAuthor.emit(this.author);
  }

  

}
