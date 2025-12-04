import { GoogleGenAI } from "@google/genai";

export const generateHeroImage = async (prompt: string): Promise<string | null> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key not found, using fallback image.");
      return null;
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using flash-image for fast generation as per guidelines for general tasks
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    
    return null;
  } catch (error) {
    console.error("Failed to generate image:", error);
    return null;
  }
};