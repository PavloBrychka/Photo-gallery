import { Component } from '@angular/core';
import { Comp0Component } from './comp0/comp0.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  // template: `<div> 
// 
  // </div>`
})
export class AppComponent {
  title = 'an_app_0_Ekz';
  public pagenow = ["/comp0", "/comp1", "/comp2", "/comp3", "/comp4"];
  public page = '';
  public x = 0;
   pages() 
  {
    for(let i =0; i < this.pagenow.length;i++)
    {
      if(this.x + 1 == this.pagenow.length)
      {
        this.x = 0;
      }
      else{

        this.x++;
        // let str = this.pagenow[i];
        this.page = this.pagenow[i];
      }
    }
    // this.pagenow = Comp0Component;
  }
}
