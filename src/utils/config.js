/* eslint-disable no-useless-escape */

//REGEX descrition:

//DD input must be in format: "12.1234, -45.6789"

//DM input must be in format: "N120 60.000, W96 16.379"
//degress must be < 180
//minutes must be < 60
//minutes must have exactly 3x decimals

//DMS input must be in format: "S120 45 13.3, E99 60 8.9"
//degress must be < 180
//minutes & seconds must be < 60
//seconds must have exactly 1x decimal

import dmsToDm from "./converter/converters/dmsToDm";
import dmsToDd from "./converter/converters/dmsToDd";
import ddToDms from "./converter/converters/ddToDms";
import ddToDm from "./converter/converters/ddToDm";
import dmToDms from "./converter/converters/dmToDms";
import dmToDd from "./converter/converters/dmToDd";

const config = {
  coordinateTypes: ["dd", "dm", "dms"],
  regex: {
    dd: /^(-?[0-9]|-?[1-9][0-9]|-?1[1-7][0-9]|-?180)\b(\.)?([0-9]{0,7})\, (-?[0-9]|-?[1-9][0-9]|-?1[1-7][0-9]|-?180)\b(\.)?([0-9]{0,7})/,
    dm: /^([N]|[S])([0-9]|[1-9][0-9]|1[1-7][0-9]|180)\b(\ )([0-9]|[1-5][0-9]|60)(\.)([0-9][0-9][0-9])\b, ([E]|[W])([0-9]|[1-9][0-9]|1[1-7][0-9]|180)\b(\ )([0-9]|[1-5][0-9]|60)(\.)([0-9][0-9][0-9])\b/,
    dms: /^([N]|[S])([0-9]|[1-9][0-9]|1[1-7][0-9]|180)\b(\ )([0-9]|[1-5][0-9]|60)\b(\ )([0-9]|[1-5][0-9]|60)(\.)([0-9])\b, ([E]|[W])([0-9]|[1-9][0-9]|1[1-7][0-9]|180)\b(\ )([0-9]|[1-5][0-9]|60)\b(\ )([0-9]|[1-5][0-9]|60)(\.)([0-9])\b/
  },
  selectConversionLogic:{
    dms: {
      dm: dmsToDm,
      dd: dmsToDd,
    },

    dd: {
      dms: ddToDms,
      dm: ddToDm,
    },

    dm: {
      dms: dmToDms,
      dd: dmToDd,
    },
  }
};

export default config;
