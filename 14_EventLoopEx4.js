const http = require('http')

const server = http.createServer((req, res) => {
    console.log("request event")
    res.end("Hello world")
})

server.listen(5000, () => {
    console.log("Server listening on port : 5000....")
})


/*
    I’ll explain this very clearly, step-by-step, in easy language, covering:

What the code does

What output you see

How the Event Loop works here (this is the key part)

1️⃣ The Code
const http = require('http')

What this line does

Imports Node.js HTTP module

This module lets you create a web server

const server = http.createServer((req, res) => {
    console.log("request event")
    res.end("Hello world")
})

What happens here

createServer creates a server

You pass a callback function

This callback is executed every time a client sends a request

📌 The callback has:

req → request (from browser)

res → response (from server)

📌 This callback is registered, not executed now.

server.listen(5000, () => {
    console.log("Server listening on port : 5000....")
})

What this does

Starts the server

Binds it to port 5000

The callback runs once, when the server starts successfully

2️⃣ Output (What you will see)
When you run the file
Server listening on port : 5000....


This prints only once.

When you open browser

Go to:
👉 http://localhost:5000

Each time you refresh the page:

Terminal output:
request event

Browser output:
Hello world


📌 Refresh 5 times → "request event" prints 5 times.

3️⃣ Why the Server Does NOT Stop (Important)

Even though your file ends, the program keeps running.

Why?

Because:

server.listen() starts a long-running async process

Node.js keeps the Event Loop alive

4️⃣ Event Loop — Easy & Detailed Explanation
🧠 Think of Node.js server like a shop

Call Stack → Cash counter

Event Loop → Manager

OS / Kernel → Security guard outside

Callback → Worker handling customers

5️⃣ Step-by-Step: What REALLY happens
🔁 Step 1: File starts executing (sync)
Call Stack:
require('http')
createServer()
listen()


Server is created

Request callback is registered

Listen callback is registered

🔁 Step 2: Server starts listening
Call Stack:
listen callback


✅ Output:

Server listening on port : 5000....


Now:

Call stack is empty

Event Loop is waiting

🔁 Step 3: Browser sends a request

When you open:

http://localhost:5000


OS detects incoming request

Notifies Node.js

Request callback is added to Event Loop queue

🔁 Step 4: Event Loop handles request
Call Stack:
request callback


Inside callback:

console.log("request event")
res.end("Hello world")


✅ Terminal:

request event


✅ Browser:

Hello world

🔁 Step 5: Server waits again 🔁

Call stack empty

Event Loop waits for next request

This repeats for every request

6️⃣ Visual Flow (Very Easy)
Browser Request
      ↓
Operating System
      ↓
Event Loop
      ↓
Request Callback
      ↓
Response Sent

7️⃣ Key Rule to Understand 🧠

Node.js does NOT create a new thread per request.
It uses one Event Loop and handles requests asynchronously.

This is why Node.js can handle thousands of users.

8️⃣ Important Interview Points
✅ Why is this non-blocking?

Request handling is event-based

No waiting, no blocking

Callbacks run only when needed

✅ Why Node.js is fast for servers?

Single thread

Event Loop

Async I/O

9️⃣ One-Line Perfect Explanation

“Node.js registers a request callback when the server starts. Each incoming HTTP request is placed into the event loop queue, and the event loop executes the callback when the call stack is free.”

*/