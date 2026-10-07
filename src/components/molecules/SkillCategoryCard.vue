<template>
  <article class="skill-card">
    <IconBox glyph="&#9635;" />
    <h3 class="skill-card__title">{{ category.title }}</h3>
    <ul class="skill-card__items">
      <li v-for="item in category.items" :key="item">{{ item }}</li>
    </ul>
  </article>
</template>

<script setup>
import IconBox from '@/components/atoms/IconBox.vue'

defineProps({
  category: { type: Object, required: true }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.skill-card {
  @include m.card;
  padding: v.$space-5;

  &__title {
    margin-top: v.$space-4;
    font-size: v.$fs-md;
    margin-bottom: v.$space-3;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    gap: v.$space-2;
    font-size: v.$fs-xs;
    color: v.$color-text-muted;

    li {
      &:not(:last-child)::after {
        content: '\00B7';
        margin-left: v.$space-2;
        color: v.$color-text-muted;
      }
    }
  }
}
</style>
