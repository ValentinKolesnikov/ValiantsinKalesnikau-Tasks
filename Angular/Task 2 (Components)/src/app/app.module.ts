import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ToDoService } from './todo.service';
import { NotFoundComponent } from './notfound.component';
import { HomeComponent } from './home.component';


const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
	declarations: [AppComponent, NotFoundComponent, HomeComponent],
	bootstrap: [AppComponent],
	providers: [ToDoService]
})
export class AppModule { }