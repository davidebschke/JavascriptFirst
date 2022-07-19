let student: { id: number, name: string }[] =
  [{id: 1, name: "Heinz"},
    {id: 2, name: "John"},
    {id: 3, name: "Michaeal"}]


function getAllstudent() {
  console.log(student);
}


function findStudent(ids,name) {


  student[ids] = {id: ids, name: name}
  console.log(student[ids])


}

function addStudent() {


}

getAllstudent();
findStudent(0,'David');
getAllstudent();
addStudent();


