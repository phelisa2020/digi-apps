const colors = {
  blue: '25, 118, 210, 1',
  black: "0, 0, 0",
  white: "255, 255, 255",

};

const opacity = {
  none: "0",
  subtler: "10%",
  subtle: "25%",
  medium: "50%",
  strong: "75%",
  stronger: "90%",
  solid: "100%",
};

const radius = {
  none: "0",
  subtle: "2px",
  medium: "4px",
  strong: " 27px",
  circle: "50%",
};

const text = {
  s: {
    size: "0.875rem",
    spacing: "1%",
    height: " 110%",
    weight: "400",
  },
  m: {
    size: "1rem",
    spacing: "0",
    height: " 100%",
    weight: "400",
  },
  l: {
    size: "1.125rem",
    spacing: "-1%",
    height: " 95%",
    weight: "700",
  },
  xl: {
    size: "3rem",
    spacing: "-2%",
    height: " 90%",
    weight: "900",
  },
};

const spacing = {
  xs: " 0.25rem",
  s: "0.5rem",
  m: "1rem",
  l: "2rem",
  xl: "4rem",
  xxl: "8rem",
};


export const images = {
  xs: "0.875rem",
  s: "4rem",
  m: "8rem",
  l: "13rem",
};

export const tokens = {
  spacing,
  text,
  colors,
  opacity,
  images,
  radius,
};

export default tokens;
