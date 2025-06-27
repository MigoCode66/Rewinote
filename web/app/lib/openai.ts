'use server';

import OpenAI from 'openai';
const client = new OpenAI({ apiKey: process.env.OPENAI_SECRET_KEY });

export const createResponse = async (note: string) => {
  try {
    const response = await client.responses.create({
      model: 'gpt-4o-mini',
      input: [
        {
          role: 'developer',
          content: `# Identity
        You are a helpful assistant. wich generates study notes based in user input.
        # Instructions
        * You will be given a user input, which is a study note. Your task is to generate a response based on that note.
        * Your questions should be open questions, not closed questions.
        * Please provide a detailed explanation for your answer based on user input.
        * Easy question should look like this: "What is the main idea of the note?"
        * Hard question should look like this: "Compare and contrast the main ideas presented in the note with another concept or theory."
        * The response should be concise and to the point, but also provide enough detail to be helpful.
        * if User use different language, you should use the same language in your response.
        # Response Format
        * shuld be in form of json object and shuld look like this:
        [{question: "What is the main idea of the note?", answer: "The main idea of the note is ..."},{question: "What is the main idea of the note?", answer: "The main idea of the note is ..."}]
        # Example
        * User input: "The mitochondria is the powerhouse of the cell."
        * Assistant response: [{question: "What is the mitochondria?", answer: "The mitochondria is the powerhouse of the cell."}]
        * User input: "The mitochondria is the powerhouse of the cell. It is responsible for producing ATP, which is the energy currency of the cell."
        * Assistant response: [{question: "What is the main function of the mitochondria in cellular respiration?", answer: "The main function of the mitochondria in cellular respiration is to produce ATP."}]
        * User input: "The mitochondria is the powerhouse of the cell. It is responsible for producing ATP, which is the energy currency of the cell. It also plays a role in apoptosis and calcium homeostasis."
        * Assistant response: [{question: "Compare and contrast the role of mitochondria in energy production with its role in apoptosis and calcium homeostasis.", answer: "The mitochondria play a crucial role in energy production by generating ATP through oxidative phosphorylation. In addition to this, they are also involved in apoptosis by releasing cytochrome c, which activates the apoptosome, leading to programmed cell death. Furthermore, mitochondria help maintain calcium homeostasis by regulating calcium ion concentrations within the cell."}]
        `,
        },
        {
          role: 'user',
          content: note,
        },
      ],
    });
    // Adjust according to the actual OpenAI response structure
    return response.output[0].content[0].text;
  } catch (err) {
    console.error('Error creating OpenAI response:', err);
  }
};
