let students =[
    {
        id:101,
        name:"Samuel Johnson",
        percentage:85,
        grade: "A"
    },
    {
        id:102,
        name:"Lily",
        percentage:75,
        grade: "B"
    },
    {
        id:103,
        name:"Dino",
        percentage:68,
        grade: "C"
    },
    {
        id:104,
        name:"Meera",
        percentage:50,
        grade: "D"
    }
];

for(student of students){
    console.log("===================================");
    console.log(`Student ID: ${student.id}`);
    console.log(`Student Name: ${student.name}`);
    console.log(`Student Percentage: ${student.percentage}`);
    console.log(`Student Grade: ${student.grade}`);
}