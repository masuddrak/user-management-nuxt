<script setup lang="ts">
import { NuxtLink } from "#components";
import CustomNavLink from "./CustomNavLink.vue";
</script>

<template>
  <nav class="py-3 shadow-md mb-5">
    <div class="mx-2 md:container md:mx-auto">
      <ul class="space-x-5">
        <CustomNavLink direaction="/">User List</CustomNavLink>
        <CustomNavLink direaction="/users/create">Create User</CustomNavLink>
      </ul>
    </div>
  </nav>
</template>
