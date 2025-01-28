<template>
  <div>
    <label>
      <input
        type="checkbox"
        :checked="modelValue"
        @change="
          $emit(
            'update:modelValue',
            ($event.target as HTMLInputElement).checked
          )
        "
      />
      {{ label }}
    </label>
  </div>
</template>
<script setup lang="ts">
defineProps({ modelValue: Boolean, label: String });
defineEmits(["update:modelValue"]);
</script>
