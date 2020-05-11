import dmsToDm from "../converters/dmsToDm";
import ddToDms from "../converters/ddToDms";

export default function ddToDm(location) {
  return dmsToDm(ddToDms(location));
}
