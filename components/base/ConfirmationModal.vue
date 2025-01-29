<script setup>
import Button from "../sheard/Button.vue";
import UserForm from "../UserForm.vue";
const updateModal = ref(false);
const newModalValue = ref(false);
const props = defineProps({
  updateModal: Boolean,
  newModalValue: Boolean,
});
defineEmits(["confirm", "close"]);
onMounted(() => {
  updateModal.value = props.updateModal;
  newModalValue.value = props.newModalValue;
  console.log("newModalValue", newModalValue.value);
});
</script>

<template>
  <div>
    <div
      v-if="updateModal"
      class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
    >
      <div class="bg-white p-3 md:p-8 rounded-md min-w-[330px]">
        <h1 class="text-xl md:text-2xl font-bold text-center">Create User</h1>
        <UserForm updateModalCon="updateModal"></UserForm>
      </div>
    </div>
    <div
      class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
      :class="updateModal && 'hidden'"
    >
      <div class="bg-white p-5 rounded">
        <p>Are you sure you want to discard changes?</p>
        <div class="flex gap-3 mt-5">
          <Button @click="$emit('confirm')" variant="submit"> Discard </Button>
          <Button @click="$emit('close')" variant="cancel"> Cancel </Button>
        </div>
      </div>
    </div>
  </div>
</template>
