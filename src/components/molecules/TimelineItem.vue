<template>
  <div class="timeline-item">
    <div class="timeline-item__marker">
      <span class="timeline-item__dot"></span>
      <span class="timeline-item__line"></span>
    </div>
    <div class="timeline-item__body">
      <span class="timeline-item__period">{{ entry.period }}</span>
      <h3 class="timeline-item__role">{{ entry.role }}</h3>
      <p class="timeline-item__company">{{ entry.company }}</p>
      <ul class="timeline-item__points">
        <li v-for="(point, i) in entry.points" :key="i">{{ point }}</li>
      </ul>
      <div class="timeline-item__tags">
        <BaseBadge v-for="tag in entry.tags" :key="tag" variant="outline">{{ tag }}</BaseBadge>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseBadge from '@/components/atoms/BaseBadge.vue'

defineProps({
  entry: { type: Object, required: true },
  isLast: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.timeline-item {
  display: flex;
  gap: v.$space-5;

  &__marker {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: v.$color-accent;
    box-shadow: 0 0 0 4px v.$color-accent-light;
    flex-shrink: 0;
  }

  &__line {
    flex: 1;
    width: 2px;
    background: v.$color-border-light;
    margin-top: v.$space-2;
  }

  &__body {
    padding-bottom: v.$space-7;
    flex: 1;
  }

  &__period {
    font-size: v.$fs-xs;
    color: v.$color-accent-soft-text;
    font-weight: 600;
  }

  &__role {
    font-size: v.$fs-md;
    margin: v.$space-2 0 0.2rem;
  }

  &__company {
    font-size: v.$fs-sm;
    color: v.$color-text-secondary;
    margin-bottom: v.$space-3;
  }

  &__points {
    display: flex;
    flex-direction: column;
    gap: v.$space-1;
    font-size: v.$fs-sm;
    color: v.$color-text-secondary;
    margin-bottom: v.$space-4;

    li {
      padding-left: v.$space-4;
      position: relative;

      &::before {
        content: '\2022';
        position: absolute;
        left: 0;
        color: v.$color-text-muted;
      }
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: v.$space-2;
  }

  &:last-child &__line { display: none; }
}
</style>
