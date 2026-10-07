<template>
  <section class="resume">
    <div class="resume__inner">
      <div class="resume__content">
        <h1 class="resume__title">{{ data.heading }}</h1>
        <p class="resume__desc">{{ data.description }}</p>
        <div class="resume__actions">
          <BaseButton :href="data.pdfUrl" variant="primary">Download Resume (PDF)</BaseButton>
          <BaseButton :href="data.pdfUrl" variant="ghost">View Online</BaseButton>
        </div>
        <div class="resume__stats">
          <StatItem v-for="s in data.stats" :key="s.label" :value="s.value" :label="s.label" />
        </div>
      </div>
      <div class="resume__preview">
        <div class="resume__preview-card"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '@/components/atoms/BaseButton.vue'
import StatItem from '@/components/atoms/StatItem.vue'
import data from '@/data/resume.json'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.resume {
  @include m.section-spacing;

  &__inner {
    @include m.container;
    display: grid;
    grid-template-columns: 1fr 0.9fr;
    gap: v.$space-7;
    align-items: center;

    @include m.respond(lg) { grid-template-columns: 1fr; }
  }

  &__title { font-size: v.$fs-2xl; margin-bottom: v.$space-4; }
  &__desc { font-size: v.$fs-sm; margin-bottom: v.$space-5; max-width: 480px; }

  &__actions {
    @include m.flex(row, center, flex-start, v.$space-3);
    margin-bottom: v.$space-6;
    flex-wrap: wrap;
  }

  &__stats {
    @include m.flex(row, center, flex-start, v.$space-6);
  }

  &__preview {
    @include m.flex(row, center, center);

    &-card {
      width: 100%;
      aspect-ratio: 3 / 4;
      max-width: 340px;
      border-radius: v.$radius-lg;
      background: linear-gradient(160deg, rgba(255,255,255,0.9), rgba(200,210,230,0.8));
      box-shadow: v.$shadow-card;
    }
  }
}
</style>
