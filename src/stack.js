// This means that the last element added to the stack will be the first one to be removed.
// Stack follows LIFO (Last In, First Out) principle.
class Stack {
    constructor() {
        this.items = [];
    }
    
    // Push operation
    push(element) {
        this.items.push(element);
    }

    // Pop operation
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek operation
    peek() {
        if (this.isEmpty) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // isEmpty operation
    isEmpty() {
        return this.items.length === 0;
    }

    // Size operation
    size() {
        return this.items.length;
    }

    // Print the stack
    print() {
        console.log(this.items)
    }
}

// Example Usage
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
stack.print();

// User Level Workflow (Session Management)
// When a customer navigates through various banking functions (balance → payment → loans → exit), these
// movements are stored as a navigation stack.
// The customer can "back" the transaction if they wish. For example, back to the balance page.

// Think of it as a simple banking example:
class BankTransactionHistory {
    constructor() {
        this.transactionStack = [];
    }

    addTransaction(transaction) {
        this.transactionStack.push(transaction);
        console.log(`Operation added: ${transaction}`);
    }

    undoTransaction() {
        if (this.transactionStack.length === 0) {
            console.log("There is no undo operation!")
            return;
        }
        const lastTransaction = this.transactionStack.pop();
        console.log(`The operation was returned: ${lastTransaction}`);
    }
}

// To use
const account = new BankTransactionHistory();

account.addTransaction("50₼ removed from balance");
account.addTransaction("200₼ added from balance");
account.addTransaction("30₼ transferred to another card");

account.undoTransaction();  // The last transfer is undone