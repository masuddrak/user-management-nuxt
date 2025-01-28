<template>
  <div>
    <label :for="name" class="block mb-1">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      required
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      class="border p-2 w-full rounded"
    />
  </div>
</template>
<script setup lang="ts">
defineProps({
  modelValue: String,
  label: String,
  name: String,
  type: { type: String, default: "text" },
  placeholder: String,
});
defineEmits(["update:modelValue"]);
</script>
