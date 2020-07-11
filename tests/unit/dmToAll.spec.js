import converter from "../../src/utils/converter/converter";

describe("Degrees Minutes (H DD° MM.mmm´) to all", () => {
  it("location: Chile", () => {
    const location = {
      type: "dm",
      latitude: {
        hemisphere: "S",
        degrees: 35,
        minutes: 40.509
      },
      longitude: {
        hemisphere: "W",
        degrees: 71,
        minutes: 32.578
      }
    };

    const result = converter(location);

    expect(result).toEqual([
      { latitude: "-35.675150", longitude: "-71.542967", type: "dd" },
      {
        latitude: { degrees: 35, hemisphere: "S", minutes: 40.509 },
        longitude: { degrees: 71, hemisphere: "W", minutes: 32.578 },
        type: "dm"
      },
      {
        latitude: {
          degrees: "35",
          hemisphere: "S",
          minutes: "40",
          seconds: "30.540"
        },
        longitude: {
          degrees: "71",
          hemisphere: "W",
          minutes: "32",
          seconds: "34.680"
        },
        type: "dms"
      }
    ]);
  });

  it("location: Ljubljana", () => {
    const location = {
      type: "dm",
      latitude: {
        hemisphere: "N",
        degrees: 46,
        minutes: 3.417
      },
      longitude: {
        hemisphere: "E",
        degrees: 14,
        minutes: 30.345
      }
    };

    const result = converter(location);

    expect(result).toEqual([
      { latitude: "46.056950", longitude: "14.505750", type: "dd" },
      {
        latitude: { degrees: 46, hemisphere: "N", minutes: 3.417 },
        longitude: { degrees: 14, hemisphere: "E", minutes: 30.345 },
        type: "dm"
      },
      {
        latitude: {
          degrees: "46",
          hemisphere: "N",
          minutes: "3",
          seconds: "25.020"
        },
        longitude: {
          degrees: "14",
          hemisphere: "E",
          minutes: "30",
          seconds: "20.700"
        },
        type: "dms"
      }
    ]);
  });

  it("location: New York", () => {
    const location = {
      type: "dm",
      latitude: {
        hemisphere: "N",
        degrees: 40,
        minutes: 44.514
      },
      longitude: {
        hemisphere: "W",
        degrees: 73,
        minutes: 59.358
      }
    };

    const result = converter(location);

    expect(result).toEqual([
      { latitude: "40.741900", longitude: "-73.989300", type: "dd" },
      {
        latitude: { degrees: 40, hemisphere: "N", minutes: 44.514 },
        longitude: { degrees: 73, hemisphere: "W", minutes: 59.358 },
        type: "dm"
      },
      {
        latitude: {
          degrees: "40",
          hemisphere: "N",
          minutes: "44",
          seconds: "30.840"
        },
        longitude: {
          degrees: "73",
          hemisphere: "W",
          minutes: "59",
          seconds: "21.480"
        },
        type: "dms"
      }
    ]);
  });

  it("location: Auckland", () => {
    const location = {
      type: "dm",
      latitude: {
        hemisphere: "S",
        degrees: 36,
        minutes: 50.908
      },
      longitude: {
        hemisphere: "E",
        degrees: 174,
        minutes: 45.8
      }
    };

    const result = converter(location);

    expect(result).toEqual([
      { latitude: "-36.848467", longitude: "174.763333", type: "dd" },
      {
        latitude: { degrees: 36, hemisphere: "S", minutes: 50.908 },
        longitude: { degrees: 174, hemisphere: "E", minutes: 45.8 },
        type: "dm"
      },
      {
        latitude: {
          degrees: "36",
          hemisphere: "S",
          minutes: "50",
          seconds: "54.480"
        },
        longitude: {
          degrees: "174",
          hemisphere: "E",
          minutes: "45",
          seconds: "48.000"
        },
        type: "dms"
      }
    ]);
  });
});
