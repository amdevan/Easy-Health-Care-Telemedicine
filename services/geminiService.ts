import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// CRITICAL: process.env.API_KEY is handled by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `You are a helpful, professional, and empathetic AI assistant for "Easy Health Care Telemedicine Services". 
Your goal is to assist users in understanding our services, how to book appointments, and general navigation of the platform.

Key Information about Easy Health Care:
- We provide remote access to certified doctors and specialists.
- We focus on accessibility across Nepal.
- Services include: Virtual consultations, remote diagnostics, e-prescriptions, mental health, chronic disease management, and maternal care.
- How it works: Register -> Select Consult -> Choose Time -> Connect -> Prescription.

IMPORTANT RULES:
1. DO NOT provide medical diagnoses or specific medical advice. If a user describes symptoms, gently advise them to book a consultation with one of our doctors immediately or call emergency services if it is critical.
2. Be concise and polite.
3. Keep the tone modern, trustworthy, and patient-friendly.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<GenerateContentResponse>> => {
  const chat = getChatSession();
  
  try {
    const streamResult = await chat.sendMessageStream({ message });
    return streamResult;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};