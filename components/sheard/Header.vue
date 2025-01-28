<script setup lang="ts">
import { NuxtLink } from "#components";
</script>

<template>
  <nav class="py-3 shadow-md mb-5">
    <div class="container mx-auto">
      <ul class="space-x-5">
        <NuxtLink to="/">User List</NuxtLink>
        <NuxtLink to="/users/create">Create User</NuxtLink>
      </ul>
    </div>
  </nav>
</template>
