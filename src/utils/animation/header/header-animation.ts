export const NAVIGATION_VARIANTS = {
  hover: {
    y: "-36.8px",
    transition: {
      duration: 0.25,
    },
  },
  rest: {
    y: "0%",
    transition: {
      duration: 0.25,
    },
  },
};

export const getVerticalVariants = (y: string, duration: number) => {
  return (
    {
      initial: {
        y: y,
      },
      animate: {
        y: "0%",
        transition: {
          duration: duration,
        },
      },
    }
  )
}