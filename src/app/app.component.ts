import { Component } from "@angular/core";
import { Product } from "./model";
import { sampleProducts } from "./products";

@Component({
  selector: "my-app",
  template: `
    <kendo-grid
      [kendoGridBinding]="gridData"
      [filterable]="true"
      [height]="350"
    >
      <kendo-grid-column
        field="ProductID"
        title="ID"
        [width]="40"
        [filterable]="false"
      >
      </kendo-grid-column>
      <kendo-grid-column field="ProductName" title="Product Name">
      </kendo-grid-column>
      <kendo-grid-column
        field="UnitPrice"
        title="Product Price"
        filter="numeric"
      >
      </kendo-grid-column>
      <kendo-grid-column
        controlType="DateTime"
        field="FirstOrderedOn"
        title="Date"
        displayFormat="MM/dd/yyyy"
        inputFormat="MM/dd/yy"
        filter="date"
      >
      </kendo-grid-column>
    </kendo-grid>
  `
})
export class AppComponent {
  //public gridData: Product[] = JSON.parse(JSON.stringify(sampleProducts));
  public gridData: Product[] = sampleProducts;
}
