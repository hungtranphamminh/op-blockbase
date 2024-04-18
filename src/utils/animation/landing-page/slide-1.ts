export const getHorizontalVariant = (delay: number, duration: number, position: string) => {
  return {
    hidden: { opacity: 0, x: position },
    visible: { opacity: 1, x: 0, transition: { ease: [0.0, 0.0, 0.01, 1], duration: duration, delay: delay } },
  }
}

export const getFadeVariant = (delay: number, duration: number) => {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: duration, delay: delay } },
  }
}

export const getVerticalVariant = (delay: number, duration: number, position: string) => {
  return {
    hidden: { opacity: 0, y: position },
    visible: { opacity: 1, y: 0, transition: { type: 'tween', ease: [0.0, 0.0, 0.01, 1], duration: duration, delay: delay } },
  };
}
