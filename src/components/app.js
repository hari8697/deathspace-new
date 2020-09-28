import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/app.scss";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // <motion.div
        //     layout
        //     data-isOpen={isOpen}
        //     initial={{ borderRadius: 50 }}
        //     className="parent"
        //     onClick={() => setIsOpen(!isOpen)}
        // >
        //     <motion.div layout className="child" />
        // </motion.div>
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
        >
            Hello there!
        </motion.div>
    );
}
