<template>
  <div id="app" class="app-shell">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
/**
 * Root app shell: defines CSS variables (Ocean Professional theme) and wraps routed content.
 * Reads optional NUXT_PUBLIC_API_BASE for future API integration (not used yet in mock).
 */
const runtimeConfig = useRuntimeConfig();
const apiBase = runtimeConfig.public?.apiBase;
if (process.dev && apiBase) {
  // eslint-disable-next-line no-console
  console.log("API base configured:", apiBase);
}
</script>

<style>
/* Ocean Professional theme tokens via CSS variables */
:root {
  --color-primary: #2563EB;
  --color-secondary: #F59E0B; /* also used as success */
  --color-success: #F59E0B;
  --color-error: #EF4444;
  --color-text: #111827;
  --color-bg: #f9fafb;
  --color-surface: #ffffff;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 10px 20px rgba(0,0,0,0.12);
}

html, body, #__nuxt, #app {
  height: 100%;
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-shell {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background:
    radial-gradient(1000px 600px at 10% -10%, rgba(37,99,235,0.08), rgba(255,255,255,0) 60%),
    radial-gradient(800px 500px at 110% 10%, rgba(245,158,11,0.08), rgba(255,255,255,0) 60%),
    var(--color-bg);
}

/* Utility classes */
.container {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
}

.card {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(17,24,39,0.06);
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
  transition: box-shadow 180ms ease, transform 180ms ease;
}

.btn {
  appearance: none;
  border: 0;
  border-radius: var(--radius-sm);
  background: var(--color-primary);
  color: white;
  padding: 10px 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

.btn.ghost {
  background: transparent;
  color: var(--color-primary);
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 999px;
  background: rgba(37,99,235,0.08);
  color: var(--color-primary);
  border: 1px solid rgba(37,99,235,0.12);
}
</style>
