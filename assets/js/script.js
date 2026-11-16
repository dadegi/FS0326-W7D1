const studentList = document.querySelector('#studentList');
const registerForm = document.querySelector('form');
const newName = document.querySelector('#newName');
const newSurname = document.querySelector('#newSurname');
const newAge = document.querySelector('#newAge');
const newFrequency = document.querySelector('#newFrequency');

const newStudents = [];

class Student {
	constructor(
		_studentID,
		_studentName,
		_studentSurname,
		_studentAge,
		_frequency,
	) {
		this.studentId = _studentID;
		this.studentName = _studentName;
		this.studentSurname = _studentSurname;
		this.studentAge = _studentAge;
		if (_frequency === 'true') {
			this.frequency = true;
		} else {
			this.frequency = false;
		}
	}

	printStudent() {
		const isFrequency = this.frequency ? 'Sì' : 'No';
		const newLi = document.createElement('li');
		newLi.textContent += `Student ${this.studentName} ${this.studentSurname} di anni ${this.studentAge}, frequentante: ${isFrequency}, ID studente: ${this.studentId}`;
		studentList.appendChild(newLi);
	}
}

registerForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const newStudent = new Student(
		crypto.randomUUID(),
		newName.value,
		newSurname.value,
		newAge.value,
		newFrequency.value,
	);
	console.log(newStudent);
	newStudent.printStudent();
	newStudents.push(newStudent);
	registerForm.reset();
    console.log(newStudents);
});

class Person {
	personNumber = 0;
	constructor(_name, _surname) {
		this.name = _name;
		this.surname = _surname;
	}

	regards() {
		this.personNumber++;
		return `Ciao, sono ${this.name} ${this.surname} e sono l'iscritto numero ${this.personNumber}`;
	}
}

const newPerson = new Person('Paolino', 'Paperino');
console.log(newPerson.regards());

newPerson.name = 'Mario';
console.log(newPerson.regards());

const otherPerson = new Person('Aldo', 'Bianchi');
console.log(newPerson.regards());
console.log(otherPerson.regards());

console.log(newPerson);
console.log(Person);
