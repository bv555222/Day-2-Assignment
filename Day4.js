var students = [
        {
            name:"Micky",
            age:15,
            class:'A',
            roll_no:1
        },
        {
            name:"Pinky",
            age:13,
            class:'E',
            roll_no:2
        },
        {
            name:"Jessy",
            age:16, 
            class:'D',
            roll_no:3
        },
        {
            name:"James",
            age:19,
            class:'B',
            roll_no:4
            
        },
        {
            name:"john",
            age:12,
            class:'C',
            roll_no:5
        },

]

//Printing properies of strudent object using for loop
console.log("Name","age");
for(var i=0;i<students.length;i++){
    
    console.log(students[i].name,students[i].age);
    
}

//Printing properies of strudent object using foreach loop

students.forEach(function(name){
    console.log(name);
})