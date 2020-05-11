<template>
  <v-form ref="form" @submit.prevent="validateAndConvert">
    <v-container>
      <v-row justify="center">
        <v-col class="pr-5" cols="12" xs="3" sm="8" md="9" lg="7" xl="5">
          <v-text-field
            label="Type or paste coordinates"
            v-model="userInput"
            :rules="validationRules"
            outlined="outlined"
            rounded="rounded"
            prepend-inner-icon="mdi-map-marker"
            clearable
            @input="showResults = false"
            @click:clear="showResults = false"
          ></v-text-field>
          <!--TODO: investigate odd transition behaviour-->
          <v-expand-transition>
            <v-card v-show="showResults" class="mx-auto" width="93%">
              <list-convertions :convertions="convertions"></list-convertions>
            </v-card>
          </v-expand-transition>
        </v-col>
        <div class="pt-3 text-xs-center">
          <v-btn rounded x-large color="indigo" dark @click="validateAndConvert"
            >Convert</v-btn
          >
        </div>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import ListConvertions from "./ListConvertions";
import matchInputWithMask from "../utils/matchHelper";
import converter from "../utils/converter/converter";
import config from "../utils/config";

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
      valid: false,
      validationRules: [],
    };
  },
  watch: {
    userInput() {
      this.validationRules = [];
    },
  },
  methods: {
    validateAndConvert() {
      this.validationRules = [
        (v) => !!v || "Coordinates are required",
        (v) =>
          config.regex.dd.test(v) ||
          config.regex.dm.test(v) ||
          config.regex.dms.test(v) ||
          "Unsupported format. Click here for instructions. ",
      ];
      let _this = this;
      setTimeout(function() {
        if (_this.$refs.form.validate()) {
          let location;
          try {
            location = matchInputWithMask(_this.userInput);
          } catch (error) {
            _this.convertions = [{ type: error }];
            _this.showResults = true;
            return;
          }
          _this.convertions = converter(location);
          _this.showResults = true;
          return;
        }
        _this.showResults = false;
      });
    },
  },
};
</script>
