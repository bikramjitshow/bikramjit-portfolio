<template>
  <div class="section-heading">
    <span v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</span>
    <h2 class="section-heading__title">{{ title }}</h2>
    <p v-if="description" class="section-heading__desc">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;

.section-heading {
  margin-bottom: v.$space-6;
  max-width: 640px;

  &__eyebrow {
    display: inline-block;
    color: v.$color-accent-soft-text;
    font-size: v.$fs-xs;
    font-weight: 700;
    letter-spacing: 0.06em;
    margin-bottom: v.$space-3;
  }

  &__title {
    font-size: v.$fs-2xl;
    margin-bottom: v.$space-3;
  }

  &__desc {
    font-size: v.$fs-sm;
    color: v.$color-text-secondary;
  }
}
</style>
