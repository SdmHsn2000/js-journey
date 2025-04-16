class BankAccount {
    // Time Complexity: O(1)
    // Just initializing values
    constructor(ownerName, initialBalance) {
      this.ownerName = ownerName;
      this.balance = initialBalance;
      this.history = [];
    }
  
    // Time Complexity: O(1)
    // Adds amount and pushes a string to the history array
    deposit(amount) {
      this.balance += amount;
      this.history.push(`Deposited $${amount}`);
    }
  
    // Time Complexity: O(1)
    // Subtracts amount and logs it, simple operations
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        this.history.push(`Withdrew $${amount}`);
      } else {
        console.log("Insufficient funds");
      }
    }
  
    // Time Complexity: O(1)
    // Calls deposit and withdraw which are both O(1)
    transferTo(anotherAccount, amount) {
      if (amount <= this.balance) {
        this.withdraw(amount);
        anotherAccount.deposit(amount);
        this.history.push(`Transferred $${amount} to ${anotherAccount.ownerName}`);
      } else {
        console.log("Transfer failed: Not enough balance.");
      }
    }
  
    // Time Complexity: O(1)
    // Just returns a formatted string
    getSummary() {
      return `${this.ownerName}'s balance is $${this.balance}`;
    }
  
    // Time Complexity: O(k)
    // k = number of entries in the history array
    printHistory() {
      console.log(`${this.ownerName}'s Transaction History:`);
      this.history.forEach(entry => console.log(entry));
    }
  }

  
    const acc1 = new BankAccount("John", 500);
    const acc2 = new BankAccount("Sara", 300);

    acc1.transferTo(acc2, 200);
    console.log(acc1.getSummary());
    console.log(acc2.getSummary());

    acc1.printHistory();
