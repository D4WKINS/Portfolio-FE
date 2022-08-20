// import 'Navbar' from './components/Navbar.jsx'
import Portfolio from "./components/Portfolio.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppContainer } from "./components/styled/AppContainer.styled.jsx"

function App() {
    return (
        <AppContainer>
            <Router>
                <Routes>
                    <Route path='/' element={<Portfolio />} />
                </Routes>
            </Router>
        </AppContainer>
    )
}

export default App
