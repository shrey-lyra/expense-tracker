// DOM Elements
const balance = document.getElementById('balance');M

const income = document.getElementById('income');
const expense = document.getElementById('expense');
const list = document.getElementById('list');
const form = document.getElementById('transaction-form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// Transaction State
let transactions = [];

// Add Transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please add a description and amount');
    return;
  }

  const transaction = {
    id: generateID(),
    text: text.value,
    amount: +amount.value
  };

  transactions.push(transaction);
  addTransactionDOM(transaction);
  updateValues();

  // Clear inputs
  text.value = '';
  amount.value = '';
}

// Generate Random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

// Add Transactions to DOM List
function addTransactionDOM(transaction) {
  // Get sign
  const sign = transaction.amount < 0 ? '-'Normally I can help with things like this, but I don't seem to have access to that content. You can try again or ask me for something else.
