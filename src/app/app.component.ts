import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = `Brandon's Angular Skeleton`;

  // fetch data here of initialization of component
  public ngOnInit(): void {
    console.warn('on it!');
  }
}
