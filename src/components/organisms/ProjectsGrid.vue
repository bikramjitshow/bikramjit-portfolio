<template>
  <section class="projects">
    <div class="projects__inner">
      <SectionHeading eyebrow="FEATURED PROJECTS" :title="data.heading" :description="data.description" />

      <div class="projects__filters">
        <button
          v-for="filter in data.filters"
          :key="filter"
          class="projects__filter"
          :class="{ 'is-active': activeFilter === filter }"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <div class="projects__grid">
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionHeading from '@/components/molecules/SectionHeading.vue'
import ProjectCard from '@/components/molecules/ProjectCard.vue'
import data from '@/data/projects.json'

const activeFilter = ref('All')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return data.items
  return data.items.filter((p) => p.category === activeFilter.value)
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.projects {
  @include m.section-spacing;

  &__inner { @include m.container; }

  &__filters {
    @include m.flex(row, center, flex-start, v.$space-2);
    flex-wrap: wrap;
    margin-bottom: v.$space-6;
  }

  &__filter {
    background: v.$color-surface-alt;
    border: 1px solid v.$color-border-light;
    color: v.$color-text-secondary;
    border-radius: v.$radius-pill;
    padding: 0.5rem 1.1rem;
    font-size: v.$fs-xs;
    font-weight: 600;
    transition: all 0.2s ease;

    &.is-active {
      background: v.$color-accent;
      border-color: v.$color-accent;
      color: #fff;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: v.$space-5;

    @include m.respond(md) { grid-template-columns: 1fr; }
  }
}
</style>
