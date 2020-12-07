import React, { useState } from "react"
import Loader from "../preloader/app"

export const isLoadingHOC = (WrappedComponent) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(true)

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading)
    }

    return (
      <>
        {isLoading && <Loader />}
        <WrappedComponent
          {...props}
          setLoading={setLoadingState}
          isLoading={isLoading}
        />
      </>
    )
  }

  return HOC
}

export default isLoadingHOC
