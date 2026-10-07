<template>
  <header class="site-header">
    <div class="site-header__inner">
      <LogoMark :name="nav.brand" />
      <nav class="site-header__nav" :class="{ 'is-open': menuOpen }">
        <RouterLink
          v-for="link in nav.links"
          :key="link.path"
          :to="link.path"
          class="site-header__link"
          :class="{ 'is-active': isActive(link.path) }"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
      <BaseButton :to="nav.cta.path" size="sm" class="site-header__cta">{{ nav.cta.label }}</BaseButton>
      <button class="site-header__toggle" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import LogoMark from '@/components/atoms/LogoMark.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import nav from '@/data/navigation.json'

const route = useRoute()
const menuOpen = ref(false)

function isActive(path) {
  return route.path === path
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(10, 14, 23, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid v.$color-border;

  &__inner {
    @include m.container;
    height: v.$header-height;
    @include m.flex(row, center, space-between);
  }

  &__nav {
    @include m.flex(row, center, center, v.$space-6);

    @include m.respond(lg) {
      position: fixed;
      top: v.$header-height;
      left: 0;
      right: 0;
      background: v.$color-bg-alt;
      flex-direction: column;
      align-items: flex-start;
      padding: v.$space-5;
      gap: v.$space-4;
      border-bottom: 1px solid v.$color-border;
      transform: translateY(-150%);
      transition: transform 0.25s ease;

      &.is-open { transform: translateY(0); }
    }
  }

  &__link {
    font-size: v.$fs-sm;
    color: v.$color-text-secondary;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover { color: v.$color-text-primary; }
    &.is-active { color: v.$color-text-primary; }
  }

  &__cta {
    @include m.respond(sm) { display: none; }
  }

  &__toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    padding: v.$space-2;

    span {
      width: 22px;
      height: 2px;
      background: v.$color-text-primary;
    }

    @include m.respond(lg) {
      display: flex;
    }
  }
}
</style>
