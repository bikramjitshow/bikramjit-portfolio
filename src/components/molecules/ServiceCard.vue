<template>
  <article class="service-card">
    <IconBox glyph="&#9670;" />
    <h3 class="service-card__title">{{ service.title }}</h3>
    <p class="service-card__desc">{{ service.description }}</p>
  </article>
</template>

<script setup>
import IconBox from '@/components/atoms/IconBox.vue'

defineProps({
  service: { type: Object, required: true }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.service-card {
  @include m.card;
  padding: v.$space-5;

  &__title {
    font-size: v.$fs-md;
    margin: v.$space-4 0 v.$space-2;
  }

  &__desc {
    font-size: v.$fs-sm;
  }
}
</style>
