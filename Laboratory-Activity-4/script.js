function calc(){ //this function calculates for the income tax with user-input values
    mnth = parseFloat(document.getElementById('mnth').value); // gets the value of the monthly income
    dep = document.getElementById('dependents').value = parseInt(document.getElementById('dep').value); // gets the value of the number of dependents
    worker = document.getElementById('worker').value; // gets the choice of the user if the user is a government employee or not
    personalExempt = 50000; // sets the value of personal exemption and displays value
    personalExemptVal = document.getElementById('personal').value = personalExempt.toFixed(2);

    if (worker === 'y'){  // if user is a government worker, then calculate the value as follows
        var gsis = mnth * 0.09; // calculates for the GSIS deduction based on monthly income
        gsisVal = document.getElementById('gsisddct').value = gsis.toFixed(2);
        var philhealth = mnth * 0.035; // calculates for the PhilHealth deduction based on monthly income
        philhealthVal = document.getElementById('philhealthddct').value = philhealth.toFixed(2);
        var pagibig = mnth * 0.01375; // calculates for the PAG-IBIG deduction based on monthly income
        pagibigVal = document.getElementById('pagibigddct').value = pagibig.toFixed(2);
        if (dep <= 0){
            var apeval = 0; // if number of dependents is less than or equal to 0, then the value of APE is 0, optional but just in case
        }
        else if (dep > 4){
            var apeval = 200000; // if number of dependents is greater than 4, then the value of APE will always be 200,000
        }
        else if (dep >= 1 && dep <= 4){
            var apeval = dep * 50000; // if number of dependents is greater than or equal to 1 and is less than or equal to 4, then multiply 50000 by the number of dependents
        }
        apevalue = document.getElementById('ape').value = apeval.toFixed(2);
        grossIncome = (mnth * 12) + mnth; // monthly income times 12 (for 12 months) plus 1 months of monthly income for 13th month pay
        grossIncomeVal = document.getElementById('grossInc').value = grossIncome.toFixed(2);
        totalDeduct = personalExempt + apeval + (gsis * 12) + (philhealth * 12) + (pagibig * 12); // personal exemptions + ape + total GSIS deduction for 1 year + total PhilHealth deduction for 1 year + total PAG-IBIG deduction for 1 year
        totalDeductVal = document.getElementById('totalddct').value = totalDeduct.toFixed(2);
        taxIncome = grossIncome - totalDeduct; // gross income minus total deduction
        taxIncomeVal = document.getElementById('taxInc').value = taxIncome.toFixed(2);
    }
    
    else if (worker === 'n'){ // if user is not a government worker, then calculate the value as follows
        var sss = mnth * 0.11; // calculates for the SSS deduction based on monthly income
        sssVal = document.getElementById('sssddct').value = sss.toFixed(2);
        var philhealth = mnth * 0.035; // calculates for the PhilHealth deduction based on monthly income
        philhealthVal = document.getElementById('philhealthddct').value = philhealth.toFixed(2);
        var pagibig = mnth * 0.01375; // calculates for the PAG-IBIG deduction based on monthly income
        pagibigVal = document.getElementById('pagibigddct').value = pagibig.toFixed(2);
        if (dep <= 0){
            var apeval = 0; // if number of dependents is less than or equal to 0, then the value of APE is 0, optional but just in case
        }
        else if (dep > 4){
            var apeval = 200000; // if number of dependents is greater than 4, then the value of APE will always be 200,000
        }
        else if (dep >= 1 && dep <= 4){
            var apeval = dep * 50000; // if number of dependents is greater than or equal to 1 and is less than or equal to 4, then multiply 50000 by the number of dependents
        }
        apevalue = document.getElementById('ape').value = apeval.toFixed(2);
        grossIncome = (mnth * 12) + mnth; // monthly income times 12 (for 12 months) plus 1 months of monthly income for 13th month pay
        grossIncomeVal = document.getElementById('grossInc').value = grossIncome.toFixed(2);
        totalDeduct = document.getElementById('totalddct').value = personalExempt + apeval + (sss * 12) + (philhealth * 12) + (pagibig * 12); // personal exemptions + ape + total SSS deduction for 1 year + total PhilHealth deduction for 1 year + total PAG-IBIG deduction for 1 year
        totalDeductVal = document.getElementById('totalddct').value = totalDeduct.toFixed(2);
        taxIncome = document.getElementById('taxInc').value = grossIncome - totalDeduct; // gross income minus total deduction
        taxIncomeVal = document.getElementById('taxInc').value = taxIncome.toFixed(2);
    }
}

function taxPayableCalc(){
    if (taxIncome <= 250000){
        taxPayable = taxIncome * 0; // if net taxable income is less than 250000, then 0% payable tax
    }
    else if (taxIncome > 8000000){
        taxPayable = 2410000 + ((taxIncome - 8000000) * 0.35); // P2,410,000 + 35% of the excess over P8,000,000
    }
    else if (taxIncome >= 2000001 && taxIncome <= 8000000){
        taxPayable = 490000 + ((taxIncome - 2000000) * 0.32); // P490,000 + 32% of the excess over P2,000,000
    }
    else if (taxIncome >= 800001 && taxIncome <= 2000000){
        taxPayable = 130000 + ((taxIncome - 800000) * 0.30); // P130,000 + 30% of the excess over P800,000
    }
    else if (taxIncome >= 400001 && taxIncome <= 800000){
        taxPayable = 30000 + ((taxIncome - 400000) * 0.25); // P30,000 + 25% of the excess over P400,000
    }
    else if (taxIncome >= 250001 && taxIncome <= 400000){
        taxPayable = (taxIncome - 250000) * 0.20; // 20% of the excess over P250,000 
    }
    taxPayableVal = document.getElementById('taxPay').value = taxPayable.toFixed(2);
}

function reset(){ //reload as a reset function to set all data to zero
    window.location.reload();
}
