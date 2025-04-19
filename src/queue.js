// A Queue is a linear data structure that follows the FIFO (First In, First Out) principle.
// Elements are inserted at the rear and removed from the front.

class Queue {
    constructor() {
        this.items = [];
    }

    // Constant time to add an element.
    enqueue(element) {
        this.items.push(element);
    }

    // Linear time due to shifting elements.
    dequeue() {
        return this.isEmpty() ? "Queue is empty" : this.items.shift();
    }

    // Constant time to access the first element.
    peek() {
        return this.isEmpty() ? "Queue is empty" : this.items[0];
    }

    // Constant time to check if the array is empty.
    isEmpty() {
        return this.items.length === 0;
    }

    // Constant time to return the size.
    size() {
        return this.items.length;
    }

    // Linear time to join and print elements.
    print() {
        console.log(this.items.join(" -> "));
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());

// Queue practical simple example in Customer Service System.
class CustomerSupportQueue {
    constructor() {
        this.customers = [];
    }

    joinQueue(customerName) {
        console.log(`${customerName} joined the support queue.`);
        this.customers.push(customerName);
    }

    serveCustomer() {
        if (this.isEmpty()) {
            console.log("No customers to serve.");
        } else {
            const customer = this.customers.shift();
            console.log(`Serving ${customer}...`);
        }
    }

    isEmpty() {
        return this.customers.length === 0;
    }

    showQueue() {
        console.log("Current queue:", this.customers.join(" -> "));
    }
}

// Example Usage:
const supportQueue = new CustomerSupportQueue();

supportQueue.joinQueue("Alice");
supportQueue.joinQueue("Bob");
supportQueue.joinQueue("Charlie");

supportQueue.showQueue();    // Alice -> Bob -> Charlie

supportQueue.serveCustomer();  // Serving Alice
supportQueue.serveCustomer();  // Serving Bob

supportQueue.showQueue();      // Charlie
