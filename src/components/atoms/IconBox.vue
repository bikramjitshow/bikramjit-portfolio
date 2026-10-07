<template>
  <span class="icon-box" :class="`icon-box--${size}`">
    <slot>{{ glyph }}</slot>
  </span>
</template>

<script setup>
defineProps({
  glyph: { type: String, default: '' },
  size: { type: String, default: 'md' } // sm | md | lg
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;

.icon-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: v.$radius-md;
  background: v.$color-accent-light;
  color: v.$color-accent-soft-text;
  flex-shrink: 0;

  &--sm { width: 32px; height: 32px; font-size: v.$fs-sm; }
  &--md { width: 42px; height: 42px; font-size: v.$fs-md; }
  &--lg { width: 56px; height: 56px; font-size: v.$fs-lg; }
}
</style>
