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

const locations = {
  noosa: [153.10471635680273, -26.379446409041275],
  brighton: [-0.08301807205713319, 50.861667179460675],
}

const getCoords = () => {
  if (typeof props.map === 'string') {
    return locations[props.map] || locations['noosa']
  }

  if (typeof props.map === 'number') {
    const arr = [locations.noosa, locations.brighton]
    return arr[props.map] || locations.noosa
  }

  return locations.noosa
}

const coords = getCoords()

const vTest = {
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
