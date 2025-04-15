class BankAccount {
    constructor(ownerName, initialBalance) {
      this.ownerName = ownerName;
      this.balance = initialBalance;
      this.history = [];
    }
  
    deposit(amount) {
      this.balance += amount;
      this.history.push(`Deposited $${amount}`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        this.history.push(`Withdrew $${amount}`);
      } else {
        console.log("Insufficient funds");
      }
    }
  
    transferTo(anotherAccount, amount) {
      if (amount <= this.balance) {
        this.withdraw(amount);
        anotherAccount.deposit(amount);
        this.history.push(`Transferred $${amount} to ${anotherAccount.ownerName}`);
      } else {
        console.log("Transfer failed: Not enough balance.");
      }
    }
  
    getSummary() {
      return `${this.ownerName}'s balance is $${this.balance}`;
    }
  
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
