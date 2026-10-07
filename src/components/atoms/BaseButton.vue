<template>
  <component
    :is="tag"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`]"
    :to="to"
    :href="href"
    :type="tag === 'button' ? type : null"
  >
    <slot name="icon-left" />
    <span><slot /></span>
    <slot name="icon-right" />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: { type: String, default: 'primary' }, // primary | secondary | ghost
  size: { type: String, default: 'md' }, // sm | md
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  type: { type: String, default: 'button' }
})

const tag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.btn {
  @include m.flex(row, center, center, v.$space-2);
  border-radius: v.$radius-sm;
  font-weight: 600;
  border: 1px solid transparent;
  white-space: nowrap;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
  @include m.focus-ring;

  &--md { padding: 0.7rem 1.4rem; font-size: v.$fs-sm; }
  &--sm { padding: 0.5rem 1rem; font-size: v.$fs-xs; }

  &--primary {
    background: v.$color-accent;
    color: #fff;
    &:hover { background: v.$color-accent-hover; }
  }

  &--secondary {
    background: v.$color-surface-alt;
    color: v.$color-text-primary;
    border-color: v.$color-border-light;
    &:hover { border-color: v.$color-accent; }
  }

  &--ghost {
    background: transparent;
    color: v.$color-text-secondary;
    &:hover { color: v.$color-text-primary; }
  }

  &:active { transform: scale(0.98); }
}
</style>
