import React, { useState, useEffect } from "react"
import { motion, useTransform, AnimatePresence } from "framer-motion"
import { Section } from "../../styled/textElements"
import Title from "../../elements/Title"
import Paragraph from "../../elements/Paragraph"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default (props) => {
    const scrollDistance = [0.35, 0.45]
    const progress = useTransform(props.scrollYProgress, scrollDistance, [
        0,
        100,
    ])
    const [state, setState] = useState(false)
    useEffect(() => {
        progress.onChange(() => {
            progress.get() >= 30 ? setState(true) : setState(false)
        })

        window.scrollY >= 1600 && setState(true)
        // console.log(window.scrollY)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const data = useStaticQuery(graphql`
        {
            allHomeImagesJson {
                edges {
                    node {
                        title
                        image {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const images = data.allHomeImagesJson.edges

    const gatsbyImages = images.map(({ node: image }) => {
        const title = image.title
        const imageData = image.image.childImageSharp.fluid

        return <Img fluid={imageData} alt={title} />
    })

    return (
        <Section className="particle__section">
            <AnimatePresence>
                {state && (
                    <motion.div
                        variants={props.variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="s2textContainer"
                    >
                        {gatsbyImages}
                        <Title variants={props.childVariants} value="Work" />
                        <Paragraph
                            variants={props.variants}
                            value={
                                <>
                                    Okay, enough chit-chat, where's the proof
                                    you ask?
                                    <br />
                                    Here are some of my selected projects for
                                    your viewing pleasure.
                                </>
                            }
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    )
}
