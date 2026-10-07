<template>
  <section class="services">
    <div class="services__inner">
      <SectionHeading eyebrow="WHAT I OFFER" :title="data.heading" :description="data.description" />
      <div class="services__grid">
        <ServiceCard v-for="service in data.items" :key="service.id" :service="service" />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from '@/components/molecules/SectionHeading.vue'
import ServiceCard from '@/components/molecules/ServiceCard.vue'
import data from '@/data/services.json'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as v;
@use '@/assets/scss/mixins' as m;

.services {
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
