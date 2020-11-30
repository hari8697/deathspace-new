import React, { useState, useEffect } from "react"
import {
  motion,
  useTransform,
  AnimatePresence,
  useViewportScroll,
  useMotionValue,
  useSpring,
} from "framer-motion"

import Ellipse from "../../images/blackhole/Ellipse.svg"
import Ellipse2 from "../../images/blackhole/Ellipse 2.svg"

import "../../styles/components/blackhole/style.scss"

const App = () => {
  const x = useMotionValue(80)
  const [counter, setCounter] = useState(80)
  const [completed, setCompleted] = useState(false)
  const progress = useTransform(x, [80, 100], ["80%", "100%"])

  useEffect(() => {
    x.set(counter)
    console.log(progress.get())
  }, [counter])

  const onComplete = () => {
    setTimeout(() => {
      setCompleted(true)
    }, 300)
    const interval = setInterval(() => {
      setCounter((counter) => {
        if (counter < 100) {
          return counter + 1
        } else return 100
      })
    }, 20)
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

      <motion.div
        className="bh__center"
        initial={{ scale: 1 }}
        // animate={{ scale: 2 }}
        animate={{ scale: completed ? [1, 1.4, 1.4, 0.3] : 1 }}
        transition={{
          type: "spring",
          delay: 0.2,
          stiffness: 500,
          damping: 18,
        }}
      >
        <motion.div
          className="loader"
          initial={{ height: "0%", border: "0px" }}
          animate={{ height: "100%", border: "1px" }}
          transition={{
            type: "spring",
            delay: 5,
            stiffness: 150,
            damping: 20,
            mass: 1,
          }}
          // style={{ height: completed && progress }}
          onAnimationComplete={onComplete}
        ></motion.div>
      </motion.div>
    </div>
  )
}

export default App
