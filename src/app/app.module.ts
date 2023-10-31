import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './projects/projects.component';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    NavMenuComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    FetchDataComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: ContactComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'projects', component: ProjectComponent },
      { path: 'tools', component: ToolsComponent },
    ],
    {
      scrollPositionRestoration: 'top', // This line ensures scrolling to the top
      anchorScrolling: 'enabled',
      scrollOffset: [0, 0],
    })
  ],
  providers: [
//ScrollService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
