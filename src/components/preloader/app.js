import React, { useState, useEffect } from "react"
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useAnimation,
} from "framer-motion"

import Ellipse from "../../images/blackhole/Ellipse.svg"
import Ellipse2 from "../../images/blackhole/Ellipse 2.svg"
import Logo from "../../images/blackhole/Logo.svg"

import "../../styles/components/blackhole/style.scss"

const App = () => {
  const x = useMotionValue(80)
  const [counter, setCounter] = useState(80)
  const [completed, setCompleted] = useState(false)
  const [covered, setCovered] = useState(false)
  const progress = useTransform(x, [80, 100], ["80%", "100%"])
  const controls = useAnimation()
  const controls2 = useAnimation()

  useEffect(() => {
    x.set(counter)
    console.log(progress.get())
  }, [counter])

  const onLoadComplete = () => {
    setTimeout(() => {
      setCompleted(true)
      loadCompleteMethod()
    }, 300)
    const interval = setInterval(() => {
      setCounter((counter) => {
        if (counter < 100) {
          return counter + 1
        } else return 100
      })
    }, 20)
  }

  const loadCompleteMethod = async () => {
    await controls2.start("visible")
    setCovered(true)

    const sequence = async () => {
      return await controls.start("shrinkDot")
    }
    const sequence2 = async () => {
      controls.start("move")
      controls2.start("moveCover")
      return
    }
    sequence().then(() => {
      sequence2()
    })
  }
  const dotVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
    shrinkDot: {
      scale: completed ? [1, 1.4, 1.4, 0.4] : 1,
      transition: {
        type: "spring",
        delay: 0.2,
        stiffness: 500,
        damping: 18,
      },
    },
    move: {
      y: completed && "30%",
      x: completed && "24vw",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 70,
      },
    },
    moveCover: {
      y: completed && "30vh",
      x: completed && "100vw",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 70,
      },
    },
  }
  const variants = {
    hidden: { rotate: 0, scale: 0.2 },
    visible: {
      rotate: 360,
      scale: 0.3,
      transition: {
        yoyo: Infinity,
        duration: 8,
        ease: "linear",
      },
    },
    leave: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <div className="bh_container">
      <AnimatePresence>
        {!completed && (
          <>
            <motion.div className="bh__bg">
              <motion.img
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="leave"
                src={Ellipse}
                alt=""
              />
              <motion.img
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="leave"
                src={Ellipse2}
                alt=""
              />
            </motion.div>
            <motion.div
              className="blur__layer"
              variants={variants}
              exit="leave"
            ></motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="logo__container">
        {completed && (
          <>
            <motion.img
              src={Logo}
              variants={dotVariants}
              initial="hidden"
              animate={covered && "visible"}
              alt=""
            />
            <motion.span
              className="logo__cover"
              // initial={{ x: "-50%", y: "-50%" }}
              variants={dotVariants}
              initial="hidden"
              animate={controls2}
            ></motion.span>{" "}
          </>
        )}

        <motion.div
          className="bh__center"
          variants={dotVariants}
          initial={{ scale: 1 }}
          // animate={{ scale: 2 }}
          animate={controls}
        >
          <motion.div
            className="loader"
            initial={{ height: "0%", border: "0px" }}
            animate={{ height: "100%", border: "1px" }}
            transition={{
              type: "spring",
              delay: 2,
              stiffness: 150,
              damping: 20,
              mass: 1,
            }}
            // style={{ height: completed && progress }}
            onAnimationComplete={onLoadComplete}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default App
