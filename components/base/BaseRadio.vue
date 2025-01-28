<template>
  <div>
    <label class="block mb-1">{{ label }}</label>
    <div class="flex gap-4">
      <label v-for="option in options" :key="option">
        <input
          type="radio"
          :name="name"
          :value="option"
          :checked="modelValue === option"
          required
          @change="$emit('update:modelValue', option)"
        />
        {{ option }}
      </label>
    </div>
  </div>
</template>
<script setup>
defineProps({
  modelValue: String,
  label: String,
  name: String,
  options: Array,
});
defineEmits(["update:modelValue"]);
</script>
