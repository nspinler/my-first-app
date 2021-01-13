import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  name = '';
  displayAppServers:boolean = false;
  displayAlerts:boolean = false;
  displayCh2Assignment3:boolean = false;

  onToggleDisplay(name: string) {
    console.log('got name: %s', name);

    if(name==='app-servers'){
      this.displayAppServers = !this.displayAppServers;
    }
    else if(name==='app-alerts') {
      this.displayAlerts = !this.displayAlerts;
    }
    else if(name==='app-ch2-assignment3') {
      this.displayCh2Assignment3 = !this.displayCh2Assignment3;
    }
  }
}
