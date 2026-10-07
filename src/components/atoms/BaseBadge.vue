<template>
  <span class="badge" :class="`badge--${variant}`"><slot /></span>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'default' } // default | accent | outline | dot
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.badge {
  display: inline-flex;
  align-items: center;
  gap: v.$space-1;
  padding: 0.3rem 0.75rem;
  border-radius: v.$radius-pill;
  font-size: v.$fs-xs;
  font-weight: 600;

  &--default {
    background: v.$color-surface-alt;
    color: v.$color-text-secondary;
    border: 1px solid v.$color-border-light;
  }

  &--accent {
    background: v.$color-accent-light;
    color: v.$color-accent-soft-text;
  }

  &--outline {
    background: transparent;
    border: 1px solid v.$color-border-light;
    color: v.$color-text-secondary;
  }

  &--dot {
    background: rgba(34, 197, 94, 0.12);
    color: v.$color-success;

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: v.$color-success;
    }
  }
}
</style>
