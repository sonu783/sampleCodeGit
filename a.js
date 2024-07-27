// q7: 
// Enter number of electricity units consumed and calculate amount to pay, based on the rules below
// For first 50 units, Rs: 1/unit
// For next 100 units, Rs.2/unit
// For next 100 units, Rs. 3/ units
// For units above 250, Rs.4/units
// For all bills above 150 rupees additional surcharge of 20% of total bill amount is added.


let units = 1000 // 50*1 + 100*2 + 10*3
let bill

if(units<=50){
   bill = units*1
}
else if(units>50 && units<=150){
    bill =  50*1 + (units-50)*2
}
else if(units>150 && units<=250){
      bill =  50*1  + 100*2 + (units-150)*3
}
else if(units>250){
     bill = 50*1 + 100*2 + 100*3 + (units-250)*4
}

if(bill>150){
    bill = bill + bill*20/100
}

console.log(bill)