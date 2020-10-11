export let variants = {
    hidden: {
        y: 20,
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: "easeIn",
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
            duration: 0.25,
            ease: "easeInOut",
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
}

export let childVariants = {
    hidden: {
        y: 20,
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
