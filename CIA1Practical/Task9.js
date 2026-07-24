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
        marks:82,
        grade: "C"
    },
    {
        id:104,
        name:"Meera",
        marks:50,
        grade: "D"
    },
    {
        id:105,
        name:"David",
        marks:95,
        grade: "A"
    }
];

students.pop();
console.log("After removing last student details:");
for(student of students){
    console.log("===================================");
    console.log(`Student ID: ${student.id}`);
    console.log(`Student Name: ${student.name}`);
    console.log(`Student Marks: ${student.marks}`);
    console.log(`Student Grade: ${student.grade}`);
}

students.sort((a, b) => b.marks - a.marks);
console.log("Highest to Lowest in terms of marks:");
for(student of students){
    console.log(`Student ID: ${student.id}, Name: ${student.name}, Marks: ${student.marks}`);
}
