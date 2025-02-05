
import './App.css'
import Header from './Components/header/Header.jsx'
import Display from './Components/page/Display.jsx'

function App() {

  return (

    <div className='flex flex-col gap-[64px] h-full px-8 lg:px-16 2xl:px-64'>

      <Header/>
      <Display/>

   </div>
   
  )
}

export default App
