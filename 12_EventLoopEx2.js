console.log("First")
setTimeout(() => {
    console.log('second')
}, 0);
console.log('third')

/*
    3️⃣ Line-by-Line Explanation (Very Easy)
🔹 Line 1
console.log("First");


Synchronous

Runs immediately

✅ Output:

First

🔹 Line 2
setTimeout(() => {
    console.log('second');
}, 0);


Asynchronous

Timer is handled by Web APIs / Node Timers

Callback is registered, NOT executed now

0 ms means minimum delay, not instant execution

🚫 No output yet

🔹 Line 3
console.log('third');


Synchronous

Runs immediately

✅ Output:

third

4️⃣ Event Loop — Step-by-Step (Simple Language)
🧠 Think of Node.js like this:

Call Stack → Executes code

Timer Queue → Holds setTimeout callbacks

Event Loop → Moves callbacks when stack is empty

🔁 Step 1: Call Stack starts
Call Stack:
console.log("First")


✔ Output:

First

🔁 Step 2: setTimeout() encountered
Call Stack:
setTimeout(...)


Timer starts (0 ms)

Callback goes to Timer Queue

Stack becomes free

🚫 No output

🔁 Step 3: Next sync code runs
Call Stack:
console.log("third")


✔ Output:

third

🔁 Step 4: Call Stack is empty

Now Event Loop checks queues

Timer Queue:
console.log("second")


Event Loop moves callback to Call Stack

🔁 Step 5: Callback executes
Call Stack:
console.log("second")


✔ Output:

second

5️⃣ Visual Diagram (Easy to Remember)
Call Stack        Timer Queue
-----------       ------------
First
setTimeout   →    second
third

(Event Loop waits until stack is empty)

6️⃣ Why setTimeout(..., 0) is NOT instant?

Because:

JS must finish all synchronous code first

Event Loop runs callbacks only when stack is empty

📌 Rule:

Asynchronous callbacks never interrupt synchronous code.

7️⃣ One-Line Interview Answer

"setTimeout with 0 ms delay still executes after synchronous code because its callback is queued and executed by the event loop only when the call stack becomes empty."

8️⃣ Golden Rule to Remember 🧠
*/


/*

    what is callback queue and resigster ?
    1️⃣ What is a Callback? (1-line reminder)

A callback is a function that is given to another function and is called later, after some work finishes.

Example:

setTimeout(() => {
  console.log("Hello");
}, 1000);


The arrow function is a callback.

2️⃣ What is a Callback Queue? (Very Easy)
👉 Simple meaning

The callback queue is a waiting line for callbacks that are ready to run, but cannot run yet.

📌 They wait because:

JavaScript is busy

Call Stack is not empty

🧠 Real-life example

Think of a ticket counter:

Call Stack → The counter (only one person at a time)

Callback Queue → People waiting in line

Event Loop → The guard who calls next person

🔹 Example
setTimeout(() => {
  console.log("second");
}, 0);


Timer finishes

Callback is placed into Callback Queue

It waits there until stack is empty

3️⃣ Types of Callback Queues (Important)
1️⃣ Macrotask Queue (Callback Queue)

Holds callbacks from:

setTimeout

setInterval

I/O operations

setImmediate

📌 Your setTimeout callback goes here.

2️⃣ Microtask Queue (Higher priority)

Holds callbacks from:

Promise.then

queueMicrotask

MutationObserver

📌 Microtasks run before macrotasks.

4️⃣ What does Register mean? (Very Important)
👉 Simple meaning

To register means:

“Tell JavaScript: Hey, run this function later when the time is right.”

🔹 In code
setTimeout(callback, 0);


When this line runs:

JS does NOT run the callback

It registers the callback with the timer system

Stores:

the function

the delay

🔁 Another example
readFile("file.txt", callback);


Here:

Callback is registered

Node.js promises to call it after file reading finishes

5️⃣ Step-by-Step with Your Example
console.log("First");

setTimeout(() => {
  console.log("Second");
}, 0);

console.log("Third");

What happens internally:

1️⃣ "First" → printed
2️⃣ setTimeout → callback registered
3️⃣ "Third" → printed
4️⃣ Timer finishes → callback goes to Callback Queue
5️⃣ Event Loop → moves callback to Call Stack
6️⃣ "Second" → printed

6️⃣ Diagram (Very Easy)
setTimeout
   ↓
REGISTER callback
   ↓
Callback Queue
   ↓ (Event Loop)
Call Stack
   ↓
Executed

7️⃣ One-Line Definitions (Perfect for Exams)
✅ Callback Queue

A queue that stores asynchronous callbacks waiting to be executed by the event loop.

✅ Register

Registering a callback means informing JavaScript to execute a function later after an asynchronous task completes.

8️⃣ Common Mistake 🚫

❌ Thinking setTimeout(fn, 0) runs immediately
✔ It runs after all synchronous code finishes

*/