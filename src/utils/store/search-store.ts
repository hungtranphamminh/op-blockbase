import { create } from 'zustand';

type State = {
  name: string;
  tags: string[];
  ingredients: string[];
  collections: string[];
};

type Actions = {
  updateName: (name: string) => void;
  updateTags: (tags: string[]) => void;
  updateIngredients: (ingredients: string[]) => void;
  updateCollections: (collections: string[]) => void;
};


const useRecipeStore = create<State & Actions>((set) => ({
  name: '',
  tags: ["Vegans", "Healthy", "Quick Meals"],
  ingredients: ["Rice", "Noodle", "Beef", "Beans", "Pork", "Pepper", "Salmon"],
  collections: ["Healthy Recipes", "Weekend Nights", "Spring Freshes"],
  updateName: (name) => set((state) => ({ ...state, name })),
  updateTags: (tags) => set((state) => ({ ...state, tags })),
  updateIngredients: (ingredients) => set((state) => ({ ...state, ingredients })),
  updateCollections: (collections) => set((state) => ({ ...state, collections })),
}));

export default useRecipeStore;

export const useRecipeSearchParams = () => {
  const state = useRecipeStore((state) => ({
    name: state.name,
    tags: state.tags,
    ingredients: state.ingredients,
    collections: state.collections,
  }));

  const updateName = useRecipeStore((state) => state.updateName);
  const updateTags = useRecipeStore((state) => state.updateTags);
  const updateIngredients = useRecipeStore((state) => state.updateIngredients);
  const updateCollections = useRecipeStore((state) => state.updateCollections);

  return { ...state, updateName, updateTags, updateIngredients, updateCollections };
};