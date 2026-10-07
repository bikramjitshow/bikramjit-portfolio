<template>
  <ProjectCaseStudy :project="project" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProjectCaseStudy from '@/components/organisms/ProjectCaseStudy.vue'
import { usePortfolioStore } from '@/stores/portfolio'

const route = useRoute()
const portfolioStore = usePortfolioStore()

const project = computed(() => portfolioStore.getProjectById(route.params.id))
</script>
