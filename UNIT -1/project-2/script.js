function displayProfile(){

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let marks = Number(document.getElementById("marks").value);

    if(name==="" || roll==="" || marks===""){
        alert("Please fill all the fields.");
        return;
    }

    if(marks < 0 || marks > 100){
        alert("Marks should be between 0 and 100.");
        return;
    }

    let grade;

    if(marks >= 90){
        grade = "A+";
    }
    else if(marks >= 80){
        grade = "A";
    }
    else if(marks >= 70){
        grade = "B";
    }
    else if(marks >= 60){
        grade = "C";
    }
    else if(marks >= 50){
        grade = "D";
    }
    else{
        grade = "F";
    }

    document.getElementById("studentName").innerHTML = name;
    document.getElementById("studentRoll").innerHTML = roll;
    document.getElementById("studentMarks").innerHTML = marks;
    document.getElementById("studentGrade").innerHTML = grade;

    document.getElementById("profileCard").style.display = "block";
}