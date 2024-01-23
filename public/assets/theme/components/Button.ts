export const Button = {
  variants: {
    primary: {
      _hover: {
        color: "white.100",
        bg: "blue.700",
      },
      color: "white.100",
      bg: "blue.700",
      borderRadius: '100px'
    },
    OutlineBlack:{
      bg:'transoarent',
      color: 'gray.900',
      border:'1px solid #98A2B3',
      boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      _hover:{
        bg:'transoarent',
        color: 'gray.900',
        border:'1px solid #98A2B3',
        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      }
    },
    NoOutlinePrimary:{
      color: "blue.700",
      _hover:{
        color: "blue.700",
        bg:'transparent'
      },
      bg:"transparent"
    },
    secondary: {
      _hover: {
        color: "gray.900",
        bg: "transparent",
      },
      color: "gray.900",
      bg: "white.100",
      borderRadius: '100px',
      border:'1px solid #98A2B3'
    },
    default: {
      _hover: {
        color: "white",
        bg: "primary.1000",
      },
      color: "white",
      bg: "primary.1000",
      _active:{
        color:"white",
      }
    },
  },
};
