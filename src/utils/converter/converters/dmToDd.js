import dmsToDd from "../converters/dmsToDd";
import dmToDms from "../converters/dmToDms";

export default function dmToDd(location) {
  return dmsToDd(dmToDms(location));
}
