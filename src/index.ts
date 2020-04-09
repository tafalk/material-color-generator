const lightColorsMap = new Map([
  [1, "ffebee"],
  [2, "ffcdd2"],
  [3, "ef9a9a"],
  [4, "e57373"],
  [5, "fce4ec"],
  [6, "f8bbd0"],
  [7, "f48fb1"],
  [8, "f3e5f5"],
  [9, "e1bee7"],
  [10, "ce93d8"],
]);

const darkColorsMap = new Map([
  [1, "ef5350"],
  [2, "f44336"],
  [3, "e53935"],
  [4, "d32f2f"],
  [5, "c62828"],
  [6, "b71c1c"],
  [7, "f06292"],
  [8, "ec407a"],
  [9, "e91e63"],
  [10, "d81b60"],
  [11, "c2185b"],
  [12, "ad1457"],
  [13, "880e4f"],
  [14, "ba68c8"],
  [15, "9c27b0"],
  [16, "8e24aa"],
  [17, "7b1fa2"],
  [18, "6a1b9a"],
  [19, "4a148c"],
]);

const hash = (s: string) => {
  /* Simple hash function. */
  var a = 1,
    c = 0,
    h,
    o;
  if (s) {
    a = 0;
    /*jshint plusplus:false bitwise:false*/
    for (h = s.length - 1; h >= 0; h--) {
      o = s.charCodeAt(h);
      a = ((a << 6) & 268435455) + o + (o << 14);
      c = a & 266338304;
      a = c !== 0 ? a ^ (c >> 21) : a;
    }
  }
  return String(a);
};
const getColor = (str: string, mode: string) => {
  const validInputModes = ["light", "dark"];
  if (!validInputModes.includes(mode)) {
    throw new Error(
      `If an argument is specified it should be one of ${validInputModes}`
    );
  }
  const modeDefault = mode === "light" ? "ffffff" : "000000";
  const modeMap = mode === "light" ? lightColorsMap : darkColorsMap;
  const range = modeMap.size;

  const h = hash(str);
  const hInt = parseInt(`${h.charAt(0)}${h.charAt(h.length - 1)}`); // [0, 256]
  const calcIndex = Math.floor((hInt * range) / 256) + 1;
  return modeMap.get(calcIndex) ?? modeDefault;
};

export { getColor };
