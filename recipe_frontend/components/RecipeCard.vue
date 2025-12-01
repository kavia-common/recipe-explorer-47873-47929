<template>
  <div class="card recipe-card" role="button" tabindex="0" @click="$emit('click')" @keypress.enter="$emit('click')">
    <div class="media">
      <img :src="recipe.image" :alt="recipe.title" />
      <div class="overlay">
        <span class="badge">★ {{ recipe.rating?.toFixed?.(1) ?? '—' }}</span>
      </div>
    </div>
    <div class="body">
      <h3 class="title">{{ recipe.title }}</h3>
      <div class="meta">
        <span v-for="t in recipe.tags" :key="t" class="chip">{{ t }}</span>
      </div>
      <div class="footer">
        <span class="time">⏱️ {{ recipe.time }}</span>
        <span class="servings">🥣 {{ recipe.servings }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{(e:'click'): void}>();
const props = defineProps<{
  recipe: {
    id: string | number
    title: string
    image: string
    tags: string[]
    rating?: number
    time?: string
    servings?: string | number
  }
}>();
</script>

<style scoped>
.recipe-card { overflow: hidden; cursor: pointer; }
.media { position: relative; width: 100%; height: 160px; overflow: hidden; }
.media img { width: 100%; height: 100%; object-fit: cover; display: block; }
.overlay {
  position: absolute; top: 8px; right: 8px;
}
.body { padding: 12px; }
.title { font-size: 16px; margin: 0 0 6px; font-weight: 700; letter-spacing: -0.01em; }
.meta { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 8px; }
.chip {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(37,99,235,0.06);
  color: var(--color-primary);
  border: 1px solid rgba(37,99,235,0.12);
}
.footer { display: flex; align-items: center; justify-content: space-between; font-size: 12px; opacity: 0.9; }
</style>
