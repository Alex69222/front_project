import React from 'react'

const MainPageAsync = React.lazy(async () => await new Promise((resolve) => {
  // @ts-expect-error
  setTimeout(() => { resolve(import('./MainPage')) }, 3000)
}))
export default MainPageAsync
