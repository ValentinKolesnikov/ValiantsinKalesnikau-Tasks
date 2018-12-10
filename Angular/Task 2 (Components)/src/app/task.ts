export default class Task {
	header: string;
	description: string;
	isDone: boolean;
	static id: number;
	constructor(description: string, header: string) {
		this.description = description;
		Task.id++;
		this.header = header;
		this.isDone = false;
	}

}