<template>
  <div class="stat">
    <strong class="stat__value">{{ value }}</strong>
    <span class="stat__label">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  value: { type: String, required: true },
  label: { type: String, required: true }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  &__value {
    font-size: v.$fs-lg;
    font-weight: 700;
    color: v.$color-text-primary;
  }

  &__label {
    font-size: v.$fs-xs;
    color: v.$color-text-muted;
  }
}
</style>
