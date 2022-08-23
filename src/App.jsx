/** @format */
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes/index'
import { DefaultLayout } from './app/layout'
import { useLocation } from 'react-router-dom'
import './Style.css'
import ModalManager from './app/common/modals/ModalManager'
function App() {
  const { key } = useLocation()
  return (
    <>
      <ModalManager />
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component

          let Layout = DefaultLayout

          if (route.layout) {
            Layout = route.layout
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page key={key} />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </>
  )
}

export default App
