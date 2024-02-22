import Calculate from './components/Calculate'
import { ChangeMode } from './components/ChangeMode'

import './App.css'


function App() {

    document.body.classList.add('light-mode')
    return (
        <div>         
            <Calculate/>
            <ChangeMode />
        </div>
    )
}

export default App
