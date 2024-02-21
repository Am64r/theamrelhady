// require('dotenv').config();


// const express = require('express');
// const cors = require('cors');
// const { OpenAI } = require('openai');

// const app = express();
// const port = 9000;

// // Use CORS middleware before defining routes to ensure it applies to all of them
// app.use(cors());

// // Support JSON payloads
// app.use(express.json());

// // Initialize OpenAI API client with your API key
// const openai = new OpenAI({
//     apiKey: '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'
// });

// console.log(openai);

// // Routes

// // Define the POST endpoint
// app.post('/generate-text', async (req, res) => {
//     const userInput = req.body.text;

//     try {
//         // Make a call to the OpenAI API using the chat completion method
//         // Upload a file with an "assistants" purpose
//         const file = await openai.files.create({
//             file: fs.createReadStream("reference.txt"),
//             purpose: "assistants",
//         });

//         const gptResponse = await openai.beta.assistants.create({
//             instructions: "You are an ambassador for Amr Elhady, when given a question respond using the information in the txt file.",
//             model: "gpt-4-turbo-preview", 
//             tools: [{"type": "code_interpreter"}],
//             file_ids: [file.id],
//             messages: [
//                 { role: "user", content: userInput },
                
//             ], // Format for chat completion
//             // You can add other parameters as needed, similar to the completions endpoint
//         });

//         // Extract the text from the response
//         //const generatedText = gptResponse.data.choices[0].message.content.trim();
//         console.log(JSON.stringify(gptResponse));

//         const generatedText = gptResponse.choices[0].message.content.trim();

//         // Send back the generated text as the response
//         res.json({ generatedText });
//     } catch (error) {
//         console.error("Error with OpenAI API:", error);
//         res.status(500).json({ message: "Error generating text" });
//     }
// });

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
