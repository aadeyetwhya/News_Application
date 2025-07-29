import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewsComponent from './Component/newsComponent'
import NavBar from './Component/NavBar'
import Test from './Component/Test'
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<NewsComponent category="general"/> } /> {/* Correct route for Home */}
          <Route path="/business" element={<NewsComponent category="business"/>} /> {/* Correct route for About */}
          <Route path="/entertainment" element={<NewsComponent category="entertainment"/>} /> {/* Correct route for Shop */}
          <Route path="/health" element={<NewsComponent category="health"/>} /> {/* Correct route for Shop */}

          <Route path="/science" element={<NewsComponent category="science"/>} /> {/* Correct route for Shop */}

          <Route path="/sports" element={<NewsComponent category="sports"/>} /> {/* Correct route for Shop */}


        </Routes>
     
     {/* <Test/> */}
     </BrowserRouter>
    </>
  )
}

export default App
