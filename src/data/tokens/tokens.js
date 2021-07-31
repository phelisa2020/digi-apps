const colors = {
    blue: {
        none:'rgba(0, 0, 0, 0)',
        lighter:'rgba(25, 118, 210, 0.1)',
        light:'rgba(25, 118, 210, 0.25)',
        medium:'rgba(25, 118, 210, 0.5)',
        strong:'rgba(25, 118, 210, 0.75)',
        stronger:'rgba(25, 118, 210, 0.9)',
        solid:'rgba(25, 118, 210, 1)',
    },
    black: {
        none:'rgba(0, 0, 0, 0)',
        lighter:'rgba(0, 0, 0, 0.1)',
        light:'rgba(0, 0, 0, 0.25)',
        medium:'rgba(0, 0, 0, 0.5)',
        strong:'rgba(0, 0, 0, 0.75)',
        stronger:'rgba(0, 0, 0, 0.9)',
        solid:'rgba(0, 0, 0, 1)',

    }

}

const radius = {
    none: '0',
    subtle: '2px',
    medium: '4px',
    strong: '27px',
    pill: '1rem',
    coircle: '50%',

}

const opacity = {
    none: '0',
    subtler: '10%',
    subtle: '25%',
    meduim: '50%',
    strong: '75%',
    stronger: '90%',
    solid: '100%'
}

const text = {
    s: {
        size: '0.875rem',
        height: '110%',
        weight: '400',
        spacing: '1%',
    },
    m: {
        size: '1rem',
        height: '100%',
        weight: '400',
        spacing: '0%',
    },
    l: {
        size: '1.125rem',
        height: '95%',
        weight: '700',
        spacing: '-1%',
    },
    xl: {
        size: '3rem',
        height: '90%',
        weight: '900',
        spacing: '-2%',
    }
}

const shade= {

}

const highlight = {
    white: {
        none:'rgba(255, 255, 255, 0)',
        lighter:'rgba(255, 255, 255, 0.1)',
        light:'rgba(255, 255, 255, 0.25)',
        medium:'rgba(255, 255, 255, 0.5)',
        strong:'rgba(255, 255, 255, 0.75)',
        stronger:'rgba(255, 255, 255, 0.9)',
        solid:'rgba(255, 255, 255, 1)',
    }
}

const spacing = {
    xs: '0.25rem',
    s: '0.5rem',
    m: '1rem',
    l: '2rem',
    xl: '4rem',
    xxl: '8rem',
}

export const images = {
  xs: '0.075rem',
  s: '4rem',
  m: '8rem',
  l: '13rem'  
}

export const tokens = {
    spacing,
    text,
    colors,
    opacity,
    radius,
    highlight,
}

export default tokens


