import React, { useState, useEffect } from "react"
import { motion, useTransform, AnimatePresence } from "framer-motion"
import { Section } from "../../styled/textElements"
import Title from "../../elements/Title"
import Paragraph from "../../elements/Paragraph"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// static files
import "../../../styles/components/home/section3.scss"

export default (props) => {
    const scrollDistance = [0.26, 0.4]
    // const scrollDistance2 = [0.25, 0.35]
    const progress = useTransform(props.scrollYProgress, scrollDistance, [
        0,
        100,
    ])
    const portImg1Up = useTransform(props.scrollYProgress, scrollDistance, [
        "160%",
        "80%",
    ])
    const portImg2Up = useTransform(props.scrollYProgress, scrollDistance, [
        "65%",
        "25%",
    ])

    const [state, setState] = useState(false)
    const [imagesState, setImagesState] = useState(false)
    useEffect(() => {
        progress.onChange(() => {
            console.log(progress.get())
            progress.get() > 0 ? setImagesState(true) : setImagesState(false)
            progress.get() >= 50 ? setState(true) : setState(false)
        })

        // window.scrollY >= 1600 && setState(true)
        // console.log(window.scrollY)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const data = useStaticQuery(graphql`
        {
            allHomeImagesJson {
                edges {
                    node {
                        id
                        title
                        image {
                            childImageSharp {
                                fluid(maxWidth: 2560) {
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
        const id = image.id
        const title = image.title
        const imageData = image.image.childImageSharp.fluid

        return (
            <motion.div
                className={`portImage${id}`}
                style={{
                    y: (id == 2 && portImg2Up) || (id == 1 && portImg1Up),
                }}
                key={title}
            >
                <Img fluid={imageData} alt={title} />
            </motion.div>
        )
    })

    return (
        <Section noPadding className="particle__section section__three">
            <AnimatePresence>
                {imagesState && (
                    <>
                        <motion.div
                            className="images_container"
                            variants={props.variants}
                            initial="opacityHidden"
                            animate={imagesState && "opacityVisible2"}
                            exit="opacityHidden"
                        >
                            {gatsbyImages}
                        </motion.div>
                        {state && (
                            <motion.div
                                variants={props.variants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="s3textContainer"
                            >
                                <Title
                                    variants={props.childVariants}
                                    value="Work"
                                />
                                <Paragraph
                                    variants={props.variants}
                                    value={
                                        <>
                                            Okay, enough chit-chat, where's the
                                            proof you ask?
                                            <br />
                                            Here are some of my selected
                                            projects for your viewing pleasure.
                                        </>
                                    }
                                />
                            </motion.div>
                        )}
                    </>
                )}
            </AnimatePresence>
        </Section>
    )
}
