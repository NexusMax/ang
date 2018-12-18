import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public header = 5;
  public color = 'red';

  constructor() {
    setTimeout( () => {
      this.color = 'green';
    }, 500 );

      setTimeout( () => {
          this.color = 'blue';
      }, 1500 );
  }

  ngOnInit() {
  }

}
