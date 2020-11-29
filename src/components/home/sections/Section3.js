import React from "react"
import S3M from "../../elements/s3-m"
import S3D from "../../elements/s3-d"

//Hooks
import useWindowSize from "../../../hooks/useWindowSize"

export default (props) => {
  const windowSize = {
    width: useWindowSize().width,
    height: useWindowSize().height,
  }
  return (
    <>
      {windowSize.width < 768 ? (
        <S3M
          scrollYProgress={props.scrollYProgress}
          variants={props.variants}
          childVariants={props.childVariants}
        ></S3M>
      ) : (
        <S3D
          scrollYProgress={props.scrollYProgress}
          variants={props.variants}
          childVariants={props.childVariants}
          portImagesVariants={props.portImagesVariants}
        ></S3D>
      )}
    </>
  )
}
