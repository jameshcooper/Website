<template>
  <div v-test>
    <div id="map"></div>
  </div>
</template>

<script setup>
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
  'pk.eyJ1IjoiamFtZXNoY29vcGVyMTMiLCJhIjoiY2x3eDkyejYzMThtZTJscjNranFoMWZ0dyJ9.iIncNb7BEN8_Js7ZHbl5HQ'

const props = defineProps(['map'])

// Define your coordinates with location names as keys
const locations = {
  noosa: [153.10471635680273, -26.379446409041275],
  noosa2: [153.10471635680273, -26.379446409041275],
}

// Get the coordinates based on the map prop
const getCoords = () => {
  // If props.map is a string (like 'noosa'), look it up in the locations object
  if (typeof props.map === 'string') {
    return locations[props.map] || locations['noosa'] // default to noosa if not found
  }

  // If props.map is a number, use it as an index (keeping backward compatibility)
  if (typeof props.map === 'number') {
    const arr = [locations.noosa, locations.noosa2]
    return arr[props.map] || locations.noosa
  }

  // Default
  return locations.noosa
}

const coords = getCoords()

const vTest = {
  mounted: () => {
    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: coords,
      zoom: 10,
    })
  },
}
</script>

<style scoped>
#map {
  height: 27vh;
}
</style>
