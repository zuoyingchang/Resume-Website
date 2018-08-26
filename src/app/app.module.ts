import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { HeaderComponent} from './header.component';
import { BodyComponent} from './body.component';
import { WorkComponent} from './work.component';
import { ProjectComponent} from './project.component';

import { AppComponent } from './app.component';




const appRoutes: Routes = [
  { path: 'work', component: WorkComponent },
  { path: 'project', component: ProjectComponent },
  
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, BodyComponent, WorkComponent, ProjectComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
      
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


