import { lazy, Suspense } from 'react'
//import Dashboard from './components/Dashboard'
//import Landing from './components/Landing'

const Dashboard = lazy(() => import('./components/Dashboard'))
const  Landing = lazy(() => import('./components/Landing'))
const Topbar = lazy(() => import ('./components/Topbar'))
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  // This is how we do routing in a React app with the react-router-dom library
  // We can also use a framework like Next.js for server-side rendering and routing
  // TODO: Set a default Topbar which will remain on all the pages like LinkedIn or GitHub
  // return (
  //   <div>
  //     <BrowserRouter> 
      
  //     <Topbar /> {/* This is a Topbar component. By placing it here, it will be visible on all pages, and routing happens below it. When using react-router-dom's useNavigate hook to navigate to different pages, the component must be inside BrowserRouter to listen for route changes. */} 
  //     <Routes>
        
  //       <Route path='/' element={<Landing />} />
  //       <Route path='/dashboard' element={<Dashboard />} />
  //     </Routes>
  //   </BrowserRouter>
  //   </div>
  // )

  // We use lazy loading to optimize the website by only rendering the component when it is needed
  // This is called lazy loading.
  // If we don't use lazy loading, the whole bundle of index.html will be fetched even though we only need a part of it.
  // To use lazy loading, we need to wrap the lazy component with Suspense.
  // Suspense is a component that will render a fallback component if the lazy component is not ready yet.
  // In this case, the fallback component is a div that says "Loading..."

  return (
    <div>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Topbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Suspense>
      </BrowserRouter>

    </div>
  )
}

export default App

