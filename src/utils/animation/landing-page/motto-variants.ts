export function getMottoColumnVariants(delay: number) {
  return {
    initial: {
      height: 0,
    },
    animate: {
      height: "100%",
      transition: {
        duration: 0.2,
        delay: delay + 0.5
      },
    },
  };
}

export function getMottoRadiantVariants(delay: number, width: string) {
  return {
    initial: {
      width: 0,
    },
    animate: {
      width: width,
      transition: {
        duration: 1.0,
        delay: delay
      },
    },
  };
}

export function getMottoFadeVariants(delay: number) {
  return {
    initial: {
      opacity: 0.0,
    },
    animate: {
      opacity: 1.0,
      transition: {
        duration: 1.0,
        delay: delay
      },
    },
  }
}

export function getMottoFadeWidthVariants(delay: number) {
  return {
    initial: {
      opacity: 0.0,
    },
    animate: {
      opacity: 1.0,
      transition: {
        duration: 1.5,
        delay: delay
      },
    },
  }
}


