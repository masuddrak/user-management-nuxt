<template>
  <NuxtLink :to="direaction">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";

defineProps<{
  direaction?: string;
}>();
</script>
<style scoped>
.router-link-active {
  background-color: #374151;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
}
</style>
