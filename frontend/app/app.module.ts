import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home';
import { LoginComponent } from './login/login';
import { addComponentComponent } from './addComponent/addComponent';
import { InventoryService } from './services/inventory.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent,
    addComponentComponent
  ],
  providers: [
    InventoryService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}