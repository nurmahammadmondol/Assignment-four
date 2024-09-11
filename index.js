// Problem-01 : Tax Calculator

function calculateTax(income, expenses) {
  if (0 > income || 0 > expenses || income < expenses) {
    return 'Invalid Input';
  } else if (income === expenses) {
    return 0;
  }

  const difference = income - expenses;
  const Tax = (difference * 20) / 100;

  return Tax;
}

// const incomeTK = 34000;
// const expensesTK = 1753;
const result = calculateTax(10000, 3000);
console.log(result);
