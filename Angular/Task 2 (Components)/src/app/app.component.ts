import { Component } from '@angular/core';
import Task from './task';
import { ToDoService } from './todo.service';

@Component({
	selector: 'to-do',
	templateUrl: './app.component.html'
})
export class AppComponent {
	constructor(private _toDoService: ToDoService){

	}
	tasks: Task[] = this._toDoService.GetAll();

	addTask(text:string, header:string):void{
		if(text === '' || header === '')
			return;
			
		this._toDoService.AddTask(header, text);
	}
	
}



