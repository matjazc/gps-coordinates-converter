import BigNumber from "bignumber.js";

const calculateToSeconds = location => {
  const absoluteDegrees = BigNumber(location).abs();
  const degrees = BigNumber(parseInt(absoluteDegrees));
  const minutes = BigNumber(
    parseInt(absoluteDegrees.minus(degrees).multipliedBy(60), 10)
  );
  const seconds = absoluteDegrees
    .minus(degrees)
    .minus(minutes.dividedBy(60))
    .multipliedBy(3600)
    .toFixed(3);

  return {
    degrees: degrees.toString(),
    minutes: minutes.toString(),
    seconds
  };
};

export default function ddToDms({ latitude, longitude }) {
  return {
    type: "dms",
    latitude: Object.assign({}, calculateToSeconds(latitude), {
      hemisphere: latitude < 0 ? "S" : "N"
    }),
    longitude: Object.assign({}, calculateToSeconds(longitude), {
      hemisphere: longitude < 0 ? "W" : "E"
    })
  };
}
