export const getSlideInFromLeftVariants = (delay: number) => {
  return (
    {
      hidden: {
        x: '-20%'
      },
      show: {
        x: '0%',
        transition: {
          duration: 1.0,
          ease: [0.25, 0.75, 0.5, 1],
          delay: delay
        }
      }
    }
  )
};