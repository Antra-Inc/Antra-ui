import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-search-example',
  templateUrl: './global-search-example.component.html',
  styleUrls: ['./global-search-example.component.scss'],
})
export class GlobalSearchExampleComponent implements OnInit {
  searchedText: string;
  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  handleNotify(event: string) {
    this.searchedText = event.toString();
  }
}
