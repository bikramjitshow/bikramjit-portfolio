<template>
  <section class="experience">
    <div class="experience__inner">
      <div class="experience__header">
        <SectionHeading eyebrow="WORK EXPERIENCE" :title="experience.heading" :description="experience.description" />
        <div class="experience__total">
          <span>Total Experience</span>
          <strong>{{ experience.totalExperience }}</strong>
        </div>
      </div>
      <div class="experience__timeline">
        <TimelineItem
          v-for="entry in experience.timeline"
          :key="entry.id"
          :entry="entry"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from '@/components/molecules/SectionHeading.vue'
import TimelineItem from '@/components/molecules/TimelineItem.vue'
import experience from '@/data/experience.json'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.experience {
  @include m.section-spacing;

  &__inner { @include m.container; }

  &__header {
    @include m.flex(row, flex-start, space-between);
    gap: v.$space-5;
    flex-wrap: wrap;
  }

  &__total {
    @include m.card;
    padding: v.$space-4 v.$space-5;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: v.$space-1;

    span { font-size: v.$fs-xs; color: v.$color-text-muted; }
    strong { font-size: v.$fs-lg; color: v.$color-accent-soft-text; }
  }

  &__timeline {
    margin-top: v.$space-6;
  }
}
</style>
