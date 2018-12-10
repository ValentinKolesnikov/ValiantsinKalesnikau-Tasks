import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoService } from './todo.service';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	providers: [ToDoService]
})
export class AppModule { }