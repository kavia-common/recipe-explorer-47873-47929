<template>
  <header class="header">
    <div class="container header-inner">
      <div class="brand">
        <div class="logo">🍳</div>
        <div class="title">Recipe Explorer</div>
      </div>

      <SearchBar class="header-search" placeholder="Search recipes..." @update:model-value="emitSearch" />
    </div>
  </header>
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue';

const emit = defineEmits<{
  (e: 'search', q: string): void
}>();

function emitSearch(q: string) {
  emit('search', q);
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: linear-gradient(180deg, rgba(37,99,235,0.06), rgba(255,255,255,0)) , var(--color-surface);
  border-bottom: 1px solid rgba(17,24,39,0.06);
  backdrop-filter: blur(4px);
}
.header-inner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: max-content;
}
.logo {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: radial-gradient(600px 300px at -10% 0%, rgba(37,99,235,0.12), rgba(255,255,255,0) 60%) , rgba(37,99,235,0.08);
  border: 1px solid rgba(37,99,235,0.18);
  box-shadow: var(--shadow-sm);
}
.title {
  font-weight: 800;
  letter-spacing: -0.02em;
  font-size: 18px;
}
.header-search {
  flex: 1 1 auto;
}
</style>
