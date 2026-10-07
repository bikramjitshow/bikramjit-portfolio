<template>
  <div class="strength">
    <IconBox size="sm" glyph="&#9679;" />
    <div>
      <h4 class="strength__title">{{ title }}</h4>
      <p class="strength__desc">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import IconBox from '@/components/atoms/IconBox.vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.strength {
  @include m.flex(row, flex-start, flex-start, v.$space-3);

  &__title {
    font-size: v.$fs-sm;
    margin-bottom: 0.2rem;
  }

  &__desc {
    font-size: v.$fs-xs;
    color: v.$color-text-muted;
  }
}
</style>
