let students =[
    {
        id:101,
        name:"Samuel Johnson",
        marks:85,
        grade: "A"
    },
    {
        id:102,
        name:"Lily",
        marks:75,
        grade: "B"
    },
    {
        id:103,
        name:"Dino",
        marks:68,
        grade: "C"
    },
    {
        id:104,
        name:"Meera",
        marks:50,
        grade: "D"
    }
];

students.push({
    id:105,
    name:"David",
    marks:95,
    grade:"A"
});
console.log("After adding new student details:");
let maxMarks =0;
for(student of students){
    console.log(`Student ID: ${student.id}`);
    console.log(`Student Name: ${student.name}`);
    console.log(`Student Marks: ${student.marks}`);
    console.log(`Student Grade: ${student.grade}`);
    console.log("===================================");
    if(student.marks>maxMarks){
        maxMarks=student.marks;
    }

}
console.log("The Highest Marks: "+maxMarks);