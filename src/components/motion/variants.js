export let variants = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeIn",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
  opacityHidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
  opacityVisible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: "easeOut",
    },
  },
  opacityVisible2: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export let childVariants = {
  hidden: {
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  visible: {
    y: 0,
    opacity: 0.4,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}
export let portImagesVariants = {
  hidden: {
    x: 20,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeIn",
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export let fadeOnlyVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}
