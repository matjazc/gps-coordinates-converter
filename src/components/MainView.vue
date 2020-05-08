<template>
  <v-container>
    <v-row justify="center">
      <v-col class="pr-5" cols="12" xs="3" sm="8" md="9" lg="7" xl="5">
        <v-text-field
          label="Type or paste coordinates"
          outlined="outlined"
          rounded="rounded"
          prepend-inner-icon="mdi-map-marker"
          clearable
          @click:clear="closeResultsCard()"
        ></v-text-field>
        <v-expand-transition>
          <v-card v-show="isResultsCardShown" class="mx-auto" width="93%">
            <list-convertions></list-convertions>
          </v-card>
        </v-expand-transition>
      </v-col>
      <div class="pt-3 text-xs-center">
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
</template>

<script>
import ListConvertions from "./ListConvertions";
export default {
  name: "MainView",
  components: {
    ListConvertions,
  },
  data() {
    return {
      isResultsCardShown: false,
    };
  },
  methods: {
    closeResultsCard() {
      this.isResultsCardShown = false;
    },
  },
};
</script>
