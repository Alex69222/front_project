import React from 'react'

const AboutPageAsync = React.lazy(async () => await new Promise((resolve) => {
  // @ts-expect-error
  setTimeout(() => { resolve(import('./AboutPage')) }, 3000)
}))
export default AboutPageAsync
