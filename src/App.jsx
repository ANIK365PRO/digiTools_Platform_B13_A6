import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import PricingSection from './Components/PricingSection/PricingSection'
import Status from './Components/Status/Status'
import StepsSection from './Components/StepsSection/StepsSection'
import TabSection from './Components/TabSection/TabSection'
import WorkflowSection from './Components/WorkflowScetion/WorkflowSection'


const getProductsData = async() => {
    const res = await fetch('/products.json')
    return res.json()
} 
const productsPromise = getProductsData()



function App() {
  
  return (
  <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Status></Status>
    <TabSection productsPromise={productsPromise}></TabSection>
    <StepsSection></StepsSection>
    <PricingSection></PricingSection>
    {/* <WorkflowSection></WorkflowSection> */}
    {/* <Footer></Footer> */}
   
    
  </>
  )
}

export default App
