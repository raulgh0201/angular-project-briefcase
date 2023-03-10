import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: String;
  public subtitle: String;
  public web: String;

  constructor() {
    this.title = 'Raul Garcia';
    this.subtitle = 'Desarrollador Web';
    this.web = 'raulgh0201@gmail.com';
   }

  ngOnInit(): void {
  }

}
