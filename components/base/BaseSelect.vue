<template>
  <div>
    <label :for="name" class="block mb-1">{{ label }}</label>
    <select
      :id="name"
      :name="name"
      :value="modelValue"
      required
      @change="
        $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
      "
      class="border p-2 w-full rounded text-black"
    >
      <option value="" disabled selected hidden>select role</option>
      <option v-for="(option, index) in options" :key="index" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  modelValue: String,
  label: String,
  name: String,
  options: Array,
});
defineEmits(["update:modelValue"]);
</script>
