import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';

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
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
//ScrollService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
