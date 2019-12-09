

const greet = () => {
    console.log('Hello world!');
}

greet();

class Student {
    constructor() {
        this.name = "Sujan",
        this.age = 21,
        this.branch = 'MCA@MIT'
        this.id = '19097004'
    }
    grtStudentInfo() {
        console.log('Name: ', this.name);
        console.log('Branch: ', this.branch);
        console.log('Id: ', this.id);
    }
}