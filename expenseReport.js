// define the employee
const employee = {
    name: "Kelvin",
    email: "kelvin@gmail.com",
};

// define the expense report
let expenseReport = {
    amount: 950,
    status: null,
    submissionDate: null,
    submittedBy: null,
};

// create the submission logic
function submitExpense(report, employee) {
    // logging and checking amount
    console.log(`\n📝 Submitting expense report for ${employee.name}...`);
    console.log(`💵 Amount: €${report.amount}`);

    if (report.amount > 1000) {
        console.log("⚠️ Amount exceeds limit. Manager review required.");
        return;
    }

    // continue if valid
    report.status = "Pending"; // 🔧 FIX 1: should be status not 'valid'
    report.submissionDate = new Date(); // 🔧 FIX 2: capital 'D' in Date()
    report.submittedBy = employee;

    // final feedback
    console.log("✅ Expense submitted successfully!");
    console.log("📄 Report Details:");
    console.log(`- Status: ${report.status}`);
    console.log(`- Date: ${report.submissionDate}`);
    console.log(`- Submitted by: ${report.submittedBy.name}`);
}

// call the function
submitExpense(expenseReport, employee);
