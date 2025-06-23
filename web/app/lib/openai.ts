'use server';

import OpenAI from 'openai';
const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

export const createResponse = async () => {
  try {
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',

      // TO DO: Add your messages here
      messages: [],
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error('Error creating OpenAI response:', err);
  }
};
