<template>
  <section class="skills">
    <div class="skills__inner">
      <SectionHeading eyebrow="SKILLS & TECHNOLOGIES" :title="skills.heading" :description="skills.description" />
      <div class="skills__grid">
        <SkillCategoryCard v-for="cat in skills.categories" :key="cat.id" :category="cat" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from '@/components/molecules/SectionHeading.vue'
import SkillCategoryCard from '@/components/molecules/SkillCategoryCard.vue'
import skills from '@/data/skills.json'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.skills {
  @include m.section-spacing;

  &__inner { @include m.container; }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: v.$space-5;

    @include m.respond(lg) { grid-template-columns: repeat(2, 1fr); }
    @include m.respond(sm) { grid-template-columns: 1fr; }
  }
}
</style>
