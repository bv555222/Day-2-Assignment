//----------Table of 5 Using For loop----------

 console.log("Table of 5");
 for(let i = 1;i<=10;i++)
{   
    let mult = 5;
    let res = mult*i;    
    console.log("5","*",i,"=",res);
}

//2 Question 
console.log("Display grade based on percentage")

let sub1 = 40; //90+ = O grade, 80> && <90 = A grade,70> && <80 = B grade, 60> && <70 = C grade.
let sub2 = 50;
let sub3 = 46;
let sub4 = 50;
let sub5 = 35;
let total_Marks = 250;
let obtained_Marks = (sub1+sub2+sub3+sub4+sub5);

let percentage = (obtained_Marks/total_Marks)*100;
if(percentage > 90){
    console.log("You scored O Grade")
}
else if(percentage > 80 && percentage<90)
{
    console.log("You scored A Grade")
}
else if(percentage > 70 && percentage<80)
{
    console.log("You scored B Grade")  
}
else if(percentage > 60 && percentage<70)
{
    console.log("You scored C Grade")  
}


