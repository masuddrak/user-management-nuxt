<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import UserForm from "@/components/UserForm.vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();

const updateModalRef = ref("");
const userId = computed(() => route.params.id);
const defaultValues = computed(() =>
  userStore.users.find((user) => user.id == userId.value)
);

const handleSubmit = () => {
  router.push("/");
};

watch(
  userId,
  (newValue) => {
    console.log("Dynamic data:", newValue);
    updateModalRef.value == newValue;
  },
  { immediate: true }
);
</script>

<template>
  <div>
    <h1 class="text-xl md:text-2xl font-bold text-center">Update User</h1>
    <UserForm :initialData="defaultValues" @submit="handleSubmit" />
  </div>
</template>
