import { Component, OnInit } from '@angular/core';
import { StudNameService }  from './service/studName.service';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
		<div>
      {{ profile | json }}
    </div>
    <stud [ipdata]="profile | json " ></stud>
    
`,
providers: [StudNameService]
})
export class AppComponent implements OnInit {
   name:any = 'Angular';
   profile = {};

constructor(private studnamenervice: StudNameService) {}

ngOnInit() {
  this.studnamenervice.getUser().subscribe(data => this.profile = data);
}

}
