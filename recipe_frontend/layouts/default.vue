<template>
  <div>
    <AppHeader @search="onSearch" />
    <main class="container" style="padding: 16px 0 48px;">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';

const router = useRouter();

function onSearch(q: string) {
  // Navigate with query param 'q'
  const route = router.currentRoute.value;
  router.push({ path: route.path, query: { ...route.query, q } });
}
</script>
