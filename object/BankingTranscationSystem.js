// 1. Array of customer account details
const accounts = [
  { accountNumber: 1001, holderName: "Anand Kumar", balance: 5000 },
  { accountNumber: 1002, holderName: "Priya Sharma", balance: 3500 },
  { accountNumber: 1003, holderName: "Ravi Patel", balance: 10000 }
];

// 2. Function to find an account by account number
function findAccount(accNumber) {
  const account = accounts.find(acc => acc.accountNumber === accNumber);
  return account || " Account not found";
}

// 3. Function to deposit amount
function deposit(accNumber, amount) {
  const account = findAccount(accNumber);

  if (typeof account === "string") return account; // Account not found
  if (amount <= 0) return " Invalid deposit amount";

  account.balance += amount;
  return ` Deposited ₹${amount} to ${account.holderName}. New Balance: ₹${account.balance}`;
}

// 4. Function to withdraw amount
function withdraw(accNumber, amount) {
  const account = findAccount(accNumber);

  if (typeof account === "string") return account; // Account not found
  if (amount <= 0) return "Invalid withdrawal amount";
  if (amount > account.balance) return " Insufficient balance";

  account.balance -= amount;
  return ` Withdrawn ₹${amount} from ${account.holderName}. Remaining Balance: ₹${account.balance}`;
}

// 5. Function to check balance
function checkBalance(accNumber) {
  const account = findAccount(accNumber);

  if (typeof account === "string") return account;
  return ` ${account.holderName}'s Current Balance: ₹${account.balance}`;
}

// 6. Test the functions
console.log("----- TESTS START -----");
//console.log(checkBalance(1001)); // Initial balance


console.log(checkBalance(1001)); // Updated balance
console.log(checkBalance(1003)); // Updated balance
console.log(checkBalance(2222)); // Non-existent account

console.log("----- TESTS END -----");
