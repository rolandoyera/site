
type FontProps = {
  family: {
    sans:string
    serif: string
  },
  size: {
    xs: string
    sm: string
    md: string
    lg: string 
    h1: string
    h2: string
  },
  weight: {
    md: number
  bold: number
  }
  height:number
  heading: {
    weight: number
    height: number
  }
};


export const Font: FontProps = {
  family: {
    sans:'Fira Sans, sans-serif',
    serif: '"Merriweather", serif',
  },
  size: {
    xs: '.85rem',
    sm: '.95rem',
    md: '1.1rem',
    lg: '1.3rem',
    h1: 'calc(1.6rem + 1.2vw)',
    h2: 'calc(1.3rem + .5vw)',
  },
  weight: {
    md: 300,
    bold: 500,  
  },
  height: 1.65,
  heading: {
    weight: 800,
    height: 1.4,
  }

}