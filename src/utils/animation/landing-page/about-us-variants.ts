export const getFadeInFromLeftVariants = (delay: number) => {
  return (
    {
      hidden: {
        opacity: 0,
        x: '-5%'
      },
      show: {
        opacity: 1,
        x: '0%',
        transition: {
          duration: 1.5,
          ease: [0.25, 0.75, 0.5, 1],
          delay: delay
        }
      }
    }
  )
};