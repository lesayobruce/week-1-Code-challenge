In this functin, the student is asked to input the max they scored, afterwards the marks is converted into grades from A to the least being  E
function gradeGenerator(){
    let studentMarks = prompt("Input Your Marks");
    console.log("Student  Marks is:" + studentMarks);
    // 100 - 79 > Grade A
    //78 - 60 => Grade B
    //59 - 49 => Grade C
    //48- 40 => Grade D
    //39 - 0 => Grade E 

if(studentMarks > 79){
    return `A`
}else if (studentMarks >= 60){
    return `B`
}else if (studentMarks >=49){
    return`C`
}else if (studentMarks >=40){
    return`D`
}else if (studentMarks <=39){
    return`E`
}else {
    console.log("Invalid student's mark");
}  
}

gradeGenerator();



In this function, the user inputs his salary and benefits they are entitled and inturn the net tax is calculated with respect to the Kenya Revenue Authority's tax rates
function netSalaryCalculator(){
//Input prompt basic salary together with benefits one is entitled to
let basicSalary = prompt("Input Your Basic Salary");
let benefits = prompt("Input Benefits Given");

//calculate the gross salary by adding the basic salary together with the benefits given
let grossSalary =parseInt(basicSalary)+ parseInt(benefits);
console.log("grossSalary:" + grossSalary);

//calculate the NSSF Deduction where it is 6% of the pension
let pension = 6000;
letnssfDeduction = pension* 0.06;
console.log("NSSF:" + nssfDEduction);

//calculating gross task which is tax charged per slab
if(grossSalary >0 && grossSalary <= 24000){
    grossTax = 24000 * 0.1;
}else if(grossSalary > 24000 && grossSalary <= 323333){
    grossTax = (32333 - 24000)*0.25;
}else if (grossSalary >32333){
    grossTax = (grossSalary - 32333)*0.3;
}
console.log("grossTax:" + grossTax)

//calculating the PAYE which is gross tax less personal relief
if(relief = 2400){
    PAYE = grossTax - relief
}
console.log("PAYE:" + PAYE);

//calculating NHIF deduction
if(grossSalary>0 && grossSalary <=5999){
    NHIFDeduction = 150;
}else if(grossSalary >59999 && grossSalary <=7999){
    NHIFDeduction = 300;
}else if(grossSalary>7999 && grossSalary <=11999){
    NHIFDeduction = 400;
}else if(grossSalary>11999 && grossSalary <=14999){
    NHIFDeduction = 500;
}else if(grossSalary>1499 && grossSalary <=19999 ){
    NHIFDeductio = 600;
}else if (grossSalary>19999 && grossSalary <=24999){
    NHIFDeduction = 750;
}else if (grossSalary>24999 && grossSalary <= 29999){
    NHIFDeduction = 850;
}else if(grossSalary>29999 && grossSalary <=34999){
    NHIFDeduction = 900;
}else if (grossSalary>34999 && grossSalary <= 39999){
    NHIFDeduction = 950;
}else if(grossSalary>39999 && grossSalary <=44999){
    NHIFDeduction =1000;
}else if(grossSalary>44999 && grossSalary <=54999){
    NHIFDeduction = 1100;
}else if(grossSalary>54999 && grossSalary <= 59999){
    NHIFDeduction = 1200;
}else if(grossSalary>59999 && grossSalary <=69999){
    NHIFDeduction = 1300;
}else if(grossSalary>69999 && grossSalary <= 79999){
    NHIFDeduction = 1400;
}else if (grossSalary>79999 && grossSalary <=89999){
    NHIFDeduction = 1500;
}else if(grossSalary>89999 && grossSalary <= 99999){
    NHIFDEduction =1600;
}else if(grossSalary>99999){
    NHIFDeduction = 1700;
}
console.log("NHIF:" + NHIFDeductions);

//calculating the net salary
let netSalary = grossSalary - (PAYE + NHIFDEduction + nssfDeduction);
console.log("NetSalary:" + netSalary);
}
netSalaryCalculator()




Inthis function, a driver inputs the vehicle's speed if the speed exceeds 70, the driver gets one demerit. If the driver exceeds the speed to 80 kms per second the driver's license is suspended

// Speed Detector
function speedDetector(){
    let speed = prompt("Input speed of car");
    if (speed <=70){
        console.log("ok");
    } else if(speed>70){
        let points =(speed -70)/5;
        if(points <=12){
            console.log(`points :${points}`);
        }else if (points > 12){
            console.log("License suspended");
        }
    }
}
speedDetector()

CONCLUSION
This is how I have tackled the Friday's code challenge.