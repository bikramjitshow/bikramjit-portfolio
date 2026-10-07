<template>
  <section v-if="project" class="case-study">
    <div class="case-study__inner">
      <RouterLink to="/projects" class="case-study__back">&larr; Back to Projects</RouterLink>

      <div class="case-study__header">
        <div>
          <h1 class="case-study__title">{{ project.title }}</h1>
          <p class="case-study__desc">{{ project.description }}</p>
          <div class="case-study__tags">
            <BaseBadge v-for="tag in project.tags" :key="tag" variant="outline">{{ tag }}</BaseBadge>
          </div>
        </div>
        <div class="case-study__meta">
          <div>
            <span>Role</span>
            <strong>{{ project.role }}</strong>
          </div>
          <div>
            <span>Duration</span>
            <strong>{{ project.duration }}</strong>
          </div>
          <div>
            <span>Live Demo</span>
            <a :href="project.liveDemo" target="_blank" rel="noopener">{{ project.liveDemo }}</a>
          </div>
        </div>
      </div>

      <div class="case-study__preview"></div>

      <div class="case-study__tabs">
        <button
          v-for="tab in project.tabs"
          :key="tab"
          class="case-study__tab"
          :class="{ 'is-active': activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <div class="case-study__body">
        <div class="case-study__overview">
          <h2>Project Overview</h2>
          <p>{{ project.overview }}</p>
        </div>
        <div class="case-study__features">
          <span class="case-study__features-title">Key Features</span>
          <ul>
            <li v-for="feature in project.keyFeatures" :key="feature">
              <span>&#10003;</span>{{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section v-else class="case-study__empty">
    <p>Project not found.</p>
    <RouterLink to="/projects">Back to Projects</RouterLink>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BaseBadge from '@/components/atoms/BaseBadge.vue'

const props = defineProps({
  project: { type: Object, default: null }
})

const activeTab = ref(props.project ? props.project.tabs[0] : '')
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.case-study {
  @include m.section-spacing;

  &__inner { @include m.container; }

  &__back {
    display: inline-block;
    font-size: v.$fs-xs;
    color: v.$color-text-muted;
    margin-bottom: v.$space-5;
    &:hover { color: v.$color-text-primary; }
  }

  &__header {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: v.$space-6;
    margin-bottom: v.$space-6;

    @include m.respond(lg) { grid-template-columns: 1fr; }
  }

  &__title { font-size: v.$fs-2xl; margin-bottom: v.$space-3; }
  &__desc { font-size: v.$fs-sm; margin-bottom: v.$space-4; }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: v.$space-2;
  }

  &__meta {
    @include m.card;
    padding: v.$space-5;
    display: flex;
    flex-direction: column;
    gap: v.$space-4;
    height: fit-content;

    div { display: flex; flex-direction: column; gap: 0.2rem; }
    span { font-size: v.$fs-xs; color: v.$color-text-muted; }
    strong { font-size: v.$fs-sm; }
    a { font-size: v.$fs-sm; color: v.$color-accent-soft-text; font-weight: 600; }
  }

  &__preview {
    border-radius: v.$radius-lg;
    min-height: 320px;
    background: linear-gradient(135deg, rgba(47,111,237,0.35), rgba(20,27,45,0.9));
    margin-bottom: v.$space-6;
  }

  &__tabs {
    @include m.flex(row, center, flex-start, v.$space-5);
    border-bottom: 1px solid v.$color-border;
    margin-bottom: v.$space-6;
    overflow-x: auto;
  }

  &__tab {
    background: none;
    border: none;
    padding: v.$space-3 0;
    font-size: v.$fs-sm;
    color: v.$color-text-muted;
    border-bottom: 2px solid transparent;
    white-space: nowrap;

    &.is-active {
      color: v.$color-text-primary;
      border-color: v.$color-accent;
    }
  }

  &__body {
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: v.$space-6;

    @include m.respond(lg) { grid-template-columns: 1fr; }
  }

  &__overview {
    h2 { font-size: v.$fs-md; margin-bottom: v.$space-3; }
    p { font-size: v.$fs-sm; }
  }

  &__features {
    @include m.card;
    padding: v.$space-5;
    height: fit-content;

    &-title { font-size: v.$fs-xs; color: v.$color-text-muted; font-weight: 600; }

    ul { margin-top: v.$space-4; display: flex; flex-direction: column; gap: v.$space-3; }

    li {
      display: flex;
      gap: v.$space-2;
      font-size: v.$fs-sm;

      span { color: v.$color-success; }
    }
  }

  &__empty {
    @include m.container;
    @include m.section-spacing;
    text-align: center;

    a { color: v.$color-accent-soft-text; font-weight: 600; }
  }
}
</style>
