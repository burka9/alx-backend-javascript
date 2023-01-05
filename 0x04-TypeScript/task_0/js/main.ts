interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
};

const student1: Student = {
	firstName: 'Student 1',
	lastName: 'Last name',
	age: 10,
	location: 'Here'
};

const student2: Student = {
	firstName: 'Student 2',
	lastName: 'Last name',
	age: 10,
	location: 'Here'
};

const studentList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');

studentList.forEach((student: Student) => {
	const tr: HTMLTableRowElement = document.createElement('tr');

	const nameRow: HTMLTableCellElement = document.createElement('td');
	nameRow.innerText = student.firstName;

	const locationRow: HTMLTableCellElement = document.createElement('td');
	nameRow.innerText = student.firstName;

	tr.append(nameRow, locationRow);
	table.appendChild(tr);
});
