<template>
  <article class="container">
    <button class="btn ghost" style="margin-top:12px; margin-bottom:12px;" @click="router.back()">
      ← Back
    </button>

    <div v-if="recipe" class="card" style="overflow:hidden;">
      <div style="display:grid; grid-template-columns: 1fr; gap: 0;">
        <img :src="recipe.image" :alt="recipe.title" style="width:100%; height:260px; object-fit:cover;" />
        <div style="padding: 16px;">
          <h1 style="margin:0 0 6px; font-size: 26px;">{{ recipe.title }}</h1>
          <div style="display:flex; gap:8px; flex-wrap: wrap; margin-bottom: 10px;">
            <span v-for="t in recipe.tags" :key="t" class="badge">{{ t }}</span>
            <span v-if="recipe.rating !== undefined" class="badge" style="background: rgba(37,99,235,0.06);">
              ★ {{ recipe.rating?.toFixed?.(1) ?? '—' }}
            </span>
          </div>

          <div style="display:flex; gap:16px; flex-wrap:wrap; margin-bottom: 16px; opacity:0.9;">
            <div>⏱️ {{ recipe.time }}</div>
            <div>👨‍🍳 {{ recipe.difficulty }}</div>
            <div>🥣 {{ recipe.servings }} servings</div>
          </div>

          <div style="display:grid; grid-template-columns: 1fr; gap: 16px;">
            <section>
              <h2 style="font-size:18px; margin:0 0 8px;">Ingredients</h2>
              <ul style="margin:0; padding-left: 18px;">
                <li v-for="(ing, idx) in recipe.ingredients" :key="idx">{{ ing }}</li>
              </ul>
            </section>

            <section>
              <h2 style="font-size:18px; margin:12px 0 8px;">Steps</h2>
              <ol style="margin:0; padding-left: 18px;">
                <li v-for="(step, idx) in recipe.steps" :key="idx" style="margin-bottom:6px;">
                  {{ step }}
                </li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>

    <p v-else>Recipe not found.</p>
  </article>
</template>

<script setup lang="ts">
import { useRecipes } from '~/composables/useRecipes';

const router = useRouter();
const route = useRoute();
const { getById } = useRecipes();

const idParam = computed(() => route.params.id as string);
const recipe = computed(() => getById(idParam.value));
</script>
