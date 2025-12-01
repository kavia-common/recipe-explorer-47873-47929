<template>
  <section>
    <div class="container" style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top:8px;">
      <h1 style="font-size: 28px; margin: 8px 0; font-weight:800; letter-spacing:-0.02em;">
        Recipe Explorer
      </h1>
    </div>

    <div class="container" style="margin-top: 8px;">
      <SearchBar :model-value="query" placeholder="Search recipes, ingredients, tags..." @update:model-value="updateQuery" />
    </div>

    <div class="container" style="margin-top: 16px;">
      <p v-if="filtered.length === 0" style="opacity:0.7">No recipes found. Try a different search.</p>

      <div v-else class="grid">
        <RecipeCard
          v-for="r in filtered"
          :key="r.id"
          :recipe="r"
          @click="goTo(r.id)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SearchBar from '~/components/SearchBar.vue';
import RecipeCard from '~/components/RecipeCard.vue';
import { useRecipes } from '~/composables/useRecipes';

const route = useRoute();
const router = useRouter();
const { recipes, filteredRecipes, setQuery } = useRecipes();

const query = computed({
  get: () => (route.query.q as string) || '',
  set: (val: string) => {
    router.replace({ query: { ...route.query, q: val || undefined } });
  },
});

const filtered = computed(() => {
  setQuery(query.value);
  return filteredRecipes.value;
});

function updateQuery(val: string) {
  query.value = val;
}

function goTo(id: string | number) {
  router.push(`/recipes/${id}`);
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 16px;
}
@media (min-width: 640px) {
  .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
</style>
