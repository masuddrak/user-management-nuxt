<template>
  <button
    class="px-3 py-1 rounded-md text-white bg-green-700"
    :class="variant == 'cancel' ? 'bg-red-500' : ''"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: string;
}>();
</script>
