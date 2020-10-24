import React, { useState, useEffect } from "react"
import { motion, useTransform, AnimatePresence } from "framer-motion"
import { Section } from "../styled/textElements"
import Title from "../elements/Title"
import Paragraph from "../elements/Paragraph"
import Button from "../elements/Button"
import { Link } from "gatsby"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// static files
import "../../styles/components/home/section3.scss"

export default (props) => {
    const scrollDistance = [0.26, 0.4]
    // const scrollDistance2 = [0.25, 0.35]
    const progress = useTransform(props.scrollYProgress, scrollDistance, [
        0,
        100,
    ])

    const [state, setState] = useState(false)

    useEffect(() => {
        progress.onChange(() => {
            progress.get() >= 80 ? setState(true) : setState(false)
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
    const desktopImages = images.filter(({ node }) => node.id != 1)

    const gatsbyImages = desktopImages.map(({ node: image }) => {
        const id = image.id
        const title = image.title
        const imageData = image.image.childImageSharp.fluid

        return (
            <motion.div className={`portImage${id}`} style={{}} key={title}>
                <Img fluid={imageData} alt={title} />
            </motion.div>
        )
    })

    return (
        <Section className="particle__section section__three">
            <AnimatePresence>
                {state && (
                    <motion.div
                        variants={props.variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="s3textContainer"
                    >
                        <Title variants={props.childVariants}>WorkDESK</Title>
                        <Paragraph variants={props.variants}>
                            Okay, enough chit-chat, where's the proof you ask?
                            <br />
                            Here are some of my selected projects for your
                            viewing pleasure.
                        </Paragraph>
                        <Link to="/work" activeClassName="active">
                            <Button variants={props.variants} href="/work">
                                Look Inside
                            </Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    )
}
