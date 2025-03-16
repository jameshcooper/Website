<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
import { useData, useRoute } from 'vitepress'
import { computed, ref, onMounted } from 'vue'

const { frontmatter } = useData()
const route = useRoute()

// Extract the slug from the current route path
const firstWord = computed(() => {
  const path = route.path
  const segments = path.replace(/^\/|\/$/g, '').split('/')
  const lastSegment = segments[segments.length - 1] || ''
  const slug = lastSegment.replace(/\.html$/, '')
  return slug.split('-')[0]
})

const isMobile = ref(false)

onMounted(() => {
  checkIsMobile()
  window.addEventListener('resize', checkIsMobile)
})

const checkIsMobile = () => {
  isMobile.value = window.innerWidth < 1280;
}

</script>

<template>
  <Layout>
    <template #home-hero-image>
      <div class="image">
        <div class="image-container">
          <div class="image-bg"></div>
          <img class="VPImage image-src" :src="frontmatter.hero.image.src" :alt="frontmatter.hero.image.alt">
        </div>
      </div>
    </template>

    <template #aside-outline-after>
      <div v-if="!isMobile"> <Map :map="firstWord" />
      </div>
    </template>

    <template #doc-footer-before>
      <div v-if="isMobile"> <Map :map="firstWord" />
      </div>
    </template>

  </Layout>
</template>

<style scoped>
.image-src {
  background: #fff;
  border: 1px solid #fff;
}
</style>