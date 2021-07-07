const students = [];

students[0] = {
	name: 'Vasya',
	class: 6,
	mark: 3
};

students[1] = {
    name: 'Kolya',
	class: 5,
	mark: 3 
};

students[2] = {
    name: 'Olya',
	class: 5,
	mark: 4
};

students[3] = {
    name: 'Varya',
	class: 4,
	mark: 5
};

students[4] = {
	name: 'Vlad',
	class: 8,
	mark: 5,
};

students [5] = {
	name: 'Oleg',
	class: 9,
	mark: 2,
};

students[5] = {
    name: 'Anya',
	class: 2,
	mark: 5,
};

students[6] = {
    name: 'Alice',
	class: 2,
	mark: 3,
};

console.log("----------Первая задача-----------");

console.log(findAverageMark());

function findAverageMark() {
    let sum = 0, result;
    students.reduce((prev, item) => {
        sum += item.mark;
    }, 0);
    result = sum / students.length;
	return result.toFixed(2);
}

console.log("----------Вторая задача-----------");

findAverageClassMark();

function findAverageClassMark() {
	students.sort((a, b) => a.class > b.class ? 1 : -1);
	let schoolClass, sum, result;
    for (let i = 0; i < students.length; i++) {
		schoolClass = students.filter(student => student.class == students[i].class);
		sum = schoolClass.reduce((prev, current)=> {
			return prev + current.mark;
		}, 0);
		result = sum / schoolClass.length;
		if (students[i].class == 2) {
			console.log(`Средний балл во ${students[i].class}-ом классе – ${result} `);
		} else {
			console.log(`Средний балл в ${students[i].class}-ом классе – ${result} `);
		}
	}
}


console.log("----------Третья задача-----------");

findTopFive();

function findTopFive() {
	let topFive = [];
	topFive = students.sort((a, b) => a.name < b.name ? 1 : -1);
	topFive.sort((a,b) => a.mark < b.mark ? 1 : -1);
	topFive = topFive.slice(0, 5);
	console.log(`ТОП-5 Учеников: `);
	topFive.forEach(student => {
		console.log(`${student.name}, оценка – ${student.mark}`);
	});
}

