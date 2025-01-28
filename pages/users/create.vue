<script setup>
import UserForm from "@/components/UserForm.vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();
const router = useRouter();
const userData = {
  name: "",
  email: "",
  gender: "",
  married: false,
  role: "",
};
const handleSubmit = () => {
  router.push("/");
};
</script>

<template>
  <div>
    <h1 class="text-xl md:text-2xl font-bold text-center">Create User</h1>

    <UserForm :initialData="userData" @submit="handleSubmit" />
  </div>
</template>
