import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template:`
  // <main>
  //     <div>
  //     <h1>
  //     FastBarter
  //     </h1>
  //     </div>
  //     <router-outlet></router-outlet>            
  // </main> 
  // `
  template: `
    <nb-layout>
    
      <nb-layout-header fixed>
      <!-- Insert header here -->
      </nb-layout-header>
    
      <nb-layout-column>
    
    
    
      <nb-layout>
        <nb-layout-header fixed>Company Name</nb-layout-header>
    
    
    
        <nb-layout-column>
          Page Content <button nbButton>Hello World</button>
          <button nbButton>Testt</button>
          <router-outlet></router-outlet>  
        </nb-layout-column>
      </nb-layout>
    
      </nb-layout-column>
    
      <nb-layout-footer fixed>
      <!-- Insert footer here -->
      </nb-layout-footer>
    
    </nb-layout>
`
})
export class AppComponent {
  title = 'fastbarter';
}
