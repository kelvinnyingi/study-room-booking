//define the employee
const employee = {
    name: "kelvin",
    email: "kelvin@gmail.com",
};

//define the expense report
let expenseReport = {
    amount: 950,
    status: null,
    submissionDate: null,
    submittedBy: null,
};

//create the submission logic 

function submitExpense(report, employee) {
    //logging and checking amount
    console.log(`\n submitting expense report for ${employee.name}...`);
    console.log(`Amount: €${report.amount}`);
    if (report.amount > 1000) {
        console.log("Amount exceeds limit. Manager review required.");
        return;
    }
    //continue if valid

    report.statusz = "pending";
    report.submissionDate = newDate();
    report.submittedBy = employee;

    //final feedback
    console .log("expense submitted succesfully");
    console.log("📄 Report Details:");
  console.log(`- Status: ${report.status}`);
  console.log(`- Date: ${report.submissionDate}`);
  console.log(`- Submitted by: ${report.submittedBy.name}`);


    }
    //call the function
    submitExpense(expenseReport, employee);
