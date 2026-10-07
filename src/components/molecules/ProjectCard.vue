<template>
  <article class="project-card">
    <div class="project-card__thumb" :style="thumbStyle"></div>
    <div class="project-card__body">
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p class="project-card__desc">{{ project.description }}</p>
      <div class="project-card__tags">
        <BaseBadge v-for="tag in project.tags" :key="tag" variant="outline">{{ tag }}</BaseBadge>
      </div>
      <div class="project-card__footer">
        <span class="project-card__role">Role: {{ project.role }}</span>
        <RouterLink :to="`/projects/${project.id}`" class="project-card__link">View Case Study &rarr;</RouterLink>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import BaseBadge from '@/components/atoms/BaseBadge.vue'

const props = defineProps({
  project: { type: Object, required: true }
})

const thumbStyle = computed(() => ({
  background: `linear-gradient(135deg, rgba(47,111,237,0.35), rgba(20,27,45,0.9))`
}))
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.project-card {
  @include m.card;
  overflow: hidden;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: v.$color-accent;
    transform: translateY(-2px);
  }

  &__thumb {
    height: 140px;
  }

  &__body {
    padding: v.$space-5;
  }

  &__title {
    font-size: v.$fs-md;
    margin-bottom: v.$space-2;
  }

  &__desc {
    font-size: v.$fs-sm;
    margin-bottom: v.$space-4;
    @include m.truncate(2);
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: v.$space-2;
    margin-bottom: v.$space-4;
  }

  &__footer {
    @include m.flex(row, center, space-between);
    padding-top: v.$space-3;
    border-top: 1px solid v.$color-border;
    font-size: v.$fs-xs;
  }

  &__role {
    color: v.$color-text-muted;
  }

  &__link {
    color: v.$color-accent-soft-text;
    font-weight: 600;
    @include m.focus-ring;

    &:hover { text-decoration: underline; }
  }
}
</style>
