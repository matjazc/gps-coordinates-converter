import converter from "../../src/utils/converter/converter";

describe("(DD.dddddd°) Decimal Degrees to all", () => {
  it("location: Chile", () => {
    const location = {
      type: "dd",
      latitude: -35.675147,
      longitude: -71.542968
    };

    const result = converter(location);

    expect(result).toEqual([
      { latitude: -35.675147, longitude: -71.542968, type: "dd" },
      {
        latitude: { degrees: "35", hemisphere: "S", minutes: "40.509" },
        longitude: { degrees: "71", hemisphere: "W", minutes: "32.578" },
        type: "dm"
      },
      {
        latitude: {
          degrees: "35",
          hemisphere: "S",
          minutes: "40",
          seconds: "30.529"
        },
        longitude: {
          degrees: "71",
          hemisphere: "W",
          minutes: "32",
          seconds: "34.685"
        },
        type: "dms"
      }
    ]);
  });

  it("location: Ljubljana", () => {
    const location = {
      type: "dd",
      latitude: 46.056946,
      longitude: 14.505751
    };

    const result = converter(location);

    expect(result).toEqual([
      { latitude: 46.056946, longitude: 14.505751, type: "dd" },
      {
        latitude: { degrees: "46", hemisphere: "N", minutes: "3.417" },
        longitude: { degrees: "14", hemisphere: "E", minutes: "30.345" },
        type: "dm"
      },
      {
        latitude: {
          degrees: "46",
          hemisphere: "N",
          minutes: "3",
          seconds: "25.006"
        },
        longitude: {
          degrees: "14",
          hemisphere: "E",
          minutes: "30",
          seconds: "20.704"
        },
        type: "dms"
      }
    ]);
  });

  it("location: New York", () => {
    const location = {
      type: "dd",
      latitude: 40.741895,
      longitude: -73.989308
    };

    const result = converter(location);

    expect(result).toEqual([
      { latitude: 40.741895, longitude: -73.989308, type: "dd" },
      {
        latitude: { degrees: "40", hemisphere: "N", minutes: "44.514" },
        longitude: { degrees: "73", hemisphere: "W", minutes: "59.358" },
        type: "dm"
      },
      {
        latitude: {
          degrees: "40",
          hemisphere: "N",
          minutes: "44",
          seconds: "30.822"
        },
        longitude: {
          degrees: "73",
          hemisphere: "W",
          minutes: "59",
          seconds: "21.509"
        },
        type: "dms"
      }
    ]);
  });

  it("location: Auckland", () => {
    const location = {
      type: "dd",
      latitude: -36.848459,
      longitude: 174.763331
    };

    const result = converter(location);

    expect(result).toEqual([
      { latitude: -36.848459, longitude: 174.763331, type: "dd" },
      {
        latitude: { degrees: "36", hemisphere: "S", minutes: "50.908" },
        longitude: { degrees: "174", hemisphere: "E", minutes: "45.800" },
        type: "dm"
      },
      {
        latitude: {
          degrees: "36",
          hemisphere: "S",
          minutes: "50",
          seconds: "54.452"
        },
        longitude: {
          degrees: "174",
          hemisphere: "E",
          minutes: "45",
          seconds: "47.992"
        },
        type: "dms"
      }
    ]);
  });
});
