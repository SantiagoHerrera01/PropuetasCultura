import { Outlet } from 'react-router-dom'
import './App.css'
import RegFormProvider from './components/RegFormProvider'

function App() {  
return(
<>
<RegFormProvider>
<Outlet/>
</RegFormProvider>
</>
)
}

export default App
