<template>
  <div class="pb-2">
    <div class="pa-2" v-for="(convertion, index) in convertions" :key="index">
      <p class="title font-weight-light">{{ convertion.type }}</p>
      <p>{{ convertion.lat }}</p>
      <p>{{ convertion.long }}</p>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script>
const hardcode_example = [
  {
    type: "Decimal Degrees",
    lat: "12.1234",
    long: "-45.6789",
  },
  {
    type: "Degress Minutes",
    lat: "N 12 7.404",
    long: "W 45 40.734",
  },
  {
    type: "Degress Minutes Seconds",
    lat: "N 12 7 24.240",
    long: "W 45 40 44.040",
  },
];
export default {
  name: "ListConvertions",
  data() {
    return {
      convertions: hardcode_example,
    };
  },
};
</script>
