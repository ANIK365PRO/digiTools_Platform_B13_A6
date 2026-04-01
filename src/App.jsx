import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import PricingSection from './Components/PricingSection/PricingSection'
import Status from './Components/Status/Status'
import StepsSection from './Components/StepsSection/StepsSection'
import TabSection from './Components/TabSection/TabSection'
import WorkflowSection from './Components/WorkflowScetion/WorkflowSection'
import { ToastContainer } from 'react-toastify'


const getProductsData = async() => {
    const res = await fetch('/products.json')
    return res.json()
} 
const productsPromise = getProductsData()



function App() {
  const [cart, setCart] = useState([])
  


  return (
  <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Status></Status>
    <TabSection productsPromise={productsPromise} cart={cart} setCart={setCart}></TabSection>
    <StepsSection></StepsSection>
    <PricingSection></PricingSection>
    {/* <WorkflowSection></WorkflowSection> */}
    {/* <Footer></Footer> */}
   
    <ToastContainer />
  </>
  )
}

export default App
