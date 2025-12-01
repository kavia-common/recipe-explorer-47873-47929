<template>
  <div class="search-wrap">
    <input
      :value="modelValue"
      class="search-input"
      type="text"
      :placeholder="placeholder"
      @input="onInput"
    />
    <span class="kbd">/</span>
    <button class="search-btn" @click="emit('update:model-value', '')" :title="'Clear'">✕</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue?: string
  placeholder?: string
}>();
const emit = defineEmits<{
  (e: 'update:model-value', v: string): void
}>();

function onInput(e: Event) {
  emit('update:model-value', (e.target as HTMLInputElement).value);
}
</script>

<style scoped>
.search-wrap {
  position: relative;
  display: flex;
  align-items: center;
  background: var(--color-surface);
  border: 1px solid rgba(17,24,39,0.12);
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  padding: 6px 8px 6px 10px;
  gap: 8px;
}
.search-input {
  border: none;
  outline: none;
  flex: 1 1 auto;
  font-size: 14px;
  background: transparent;
  color: var(--color-text);
}
.search-btn {
  appearance: none;
  border: 0;
  background: transparent;
  border-radius: 10px;
  width: 28px;
  height: 28px;
  color: rgba(17,24,39,0.6);
  cursor: pointer;
}
.search-btn:hover {
  background: rgba(17,24,39,0.06);
}
.kbd {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 6px;
  border: 1px solid rgba(17,24,39,0.18);
  color: rgba(17,24,39,0.7);
  background: rgba(255,255,255,0.8);
}
</style>
