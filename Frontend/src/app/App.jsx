import { RouterProvider } from 'react-router'
import { routes } from '../app/app.routes'



const App = () => {
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App