<template>
  <div v-Mapbox>
    <div id="map"></div>
  </div>
</template>

<script setup>
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_TOKEN;

const props = defineProps(['map'])

const locations = {
  brighton: [-0.08301807205713319, 50.861667179460675],
  noosa: [153.10471635680273, -26.379446409041275],
  napier: [176.91818757121882, -39.489296708452656]
}

const getCoords = () => {
  if (typeof props.map === 'string') {
    return locations[props.map] || locations['noosa']
  }

  if (typeof props.map === 'number') {
    const arr = [locations.brighton, locations.noosa, locations.napier]
    return arr[props.map] || locations.noosa
  }

  return locations.noosa
}

const coords = getCoords()

const vMapbox = {
  mounted: () => {
    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: coords,
      zoom: 14,
    })
  },
}
</script>

<style scoped>
#map {
  height: 27vh;
}
</style>
