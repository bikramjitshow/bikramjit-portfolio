<template>
  <section class="about">
    <div class="about__inner">
      <div class="about__content">
        <BaseBadge variant="accent">ABOUT ME</BaseBadge>
        <h1 class="about__title">{{ profile.aboutHeading }}</h1>
        <p class="about__para">{{ profile.aboutParagraph1 }}</p>
        <p class="about__para">{{ profile.aboutParagraph2 }}</p>
        <div class="about__stats">
          <StatItem v-for="s in profile.aboutStats" :key="s.label" :value="s.value" :label="s.label" />
        </div>
      </div>

      <div class="about__side">
        <div class="about__photo"></div>
        <div class="about__strengths">
          <span class="about__strengths-title">My Core Strengths</span>
          <CoreStrengthItem
            v-for="item in profile.coreStrengths"
            :key="item.title"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
    </div>

    <div class="about__quote">
      <p>&ldquo;{{ profile.philosophy }}&rdquo;</p>
    </div>
  </section>
</template>

<script setup>
import BaseBadge from '@/components/atoms/BaseBadge.vue'
import StatItem from '@/components/atoms/StatItem.vue'
import CoreStrengthItem from '@/components/molecules/CoreStrengthItem.vue'
import profile from '@/data/profile.json'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.about {
  @include m.section-spacing;

  &__inner {
    @include m.container;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: v.$space-7;

    @include m.respond(lg) {
      grid-template-columns: 1fr;
    }
  }

  &__title {
    font-size: v.$fs-2xl;
    margin: v.$space-4 0 v.$space-4;
  }

  &__para {
    font-size: v.$fs-sm;
    margin-bottom: v.$space-4;
  }

  &__stats {
    display: flex;
    gap: v.$space-6;
    margin-top: v.$space-5;
  }

  &__side {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: v.$space-4;

    @include m.respond(sm) {
      grid-template-columns: 1fr;
    }
  }

  &__photo {
    border-radius: v.$radius-lg;
    background: linear-gradient(160deg, rgba(47,111,237,0.35), rgba(20,27,45,0.95));
    min-height: 260px;
  }

  &__strengths {
    @include m.card;
    padding: v.$space-5;
    display: flex;
    flex-direction: column;
    gap: v.$space-4;

    &-title {
      font-size: v.$fs-xs;
      color: v.$color-text-muted;
      font-weight: 600;
    }
  }

  &__quote {
    @include m.container;
    margin-top: v.$space-7;

    p {
      @include m.card;
      padding: v.$space-5;
      text-align: center;
      font-size: v.$fs-md;
      font-weight: 600;
      color: v.$color-text-primary;
      font-style: italic;
    }
  }
}
</style>
