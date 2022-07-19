let student = [{ id: 1, name: "Heinz" },
    { id: 2, name: "John" },
    { id: 3, name: "Michael" }];
function getAlltudent() {
    console.log(student);
}
function findStudent(ids, name) {
    student[ids] = { id: ids, name: name };
    console.log(student[ids]);
}
function addStudent() {
}
getAlltudent();
findStudent(0, 'David');
getAlltudent();
addStudent();
