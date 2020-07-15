import BigNumber from "bignumber.js";
const ONE_SECOND_IN_MINUTES = BigNumber(0.01666667);

const calculateFromMinutesOnlyToMinutesAndSeconds = ({
  hemisphere,
  degrees,
  minutes
}) => {
  const minutesInteger = BigNumber(parseInt(minutes));

  return {
    hemisphere,
    degrees: degrees.toString(),
    minutes: minutesInteger.toString(),
    seconds: BigNumber(minutes)
      .minus(minutesInteger)
      .dividedBy(ONE_SECOND_IN_MINUTES)
      .toFixed(3)
  };
};

export default function dmToDms({ latitude, longitude }) {
  return {
    type: "dms",
    latitude: calculateFromMinutesOnlyToMinutesAndSeconds(latitude),
    longitude: calculateFromMinutesOnlyToMinutesAndSeconds(longitude)
  };
}
