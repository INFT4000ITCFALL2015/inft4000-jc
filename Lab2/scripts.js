/**
 * Created by inet2005 on 10/7/15.
 */

var studentIdArray = [];

function addStudent(first_name, last_name, student_id) {

    if (studentIdArray.length == 0) {

        function student() {
            var student = {
                fName: first_name,
                lName: last_name,
                studentId: student_id
            };

            studentIdArray.push(student_id);

            this.report = function () {
                return this.fName + " " + this.lName + " " + this.studentId;
            };
        }
    }else if(studentIdArray.length != 0){
        
        for (var i = 0; i <= studentIdArray.length; i++) {

        if (studentIdArray[i] == student_id) {
            alert("No good, This Id is already in use")
        } else {
            student()
        }
    }
    }
}