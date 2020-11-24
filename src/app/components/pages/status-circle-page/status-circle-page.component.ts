import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-circle-page',
  templateUrl: './status-circle-page.component.html',
  styleUrls: ['./status-circle-page.component.scss'],
})
export class StatusCirclePageComponent implements OnInit {
  htmlSource = `<div class="example-content">
  <h4>Default Style:</h4>
  <div class="status-circle-container-1">
    <antra-status-circle></antra-status-circle>
    <antra-status-circle [percentage]="50"></antra-status-circle>
    <antra-status-circle [percentage]="75"></antra-status-circle>
    <antra-status-circle [percentage]="100"></antra-status-circle>
  </div>
  <h4>Customized Style:</h4>
  <div class="status-circle-container-2">
    <antra-status-circle [radius]="8" class="customized-1"></antra-status-circle>
    <antra-status-circle [percentage]="50" [radius]="8" class="customized-1"></antra-status-circle>
    <antra-status-circle [percentage]="75" [radius]="8" class="customized-1"></antra-status-circle>
    <antra-status-circle [percentage]="100" [radius]="8" class="customized-1"></antra-status-circle>
  </div>
  <br /><br />
  <div class="status-circle-container-3">
    <antra-status-circle [radius]="11" class="customized-2"></antra-status-circle>
    <antra-status-circle [percentage]="50" [radius]="11" class="customized-2"></antra-status-circle>
    <antra-status-circle [percentage]="75" [radius]="11" class="customized-2"></antra-status-circle>
    <antra-status-circle [percentage]="100" [radius]="11" class="customized-2"></antra-status-circle>
  </div>
</div>
`;
  scssSource = `
  .example-content {
    padding: 10px 0;

    & > * {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }

  .status-circle-container-1 {
    position: relative;
    width: 1200px;
    height: 128px;
    background: #0b82c2;
    z-index: 1000;
  }
  .status-circle-container-2 {
    position: relative;
    width: 1200px;
    height: 128px;
    background: #11c20b;
    z-index: 1000;
  }
  .status-circle-container-3 {
    position: relative;
    width: 1200px;
    height: 128px;
    background: #c2540b;
    z-index: 1000;
  }
  .customized-1::ng-deep .status-circle-0percent {
    fill: black;
  }
  .customized-1::ng-deep .status-circle-1to50percent {
    fill: rgb(128, 0, 60);
  }
  .customized-1::ng-deep .status-circle-51to80percent {
    fill: blue;
  }
  .customized-1::ng-deep .status-circle-81to100percent {
    fill: yellow;
  }
  .customized-2::ng-deep .status-circle-0percent {
    fill: rgb(99, 9, 243);
    stroke: rgb(252, 217, 217);
    stroke-width: 2;
  }
  .customized-2::ng-deep .status-circle-1to50percent {
    fill: rgb(173, 114, 141);
    stroke: red;
    stroke-width: 2;
  }
  .customized-2::ng-deep .status-circle-51to80percent {
    fill: rgb(9, 221, 9);
    stroke: #ffff00;
    stroke-width: 2;
  }
  .customized-2::ng-deep .status-circle-81to100percent {
    fill: rgb(255, 0, 119);
    stroke: #11c20b;
    stroke-width: 2;
  }
  `;
  tsSource = `import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-status-circle-example',
    templateUrl: './status-circle-example.component.html',
    styleUrls: ['./status-circle-example.component.scss']
  })
  export class StatusCircleExampleComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

  }

`;
  constructor() {}

  ngOnInit(): void {}
}
