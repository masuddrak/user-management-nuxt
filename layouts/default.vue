<script setup lang="ts">
import Header from "~/components/sheard/Header.vue";
</script>

<template>
  <div>
    <Header></Header>
    <div class="mx-2 md:container md:mx-auto">
      <slot />
    </div>
  </div>
</template>
