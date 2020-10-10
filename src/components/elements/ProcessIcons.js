import React, { useState } from "react"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"

const ProcessIcons = () => {
    const [selectedId, setSelectedId] = useState(null)
    const items = [
        { id: 1, title: "Think" },
        { id: 2, title: "QWasd" },
        { id: 3, title: "sgdf" },
        { id: 4, title: "qwe" },
        { id: 5, title: "arsdf" },
        { id: 6, title: "qw3e" },
    ]
    return (
        <div className="circle_wrapper">
            <AnimateSharedLayout type="crossfade">
                {items.map((item) => (
                    <motion.div
                        layoutId={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={
                            selectedId === item.id ? "circle sel" : "circle"
                        }
                    ></motion.div>
                ))}

                <AnimatePresence>
                    {selectedId && (
                        <motion.div layoutId={selectedId} className="rect">
                            <motion.button onClick={() => setSelectedId(null)}>
                                Close
                            </motion.button>
                            <motion.h2>{items[selectedId - 1].title}</motion.h2>
                        </motion.div>
                    )}
                </AnimatePresence>
            </AnimateSharedLayout>
        </div>
    )
}

export default ProcessIcons
