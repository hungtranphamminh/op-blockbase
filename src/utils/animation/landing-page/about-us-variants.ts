export const getFadeInFromLeftVariants = (delay: number) => {
  return (
    {
      hidden: {
        opacity: 0,
        x: '-3%'
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

export const getFadeVariants = (delay: number) => {
  return (
    {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.75, 0.5, 1],
          delay: delay
        }
      }
    }
  )
};

export const getFadeInFromLeftWidthVariants = (delay: number, x: string) => {
  return (
    {
      hidden: {
        opacity: 0,
        x: x
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