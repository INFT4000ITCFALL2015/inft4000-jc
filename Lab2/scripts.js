///**
// * Created by inet2005 on 10/7/15.
// */
//
var students = [];

function Student(first_name, last_name, student_id) {
    this.fName = first_name;
    this.lName = last_name;
    this.studentId = student_id;
    this.report = function(){
        return this.fName + " " + this.lName + " " +this.studentId;
    };
}

function addStudent() {
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var studentId = document.getElementById("studentId").value;
//
//    //alert(fName);
//    //alert(lName);
//    //alert(studentId);
//
    var newStudent = new Student(fName, lName, studentId);

    students.push(newStudent);

    document.getElementById("list").innerHTML = "";
//
    for (var i = 0; i < students.length; i++) {
        var newLi = document.createElement("li");
        var text = document.createTextNode(students[i].report());
        var list = document.getElementById("list");
        newLi.appendChild(text);
        list.appendChild(newLi);
    }
//
   document.getElementById("firstName").value = null;
   document.getElementById("lastName").value = null;
    document.getElementById("studentId").value = null;
}

document.getElementById("submit").addEventListener("click",function(){
    if(students.length == 0) {
        addStudent();
    }else{
        var found = false;
        var idFromArray = 0;
        for(var x = 0; x < students.length; x++){
            var idFromForm = document.getElementById("studentId");
            idFromArray = students[x].studentId;
            if(idFromArray == idFromForm){
                alert("This Id Is Taken");
                found = true;
                break;
            }
        }
        if (found == false){
            addStudent();
        }
    }
});