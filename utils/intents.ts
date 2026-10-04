import { Kashaya, kashayas } from '../data/kashayas';

export interface IntentMapping {
  keywords: string[];
  response: string;
  recommendations?: string[];
}

export const intents: IntentMapping[] = [
  {
    keywords: ["cold", "cough", "congestion", "flu", "sneeze"],
    response: "For traditional wellness support during cold and congestion, Tulsi Kashaya is one option.",
    recommendations: ["tulsi"]
  },
  {
    keywords: ["digestion", "gas", "bloating", "stomach", "heavy", "digest"],
    response: "Of course. For traditional digestive wellness, you can try Jeera Kashaya.",
    recommendations: ["jeera"]
  },
  {
    keywords: ["ginger"],
    response: "Absolutely. Here's the Ginger Kashaya.",
    recommendations: ["ginger"]
  },
  {
    keywords: ["tulsi"],
    response: "Tulsi Kashaya is a traditional herbal preparation made using tulsi and other ingredients. It is commonly consumed as a wellness drink.",
    recommendations: ["tulsi"]
  },
  {
    keywords: ["nilavembu", "fever", "strong"],
    response: "Nilavembu Kashaya is a potent traditional preparation commonly consumed during seasonal changes.",
    recommendations: ["nilavembu"]
  },
  {
    keywords: ["what can i make", "show me all", "options", "kashayas", "menu"],
    response: "Here are some Kashayas you can prepare with DADI.",
    recommendations: ["tulsi", "ginger", "jeera", "nilavembu"]
  }
];

export const matchIntent = (userInput: string): IntentMapping | null => {
  const lowerInput = userInput.toLowerCase();
  for (const intent of intents) {
    if (intent.keywords.some(keyword => lowerInput.includes(keyword))) {
      return intent;
    }
  }
  return null;
};
