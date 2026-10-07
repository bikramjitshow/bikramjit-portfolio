<template>
  <section class="hero">
    <div class="hero__inner">
      <div class="hero__content">
        <BaseBadge variant="accent">{{ profile.role }}</BaseBadge>
        <h1 class="hero__title">
          {{ profile.heroTitleLine1 }}<br />
          <span class="hero__title-accent">{{ profile.heroTitleLine2 }}</span>
        </h1>
        <p class="hero__desc">{{ profile.heroDescription }}</p>
        <div class="hero__actions">
          <BaseButton to="/projects" variant="primary">View Projects</BaseButton>
          <BaseButton to="/contact" variant="secondary">Contact Me</BaseButton>
        </div>
        <div class="hero__stack">
          <span v-for="tech in profile.heroStack" :key="tech">{{ tech }}</span>
        </div>
        <div class="hero__stats">
          <StatItem v-for="s in profile.heroStats" :key="s.label" :value="s.value" :label="s.label" />
          <p class="hero__note">{{ profile.heroNote }}</p>
        </div>
      </div>
      <div class="hero__visual">
        <div class="hero__visual-card"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseBadge from '@/components/atoms/BaseBadge.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import StatItem from '@/components/atoms/StatItem.vue'
import profile from '@/data/profile.json'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.hero {
  @include m.section-spacing;

  &__inner {
    @include m.container;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: v.$space-7;
    align-items: center;

    @include m.respond(lg) {
      grid-template-columns: 1fr;
    }
  }

  &__title {
    font-size: v.$fs-3xl;
    margin: v.$space-4 0 v.$space-4;

    &-accent { color: v.$color-accent-soft-text; }
  }

  &__desc {
    font-size: v.$fs-sm;
    max-width: 520px;
    margin-bottom: v.$space-5;
  }

  &__actions {
    @include m.flex(row, center, flex-start, v.$space-3);
    margin-bottom: v.$space-6;
    flex-wrap: wrap;
  }

  &__stack {
    @include m.flex(row, center, flex-start, v.$space-4);
    flex-wrap: wrap;
    font-size: v.$fs-xs;
    color: v.$color-text-muted;
    margin-bottom: v.$space-6;
    padding-bottom: v.$space-6;
    border-bottom: 1px solid v.$color-border;
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(3, auto) 1fr;
    gap: v.$space-5;
    align-items: center;

    @include m.respond(md) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__note {
    font-size: v.$fs-xs;
    color: v.$color-text-muted;
    max-width: 200px;
  }

  &__visual {
    @include m.flex(row, center, center);

    &-card {
      width: 100%;
      aspect-ratio: 4 / 3;
      border-radius: v.$radius-lg;
      background: linear-gradient(135deg, rgba(47,111,237,0.35), rgba(20,27,45,0.9));
      box-shadow: v.$shadow-glow;
    }
  }
}
</style>
