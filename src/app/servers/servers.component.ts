import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server><app-server></app-server>',
  // template: `
  // new
  // <app-server></app-server>
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  serverCreated: boolean = false;
  serverName: string = 'Test Server';
  userName: string = '';
  servers = ['Testserver', 'Testserver 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClearUserName() {
    this.userName = '';
  }

}
