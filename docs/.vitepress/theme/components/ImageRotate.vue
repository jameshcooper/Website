<template>
  <img class="VPImage image-src" :src="currentImage" :alt="currentAlt" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
const currentImage = ref('');
const currentAlt = ref('');

const props = defineProps(['album']);

function updateImage() {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 12) {
    currentImage.value = props.album.image_am.src;
    currentAlt.value = props.album.image_am.alt;
  } else {
    currentImage.value = props.album.image_pm.src;
    currentAlt.value = props.album.image_pm.alt;
  }
}

onMounted(() => {
  updateImage();
});
</script>