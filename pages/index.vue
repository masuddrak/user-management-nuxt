<template>
  <main class="container mx-auto">
    <div class="">
      <div
        class="h-[60vh] flex justify-center items-center"
        v-if="allUser.length < 1"
      >
        <div class="text-center space-y-2">
          <h1 class="text-4xl font-bold loading">
            Create New User Now!!!!!!!!!!
          </h1>

          <Button :variant="submit"
            ><NuxtLink to="/users/create">Create User</NuxtLink></Button
          >
        </div>
      </div>
      <!-- <UserForm></UserForm> -->
      <div
        v-for="user in allUser"
        :key="user.id"
        class="border-[1px] shadow-lg p-3"
      >
        <p>{{ user.id }}</p>
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.gender }}</p>
        <Button :variant="submit"
          ><NuxtLink :to="`/users/${user?.id}`">Update</NuxtLink></Button
        >
      </div>
    </div>
  </main>
</template>
<script setup>
import { useUserStore } from "@/stores/userStore";
import Button from "~/components/sheard/Button.vue";
let allUser = ref([]);
const userStore = useUserStore();
allUser.value = userStore.users;
</script>
<style scoped>
.loading {
  text-align: center;
  animation: loading 5s ease-in-out infinite;
}

@keyframes loading {
  0% {
    color: black;
  }
  50% {
    color: rgba(0, 0, 0, 0.651);
  }
  70% {
    color: rgba(0, 0, 0, 0.534);
  }
  100% {
    color: rgba(0, 0, 0, 0.37);
  }
}
</style>
