import { 
  Component, 
  Input,
  OnChanges 
} from '@angular/core';

@Component({
  selector: 'stud',
  template: `
  <div>
  <hr><p>{{data|json}} </p>
  {{data?.profile?.username}}
  </div>
  `
})
export class Stud implements OnChanges{ 
  @Input() 
  ipdata: any;

  private data:any;

 ngOnChanges(changes:any):void {
  this.data = JSON.parse(changes.ipdata.currentValue);
  console.log(this.data);
}

}
