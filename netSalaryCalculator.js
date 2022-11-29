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




