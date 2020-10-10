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
            delay: 0.6,
            duration: 0.9,
            ease: "easeOut",
        },
    },
    opacityVisible2: {
        opacity: 1,
        transition: {
            duration: 0.9,
            ease: "easeOut",
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            staggerChildren: 0.25,
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
