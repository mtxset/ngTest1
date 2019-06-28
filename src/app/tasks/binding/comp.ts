import { Component } from "@angular/core";

@Component({
  selector: "binding-ex-comp",
  templateUrl: "./comp.html"
})

export class BindingExComp
{
  data = tempData;
}

const tempData =
{
  name:'ngConf 2025',
  date: '3/1/2025',
  time: '8am',
  location:
  {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}
}
