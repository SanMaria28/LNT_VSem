var marks = parseInt(prompt("Enter your marks: "));

if(marks>=80 && marks<=100){
    document.write("Grade: A");
}
else if(marks>=70 && marks<80){
    document.write("Grade: B");
}       
else if(marks>=60 && marks<70){
    document.write("Grade: C");
}
else if(marks>=50 && marks<60){
    document.write("Grade: D");
}
else {
    document.write("Grade: F");
}