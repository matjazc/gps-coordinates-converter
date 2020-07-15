<template>
  <div class="pb-2">
    <div class="pa-2" v-for="(convertion, index) in convertions" :key="index">
      <div v-if="convertion.type === 'dd'">
        <p class="title font-weight-light">DD.dddddd° (Decimal Degrees)</p>
        <p>{{ convertion.latitude }} {{ convertion.longitude }}</p>
        <v-divider></v-divider>
      </div>
      <div v-else-if="convertion.type === 'dm'">
        <p class="title font-weight-light">H DD° MM.mmm´ (Degrees Minutes)</p>
        <p>
          {{ convertion.latitude.hemisphere }}
          {{ convertion.latitude.degrees }}
          {{ convertion.latitude.minutes }}

          {{ convertion.longitude.hemisphere }}
          {{ convertion.longitude.degrees }}
          {{ convertion.longitude.minutes }}
        </p>
        <v-divider></v-divider>
      </div>
      <div v-else-if="convertion.type === 'dms'">
        <p class="title font-weight-light">
          H DD° MM´ SS.sss´´ (Degrees Minutes Seconds)
        </p>
        <p>
          {{ convertion.latitude.hemisphere }}
          {{ convertion.latitude.degrees }}
          {{ convertion.latitude.minutes }}
          {{ convertion.latitude.seconds }}

          {{ convertion.longitude.hemisphere }}
          {{ convertion.longitude.degrees }}
          {{ convertion.longitude.minutes }}
          {{ convertion.longitude.seconds }}
        </p>
        <v-divider></v-divider>
      </div>
      <div v-else>
        <p class="title font-weight-light">{{ convertion.type }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListConvertions",
  props: ["convertions"]
};
</script>
