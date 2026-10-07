<template>
  <label class="field">
    <span class="field__label">{{ label }}</span>
    <component
      :is="multiline ? 'textarea' : 'input'"
      class="field__control"
      :type="multiline ? undefined : type"
      :placeholder="placeholder"
      :rows="multiline ? rows : undefined"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' },
  modelValue: { type: String, default: '' },
  multiline: { type: Boolean, default: false },
  rows: { type: Number, default: 4 }
})
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;

.field {
  display: flex;
  flex-direction: column;
  gap: v.$space-2;
  width: 100%;

  &__label {
    font-size: v.$fs-sm;
    font-weight: 600;
    color: v.$color-text-primary;
  }

  &__control {
    width: 100%;
    background: v.$color-bg-alt;
    border: 1px solid v.$color-border-light;
    border-radius: v.$radius-sm;
    padding: 0.75rem 1rem;
    color: v.$color-text-primary;
    font-size: v.$fs-sm;
    resize: vertical;

    &::placeholder { color: v.$color-text-muted; }

    &:focus {
      outline: none;
      border-color: v.$color-accent;
    }
  }
}
</style>
