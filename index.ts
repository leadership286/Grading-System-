let ObtainMarks = 640
let MaxMarks = 850
let Percentage = (ObtainMarks/MaxMarks*100)
console.log(Percentage)
if (Percentage>=90 && Percentage<100){
    console.log("Congratulations! Your Grade is A+1.")
}else if(Percentage>=80 && Percentage<89){
    console.log("Congratulations! Your Grade is A+.")
}else if(Percentage>=70 && Percentage<79){
    console.log("Good Job! Your Grade is A.")
}else if(Percentage>=60 && Percentage<69){
    console.log("Keep It Up! Your Grade is B.")
}else if(Percentage>=50 && Percentage<59){
    console.log("Need to Work Hard! Your Grade is C.")
}else if (Percentage>=40 && Percentage<49){
    console.log("You are Passed")
}else{
    console.log("You are Fail")
}
