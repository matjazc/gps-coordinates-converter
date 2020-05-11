<template>
  <v-container>
    <v-row justify="center">
      <v-col class="pr-5" cols="12" xs="3" sm="8" md="9" lg="7" xl="5">
        <v-text-field
          label="Type or paste coordinates"
          v-model="userInput"
          outlined="outlined"
          rounded="rounded"
          prepend-inner-icon="mdi-map-marker"
          clearable
          @click:clear="showResults = false"
        ></v-text-field>
        <!-- <v-expand-transition> TODO: investigate odd transition behaviour-->
        <v-card v-show="showResults" class="mx-auto" width="93%">
          <list-convertions :convertions="convertions"></list-convertions>
        </v-card>
        <!-- </v-expand-transition> -->
      </v-col>
      <div class="pt-3 text-xs-center">
        <v-btn rounded x-large color="indigo" dark @click="convert"
          >Convert</v-btn
        >
      </div>
    </v-row>
  </v-container>
</template>

<script>
import ListConvertions from "./ListConvertions";
import matchInputWithMask from "../utils/matchHelper";
import converter from "../utils/converter/converter";

export default {
  name: "MainView",
  components: {
    ListConvertions,
  },
  data() {
    return {
      userInput: "",
      convertions: [],
      showResults: false,
    };
  },
  methods: {
    convert() {
      let location;
      try {
        location = matchInputWithMask(this.userInput);
      } catch (error) {
        this.convertions = [{ type: error }];
        this.showResults = true;
        return;
      }
      this.convertions = converter(location);
      this.showResults = true;
    },
  },
};
</script>
