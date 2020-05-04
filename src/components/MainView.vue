<template>
  <v-container>
    <v-row align="start" justify="center">
      <v-container style=" width: 60%">
        <v-row>
          <v-text-field
            class="pr-5"
            label="Type or paste coordinates"
            outlined="outlined"
            rounded="rounded"
            prepend-inner-icon="mdi-map-marker"
            clearable
            @click:clear="closeResultsCard()"
          ></v-text-field>
          <div class="text-xs-center">
            <v-btn
              rounded
              x-large
              color="indigo"
              dark
              @click="isResultsCardShown = true"
              >Convert</v-btn
            >
          </div>
        </v-row>
      </v-container>
    </v-row>
    <v-row align="start" justify="center">
      <v-expand-transition>
        <v-card
          v-show="isResultsCardShown"
          height="100"
          width="60%"
          class="mx-auto"
        ></v-card>
      </v-expand-transition>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MainView",
  data() {
    return {
      isResultsCardShown: false
    };
  },
  methods: {
    closeResultsCard() {
      this.isResultsCardShown = false;
    }
  }
};
</script>
