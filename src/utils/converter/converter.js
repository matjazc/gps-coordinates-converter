import config from "../config";

function selectConversionLogic(location, convertTo) {
  if (location.type === convertTo) {
    return location;
  }

  return config.selectConversionLogic[location.type][convertTo](location);
}

export default function converter(location) {
  return config.coordinateTypes.map(type =>
    selectConversionLogic(location, type)
  );
}
