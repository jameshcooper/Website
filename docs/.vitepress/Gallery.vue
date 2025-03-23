<template>
  <ul :id="props.display == 2 ? 'thumb' : 'gallery'">
    <li
      v-for="(item, index) in displayedItems"
      :key="index"
      @click="showImage(index)"
    >
      <img :src="item.thumb" :alt="item.title" />
    </li>
  </ul>
  <VueEasyLightbox
    :visible="visibleRef"
    :imgs="displayedItems"
    :index="currentIndex"
    @hide="onHide"
  >
  </VueEasyLightbox>
</template>

<script setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import noosa from './gallery-noosa.json'
import seagulls from './gallery-seagulls.json'
import napier from './gallery-napier.json'

const props = defineProps(['album', 'display', 'sliceStart', 'sliceEnd'])
const arr = [noosa, seagulls, napier]
const items = arr[props.album]

const sliceStart = parseInt(props.sliceStart) || 0
const sliceEnd = parseInt(props.sliceEnd) || items.length

const visibleRef = ref(false)
const currentIndex = ref(0)
const displayedItems = items.slice(sliceStart, sliceEnd)

const showImage = index => {
  currentIndex.value = index
  visibleRef.value = true
}

const onHide = () => {
  visibleRef.value = false
}
</script>

<style scoped>
#gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(358px, 1fr));
  gap: 2px;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#gallery li {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 250px;
  cursor: pointer;
}

#thumb {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 4px;
  padding: 8px;
  list-style-type: none;
  margin: 0;
  white-space: nowrap;
  scrollbar-width: thin;
  align-items: center;
}

#thumb li {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  height: 100px;
  width: 100px;
  flex: 0 0 100px;
  cursor: pointer;
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
