import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDlgCefH5jqpW0vPPBgUjSPc1NfRtTI8JE";

console.log("API Key: ", apiKey);

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: { responseMimeType: "application/json" },
});

export const generateText = async (prompt: string) => {
  console.log("Generating content for prompt: ", prompt);
  const result = await model.generateContent(prompt);

  console.log(result);
  const text = result?.response?.text();

  if (!text) {
    throw new Error("No text generated");
  }

  const steps = text.split("\n").map((step, index) => ({
    step_number: index + 1,
    description: step.trim(),
  }));

  return steps;
};
