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

          <Button variant="submit"
            ><NuxtLink to="/users/create">Create User</NuxtLink></Button
          >
        </div>
      </div>
      <!-- <UserForm></UserForm> -->
      <div
        v-if="allUser.length > 0"
        class="relative overflow-x-auto shadow-md sm:rounded-lg"
      >
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">User Id</th>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Email</th>
              <th scope="col" class="px-6 py-3">Gender</th>
              <th scope="col" class="px-6 py-3">Role</th>
              <th scope="col" class="px-6 py-3">Upadte</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              v-for="user in allUser"
              :key="user.id"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ user.id }}
              </th>
              <td class="px-6 py-4">{{ user.name }}</td>
              <td class="px-6 py-4">{{ user.email }}</td>
              <td class="px-6 py-4">{{ user.gender }}</td>
              <td class="px-6 py-4">{{ user.role }}</td>
              <td class="px-6 py-4">
                <NuxtLink
                  :to="`/users/${user?.id}`"
                  class="font-medium text-white hover:underline"
                  >Update</NuxtLink
                >
              </td>
            </tr>
          </tbody>
        </table>
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
