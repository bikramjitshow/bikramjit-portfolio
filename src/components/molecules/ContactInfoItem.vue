<template>
  <div class="contact-info">
    <IconBox size="sm" :glyph="glyph" />
    <div>
      <span class="contact-info__label">{{ label }}</span>
      <a v-if="href" class="contact-info__value" :href="href" target="_blank" rel="noopener">{{ value }}</a>
      <span v-else class="contact-info__value">{{ value }}</span>
    </div>
  </div>
</template>

<script setup>
import IconBox from '@/components/atoms/IconBox.vue'

defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true },
  href: { type: String, default: '' },
  glyph: { type: String, default: '&#9993;' }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.contact-info {
  @include m.flex(row, flex-start, flex-start, v.$space-3);
  margin-bottom: v.$space-5;

  &__label {
    display: block;
    font-size: v.$fs-xs;
    color: v.$color-text-muted;
    margin-bottom: 0.2rem;
  }

  &__value {
    font-size: v.$fs-sm;
    color: v.$color-accent-soft-text;
    font-weight: 600;
  }
}
</style>
