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

for(student of students){
    if(student.marks>=85){
        continue;}
    else if(student.marks<60){
        break;}
    else{
    console.log("===================================");
    console.log(`Student ID: ${student.id}`);
    console.log(`Student Name: ${student.name}`);
    console.log(`Student Marks: ${student.marks}`);
    console.log(`Student Grade: ${student.grade}`);
    }
}