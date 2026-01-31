const {readFile } = require('fs');


console.log("started a first task");

readFile('./content/subfolder/text.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return;
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task')

/*
1️⃣ The Code (What each line does)
const { readFile } = require('fs');


Imports the asynchronous file-reading function from Node.js core module fs.

console.log("started a first task");


Synchronous

Immediately prints to console.

readFile('./content/subfolder/text.txt', 'utf8', (err, result) => {


Asynchronous I/O operation

Node.js sends this task to libuv’s thread pool

Callback is registered, not executed now

if (err) {
    console.log(err);
    return;
}


Error handling

If file path is wrong or file missing → error printed

console.log(result);
console.log('completed first task');


Runs only after file reading finishes

Executes inside Event Loop callback phase

console.log('starting next task');


Synchronous

Runs immediately after readFile() is called

2️⃣ Output (Exact Order)
started a first task
starting next task
<content of text.txt>
completed first task

❓ Why this order?

Because asynchronous code does NOT block execution.

3️⃣ Event Loop – Step-by-Step (MOST IMPORTANT)
🔁 Step 1: Call Stack starts executing
Call Stack:
console.log("started a first task")


✔ Output:

started a first task

🔁 Step 2: readFile() encountered
Call Stack:
readFile()


Task sent to libuv thread pool

Callback registered

Call stack is now free

🚫 No output yet

🔁 Step 3: Next synchronous line executes
Call Stack:
console.log("starting next task")


✔ Output:

starting next task

🔁 Step 4: File read completes

Thread pool finishes file reading

Callback pushed into Event Loop → Poll Queue

Event Loop (Poll Queue):
readFile callback

🔁 Step 5: Event Loop executes callback
Call Stack:
callback → console.log(result)
callback → console.log("completed first task")


✔ Output:

<file content>
completed first task

4️⃣ Visual Flow Diagram (Easy to Remember)
Synchronous Code
↓
readFile() → Thread Pool
↓
Remaining Sync Code
↓
Event Loop
↓
Callback Execution

5️⃣ Important Technical Terms (Exam / Interview)
Term	Meaning
Non-blocking I/O	Code execution doesn’t wait
libuv	Handles async operations
Thread Pool	Executes file system tasks
Event Loop	Manages callback execution
Poll Phase	Executes I/O callbacks
6️⃣ One-Line Summary (Perfect Answer)

“The readFile function is asynchronous. Node.js offloads file reading to the thread pool and continues executing synchronous code. Once the file operation completes, the callback is queued in the event loop and executed later.”

*/