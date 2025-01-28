<script setup>
import Button from "../sheard/Button.vue";

defineEmits(["confirm", "close"]);
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
  >
    <div class="bg-white p-5 rounded">
      <p>Are you sure you want to discard changes?</p>
      <div class="flex gap-3 mt-5">
        <Button @click="$emit('confirm')" variant="submit"> Discard </Button>
        <Button @click="$emit('close')" variant="cancel"> Cancel </Button>
      </div>
    </div>
  </div>
</template>
