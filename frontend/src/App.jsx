
import './App.css'
import Header from './Components/Header'
import Display from './Components/Display'

function App() {
  
console.log("test") 

  return (

    <div className='flex flex-col gap-[64px] h-full '> 
      <Header/>
      <Display/>
   </div>
   
  )
}

export default App
