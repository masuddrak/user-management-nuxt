<script setup lang="ts">
import { ref, computed, watch } from "vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseSelect from "@/components/base/BaseSelect.vue";
import BaseRadio from "@/components/base/BaseRadio.vue";
import BaseCheckbox from "@/components/base/BaseCheckbox.vue";
import ConfirmationModal from "./base/ConfirmationModal.vue";
import { useUserStore } from "@/stores/userStore";
import Button from "./sheard/Button.vue";

const userStore = useUserStore();
const route = useRoute();
const router = useRouter();
const props = defineProps<{ initialData?: any; updateModalCon?: any }>();
const emit = defineEmits(["submit", "cancel"]);

// Initialize form with initial data or empty values
const form = ref({
  id: props.initialData?.id || "",
  name: props.initialData?.name || "",
  email: props.initialData?.email || "",
  gender: props.initialData?.gender || "",
  married: props.initialData?.married ?? false,
  role: props.initialData?.role || "",
});
const showModal = ref(false);
const updateModal = ref(false);
const newModalValue = ref(false);
// Track changes
const isChanged = computed(
  () => JSON.stringify(form.value) !== JSON.stringify(props.initialData)
);

const isAnyValueTrue = computed(() =>
  Object.values(form.value).some((value) => Boolean(value))
);
const userId = computed(() => route.params.id);

// Reset form
watch(
  () => props.initialData,
  (newData) => {
    form.value = { ...newData };
  },
  { deep: true }
);

// Handle form submission
const handleSubmit = () => {
  if (form.value.id) {
    userStore.updateUser(form.value);
  } else {
    userStore.addUser(form.value);
  }
  router.push("/");
  emit("submit", form.value);
};

// Handle cancel action
const handleCancel = () => {
  console.log("handleCancel", userId.value);
  if (isChanged.value && userId.value) {
    showModal.value = true;
    return (updateModal.value = true);
  } else {
    if (isChanged.value) {
      showModal.value = true;
    }
  }
};

onMounted(() => {});
const handleCancelModal = () => {
  newModalValue.value = true;
  showModal.value = true;
  console.log("handleCancelModal", userId.value);
};

// Reset form fields to initial state
const resetForm = () => {
  form.value = {
    id: props.initialData?.id || "",
    name: props.initialData?.name || "",
    email: props.initialData?.email || "",
    gender: props.initialData?.gender || "",
    married: props.initialData?.married ?? false,
    role: props.initialData?.role || "",
  };
  // emit("cancel");
  showModal.value = false;
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="w-full md:w-[500px] md:mx-auto">
    <BaseInput
      v-model="form.name"
      label="Name"
      name="name"
      placeholder="Enter name"
    />
    <BaseInput
      v-model="form.email"
      label="Email"
      name="email"
      placeholder="Enter email"
    />
    <BaseRadio
      v-model="form.gender"
      label="Gender"
      name="gender"
      :options="['Male', 'Female', 'Others']"
    />
    <BaseCheckbox v-model="form.married" label="Married" name="married" />
    <BaseSelect
      v-model="form.role"
      label="Role"
      name="role"
      :options="['Admin', 'User']"
      placeholder="Select a role"
    />

    <div
      class="flex gap-3 mt-5"
      :class="isAnyValueTrue ? 'flex block' : 'hidden'"
    >
      <Button v-if="isChanged" type="submit" variant="submit"> Submit </Button>
      <div :class="updateModalCon ? 'hidden' : ''">
        <Button @click.prevent="handleCancel" variant="cancel"> Cancel </Button>
      </div>
      <div :class="updateModalCon ? '' : 'hidden'">
        <Button @click.prevent="handleCancelModal" variant="cancel">
          Cancel
        </Button>
      </div>
    </div>
  </form>
  <div
    v-if="newModalValue && showModal"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
  >
    <ConfirmationModal
      v-if="showModal"
      @confirm="resetForm"
      @close="showModal = true"
    />
  </div>
  <ConfirmationModal
    v-if="showModal"
    :updateModal="updateModal"
    @confirm="resetForm"
    @close="showModal = false"
  />
</template>
