import { ref, computed } from 'vue'

/**
 * PUBLIC_INTERFACE
 * useRecipes composable provides recipe state, client-side filtering, and lookup by id.
 * It reads optional runtime public apiBase for future integration, but currently uses local mock data.
 */
export function useRecipes() {
  /** Runtime config public section */
  const runtime = useRuntimeConfig()
  const apiBase = runtime.public?.apiBase as string | undefined

  /** In-memory mock data (can be swapped for API later) */
  const recipes = ref<Recipe[]>(MOCK_RECIPES)

  /** Search query state */
  const query = ref<string>('')

  /** PUBLIC_INTERFACE */
  const setQuery = (q: string) => {
    query.value = (q || '').trim()
  }

  /** Basic client-side filtering across title, tags, and ingredients */
  const filteredRecipes = computed(() => {
    const q = query.value.toLowerCase()
    if (!q) return recipes.value
    return recipes.value.filter((r) => {
      if (r.title.toLowerCase().includes(q)) return true
      if (r.tags.some(t => t.toLowerCase().includes(q))) return true
      if (r.ingredients.some(i => i.toLowerCase().includes(q))) return true
      return false
    })
  })

  /** PUBLIC_INTERFACE */
  const getById = (id: string | number) => {
    const key = String(id)
    return recipes.value.find(r => String(r.id) === key)
  }

  return {
    recipes,
    filteredRecipes,
    setQuery,
    getById,
    apiBase,
  }
}

// Types
export type Recipe = {
  id: string | number
  title: string
  image: string
  tags: string[]
  rating?: number
  time: string
  difficulty: 'Easy' | 'Medium' | 'Hard' | string
  servings: number
  ingredients: string[]
  steps: string[]
}

// Mock data
const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Lemon Garlic Salmon',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1600&auto=format&fit=crop',
    tags: ['Seafood', 'Dinner', 'Healthy'],
    rating: 4.6,
    time: '25 min',
    difficulty: 'Easy',
    servings: 2,
    ingredients: [
      '2 salmon fillets',
      '2 cloves garlic, minced',
      '1 lemon, juiced',
      '1 tbsp olive oil',
      'Salt & pepper',
      'Parsley (optional)'
    ],
    steps: [
      'Preheat oven to 400°F (200°C).',
      'Place salmon on baking sheet, drizzle olive oil.',
      'Rub with garlic, season with salt and pepper.',
      'Squeeze lemon over top, bake 12–14 minutes.',
      'Garnish with parsley and serve.'
    ]
  },
  {
    id: '2',
    title: 'Creamy Mushroom Pasta',
    image: 'https://images.unsplash.com/photo-1526312426976-3439a6a87f6f?q=80&w=1600&auto=format&fit=crop',
    tags: ['Pasta', 'Vegetarian', 'Comfort'],
    rating: 4.8,
    time: '30 min',
    difficulty: 'Medium',
    servings: 3,
    ingredients: [
      '200g pasta',
      '250g mushrooms, sliced',
      '1 cup cream',
      '1 onion, chopped',
      '2 cloves garlic, minced',
      'Parmesan, salt & pepper'
    ],
    steps: [
      'Cook pasta according to package instructions.',
      'Sauté onions and garlic until fragrant.',
      'Add mushrooms; cook until browned.',
      'Stir in cream; simmer to thicken.',
      'Toss with pasta; season and top with Parmesan.'
    ]
  },
  {
    id: '3',
    title: 'Citrus Quinoa Salad',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1600&auto=format&fit=crop',
    tags: ['Salad', 'Vegan', 'Gluten-free'],
    rating: 4.4,
    time: '20 min',
    difficulty: 'Easy',
    servings: 2,
    ingredients: [
      '1 cup cooked quinoa',
      '1 orange, segments',
      '1 cucumber, diced',
      'Mint leaves',
      'Olive oil, lemon juice, salt'
    ],
    steps: [
      'Cook quinoa and let cool slightly.',
      'Combine with orange, cucumber, and mint.',
      'Dress with olive oil, lemon juice, and salt.',
      'Toss and serve chilled.'
    ]
  }
]
