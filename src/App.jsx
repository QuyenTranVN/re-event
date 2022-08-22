/** @format */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes/index'
import { DefaultLayout } from './app/layout'
import './Style.css'
function App() {
  return (
    <Router>
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
                  <Page />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </Router>
  )
}

export default App
