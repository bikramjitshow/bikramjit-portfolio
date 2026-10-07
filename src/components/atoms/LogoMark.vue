<template>
  <RouterLink to="/" class="logo">
    <span class="logo__mark">&lt;/&gt;</span>
    <span class="logo__text">{{ name }}</span>
  </RouterLink>
</template>

<script setup>
defineProps({ name: { type: String, default: 'Bikram' } })
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.logo {
  @include m.flex(row, center, flex-start, v.$space-2);
  font-weight: 700;
  font-size: v.$fs-md;
  color: v.$color-text-primary;

  &__mark {
    color: v.$color-accent;
    font-size: v.$fs-sm;
  }
}
</style>
