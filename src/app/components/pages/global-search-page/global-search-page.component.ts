import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-search-page',
  templateUrl: './global-search-page.component.html',
  styleUrls: ['./global-search-page.component.scss'],
})
export class GlobalSearchPageComponent implements OnInit {
  htmlSource = `
  <div class="example-content">
    <h4>Default Style:</h4>
    <antra-global-search (notify)="handleNotify($event)"></antra-global-search>     
    <h4>Customized Styles:</h4>
    <antra-global-search placeholderText="Please type here..." class="customized-1" (notify)="handleNotify($event)"></antra-global-search>   
    <antra-global-search placeholderText="" class="customized-2" (notify)="handleNotify($event)"></antra-global-search>   
    <antra-global-search placeholderText="Search here..." class="customized-3" (notify)="handleNotify($event)"></antra-global-search>   
    <antra-global-search placeholderText="type..." class="customized-4" (notify)="handleNotify($event)"></antra-global-search>   
    <h4>Searched Text: {{searchedText}}</h4>
  </div>
`;
  scssSource = `.example-content {
    padding: 10px 0;
    & > * {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }

  .customized-1::ng-deep .input-properties {
    border: 1px solid #1fe02e;
    border-radius: 12px;
    font: inherit;
    font-size: 14px;
    height: 30px;
    padding: 0px 18px;
    width: 290px;

    @media (max-width: 960px) {
          width: 100%;
    }
  }

  .customized-2::ng-deep .input-properties {
    border: 1px solid #f5092a;
    border-radius: 0px;
    font: inherit;
    font-size: 14px;
    font-weight: 500;
    height: 30px;
    padding: 0px 18px;
    width: 290px;

    @media (max-width: 960px) {
          width: 100%;
    }
  }

  .customized-3::ng-deep .input-properties {
    border: 1px solid orange;
    border-radius: 8px;
    font: inherit;
    font-size: 13px;
    font-weight: 500;
    height: 30px;
    padding: 0px 18px;
    width: 290px;

    @media (max-width: 960px) {
          width: 100%;
    }
  }

  .customized-4::ng-deep .input-properties {
    border: 1px solid #0014ff;
    border-radius: 16px;
    font: inherit;
    font-size: 16px;
    font-weight: 400;
    height: 30px;
    padding: 0px 18px;
    width: 290px;

    @media (max-width: 960px) {
          width: 100%;
    }
  }
`;
  tsSource = `import { Component, OnInit } from '@angular/core';

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
`;
  constructor() {}

  ngOnInit(): void {}
}
