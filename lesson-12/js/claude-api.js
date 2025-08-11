// HELPER: Available API Endpoints
// Base URL: https://georgian.polaristechservices.com

/* CLAUDE API ENDPOINTS */
// 1. POST /api/claude/messages - Send message to Claude
//    Headers: X-Student-API-Key: your_student_id, Content-Type: application/json
//    Body: { model: "claude-3-5-sonnet-20241022", max_tokens: 100, messages: [{ role: "user", content: "your message" }] }
//    Response: { content: [{ text: "Claude's response" }], usage: { input_tokens: 10, output_tokens: 20 } }

// 2. GET /api/claude/status - Check token usage
//    Headers: X-Student-API-Key: your_student_id
//    Response: { student_id: "12345", student_name: "John Doe", tokens_used: 500, tokens_allocated: 10000, tokens_remaining: 9500, is_enabled: true }

// STEP 1: Store the API configuration
// STEP 2: Set the base URL for the Claude API
const baseURL = "https://georgian.polaristechservices.com/api/claude";
// STEP 3: Set your student API key (student ID)
const studentApiKey = "200605831";
// STEP 4: Set the maximum tokens for API requests
const maxTokens = 1000;

/* STEP 5: Reference the DOM elements you'll need to access */
const userMessage = document.querySelector("#user-message");
const sendMessageBtn = document.querySelector("#send-message");
const checkUsageBtn = document.querySelector("#check-usage");
const results = document.querySelector("#results");

/* STEP 6: Add event listeners for all interactive elements */
// STEP 6a: Send message button
sendMessageBtn.addEventListener("click", sendChatMessage);

// STEP 6b: Check usage button
checkUsageBtn.addEventListener("click", checkTokenUsage);

/* STEP 7: Create the checkTokenUsage function */
function checkTokenUsage() {
// STEP 7a: Create complete url
    let url = `${baseURL}/status`;
    console.log(url);
// STEP 7b: Request status from the API
    fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-Student-API-Key": studentApiKey
        }
    }).then(res => {
        return res.json();
    }).then(json => {
        // STEP 7c: Handle the response
        displayStatus(json);
    })
}

function displayStatus (responseJson) {  
// STEP 7d: Display to user
    console.log(responseJson);
    let pre = document.createElement("pre");
    pre.textContent = `Enabled: ${responseJson.is_enabled} \nLast Used: ${responseJson.last_used_at} \nStudent Id: ${responseJson.student_id} \nStudent Name: ${responseJson.student_name} \nTokens Allocated: ${responseJson.tokens_allocated} \nTokens Remaining: ${responseJson.tokens_remianing} \nTokens Used: ${responseJson.tokens_used} \nTokens Count: ${responseJson.tokens_count}`;
    results.appendChild(pre);
}

let conversationHistory = []; 

function sendChatMessage() {
/* STEP 8: Create the sendChatMessage function for Claude API interaction */
    let message = userMessage.value;

    conversationHistory.push({
        role: "user",
        content: message
    });

// STEP 8a: Get form values
    let url = `${baseURL}/messages`;
// STEP 8b: Create complete url
// STEP 8c: Prepare the request body according to Claude API format
// STEP 8d: Make the API request using fetch()
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Student-API-Key": studentApiKey
        },
        body: JSON.stringify({ 
            model: "claude-3-5-sonnet-20241022", 
            max_tokens: maxTokens, 
            messages: conversationHistory
        })
    })
    // STEP 8e: Handle the response
    .then(res => {
        return res.json();
    }).then(json => {
        // displayChat(json);
        // 4. Add Claude's response to conversationHistory
        const claudeReply = json.content[0].text;
        conversationHistory.push({
            role: "assistant",
            content: claudeReply
        });

        // 5. Display chat
        displayChat(message, claudeReply);
    })


}

// STEP 8f: Extract the message content from Claude's response
// function displayChat(responseJson) {
//     console.log(responseJson);
//     let para = document.createElement("p");

//     para.textContent = responseJson.content[0].text;
//     results.appendChild(para);
// }

function displayChat(userText, claudeText) {
    let userPara = document.createElement("p");
    userPara.textContent = `👤 You: ${userText}`;
    userPara.style.fontWeight = "bold";

    let claudePara = document.createElement("p");
    claudePara.textContent = `🤖 Claude: ${claudeText}`;
    claudePara.style.marginBottom = "1em";

    results.appendChild(userPara);
    results.appendChild(claudePara);
}

// LAB EXTENSION: Multi-Message Chat Feature
// After completing the basic implementation, extend the functionality to support conversation history:

/* LAB STEP 1: Modify sendChatMessage to use conversation history */
// - Add the user's message to conversationHistory
// - Send the entire conversation to the API instead of just the current message
// - Add Claude's response to conversationHistory

/* LAB STEP 2: Update the displayResult function for chat-like appearance */
// - Show messages in a conversation format
// - Display user and Claude messages differently
// - Show conversation flow clearly
