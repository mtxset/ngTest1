import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverino',
  templateUrl: './serverino.component.html'
})
export class ServerinoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  serverElements = [];

  onChangeFirst()
  {
    this.serverElements[0].name = "Changed";
  }

  onDestroyFirst()
  {
    this.serverElements.splice(0, 1);
  }

  onServerAdded(data: {serverName: string, serverContent: string})
  {
    this.serverElements.push({
      type: 'server',
      name: data.serverName,
      content: data.serverContent
    });
  }

  onBlueprintAdded(data: {serverName: string, serverContent: string})
  {
    this.serverElements.push({
      type: 'blueprint',
      name: data.serverName,
      content: data.serverContent
    });
  }

}
