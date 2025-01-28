<script setup lang="ts">
import Header from "~/components/sheard/Header.vue";
</script>

<template>
  <div>
    <Header></Header>
    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>
