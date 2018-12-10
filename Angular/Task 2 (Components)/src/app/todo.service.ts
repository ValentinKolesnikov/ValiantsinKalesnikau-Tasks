import Task from './task';

export class ToDoService{
	private tasks: Task[] = [];

	public GetAll(){
		return this.tasks;
	}
	public AddTask(header: string, descr: string){
		this.tasks.push(new Task(descr, header));
	}
	
}

