export interface Ingredient {
  name: string;
  quantity: string;
}

export interface PreparationStage {
  name: string;
  duration: number; // in seconds for demo
}

export interface Kashaya {
  id: string;
  name: string;
  image: string;
  shortDescription: string;
  ingredients: Ingredient[];
  preparationTime: number; // visually displayed (minutes)
  servings: number;
  benefits: string[];
  stages: PreparationStage[];
}

export const kashayas: Kashaya[] = [
  {
    id: "tulsi",
    name: "Tulsi Kashaya",
    image: "https://images.unsplash.com/photo-1599380120150-161b9bf59bb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Traditional herbal preparation for general wellness.",
    ingredients: [
      { name: "Tulsi leaves", quantity: "10-12 leaves" },
      { name: "Ginger", quantity: "1 inch" },
      { name: "Black pepper", quantity: "4-5 peppercorns" },
      { name: "Water", quantity: "400 ml" },
    ],
    preparationTime: 24,
    servings: 2,
    benefits: [
      "Traditionally consumed for general wellness",
      "Commonly used during seasonal discomfort",
      "Traditionally associated with respiratory comfort",
    ],
    stages: [
      { name: "Preparing ingredients", duration: 5 },
      { name: "Heating", duration: 5 },
      { name: "Simmering", duration: 10 },
      { name: "Finishing", duration: 5 },
    ],
  },
  {
    id: "ginger",
    name: "Ginger Kashaya",
    image: "https://images.unsplash.com/photo-1615486171448-4fd0a790530b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Warm herbal beverage commonly used for comfort.",
    ingredients: [
      { name: "Fresh Ginger", quantity: "2 inches" },
      { name: "Jaggery", quantity: "1 tbsp" },
      { name: "Coriander seeds", quantity: "1 tsp" },
      { name: "Water", quantity: "400 ml" },
    ],
    preparationTime: 21,
    servings: 2,
    benefits: [
      "Traditionally used as a warm herbal beverage",
      "May support general wellness",
      "Traditionally associated with digestive comfort",
    ],
    stages: [
      { name: "Preparing ingredients", duration: 5 },
      { name: "Heating", duration: 5 },
      { name: "Simmering", duration: 8 },
      { name: "Finishing", duration: 4 },
    ],
  },
  {
    id: "jeera",
    name: "Jeera Kashaya",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Traditionally consumed for digestive wellness.",
    ingredients: [
      { name: "Jeera (Cumin)", quantity: "1 tbsp" },
      { name: "Black pepper", quantity: "1/2 tsp" },
      { name: "Water", quantity: "400 ml" },
    ],
    preparationTime: 20,
    servings: 2,
    benefits: [
      "Traditionally consumed after heavy meals",
      "Commonly used to support digestive wellness",
      "May help maintain comfort",
    ],
    stages: [
      { name: "Preparing ingredients", duration: 4 },
      { name: "Heating", duration: 5 },
      { name: "Simmering", duration: 8 },
      { name: "Finishing", duration: 4 },
    ],
  },
  {
    id: "nilavembu",
    name: "Nilavembu Kashaya",
    image: "https://images.unsplash.com/photo-1563175782-b348de7ef6b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Potent traditional preparation.",
    ingredients: [
      { name: "Nilavembu powder", quantity: "1 tbsp" },
      { name: "Water", quantity: "400 ml" },
    ],
    preparationTime: 30,
    servings: 2,
    benefits: [
      "Potent traditional herbal preparation",
      "Commonly consumed during seasonal changes",
      "Traditionally associated with general wellness support",
    ],
    stages: [
      { name: "Preparing ingredients", duration: 5 },
      { name: "Heating", duration: 6 },
      { name: "Simmering", duration: 15 },
      { name: "Reducing", duration: 8 },
      { name: "Finishing", duration: 5 },
    ],
  },
];
