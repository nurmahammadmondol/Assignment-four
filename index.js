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

const incomeTK = 10000;
const expensesTK = 3000;
const result = calculateTax(incomeTK, expensesTK);
console.log(result);

// ***************
// ***************
// ***************
// ***************
// ***************

// Problem 02 : Notification Generator

function sendNotification(email) {
  if (email.includes('@') === false) {
    return 'Invalid Email';
  }

  const splitUp = email.split('@');

  const userName = splitUp[0];
  const domainName = splitUp[1];

  const notification = userName + ' sent you an email from ' + domainName;

  return notification;
}

const email_name = 'nurmahammad@gmail.com';
const email_name2 = 'nmrobi@gmail.com';

console.log(sendNotification(email_name));
console.log(sendNotification(email_name2));

// ***************
// ***************
// ***************
// ***************
// ***************

// Problem-03: Checking Digits Inside a Name

function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return 'Invalid Input';
  }

  for (let Check of name) {
    if (Check >= '0' && Check <= '9') {
      return true;
    }
  }

  return false;
}

const check_name = checkDigitsInName('Robi123');
console.log(check_name);

// ***************
// ***************
// ***************
// ***************
// ***************

// Problem 04 : Calculate Admission Final Score

function calculateFinalScore(obj) {
  if (typeof obj !== 'object') {
    return 'Invalid Input';
  }

  const testScore = obj.testScore;
  const schoolGrade = obj.schoolGrade;
  if (obj.isFFamily === true) {
    isFFamily = 20;
  } else {
    isFFamily = 0;
  }

  const final_score = testScore + schoolGrade + isFFamily;

  if (final_score >= 80) {
    return true;
  } else {
    return false;
  }
}

const info = { name: 'Rajib', testScore: 45, schoolGrade: 25, isFFamily: true };
const results = calculateFinalScore(info);
console.log(results);
