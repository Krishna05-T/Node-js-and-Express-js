setInterval(() => {
    console.log("hello");
},2000);
console.log("I will run first");

/*

        "I will run first" → printed once

"hello" → printed every 2 seconds, forever (until stopped)

3️⃣ Line-by-Line Explanation
🔹 Line 1: setInterval(...)
setInterval(() => {
    console.log("hello");
}, 2000);


Registers a callback

Tells JavaScript:

“Run this function every 2000 ms (2 seconds)”

Callback is NOT executed now

Timer system starts counting

📌 Callback is registered, not executed

🔹 Line 2: Synchronous code
console.log("I will run first");


Synchronous

Runs immediately

✅ Output:

I will run first

4️⃣ Event Loop — Step-by-Step (Easy)
🧠 Important components:

Call Stack

Timer System

Callback Queue

Event Loop

🔁 Step 1: Call Stack executes setInterval
Call Stack:
setInterval(...)


Interval callback is registered

Timer starts (2 sec)

Stack clears

🚫 No output

🔁 Step 2: Call Stack executes sync code
Call Stack:
console.log("I will run first")


✅ Output:

I will run first

🔁 Step 3: After 2 seconds

Timer expires

Callback is placed in Callback Queue

Callback Queue:
console.log("hello")

🔁 Step 4: Event Loop checks Call Stack

Stack is empty ✅

Event Loop moves callback to stack

Call Stack:
console.log("hello")


✅ Output:

hello

🔁 Step 5: Interval repeats 🔁

After every 2 seconds

Callback is again queued

Event Loop executes it again

This continues forever.

5️⃣ Visual Timeline
Time →
0s      2s      4s      6s
|       |       |       |
I run
        hello
                hello
                        hello

6️⃣ Why "I will run first" always runs first?

Because:

It is synchronous

setInterval only registers a callback

JavaScript finishes sync code before async callbacks

7️⃣ Important Rules to Remember 🧠
📌 Rule 1

Synchronous code always executes first.

📌 Rule 2

setInterval callbacks wait in the callback queue.

📌 Rule 3

Event Loop runs callbacks only when the call stack is empty.

8️⃣ How to stop setInterval (Important)
const id = setInterval(() => {
    console.log("hello");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 7000);


⏹ Stops after ~7 seconds.

9️⃣ One-Line Interview Answer

"setInterval registers a callback that is repeatedly placed into the callback queue at fixed intervals, and the event loop executes it whenever the call stack is empty."
 */