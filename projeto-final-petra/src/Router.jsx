import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Voluntarios from './pages/Voluntarios'
import Contato from './pages/Contato'
import Footer from './components/Footer'


const Router = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/voluntarios' element={<Voluntarios/>} />
                <Route path='contato' element={<Contato/>} />
            </Routes>
            <Footer content='Feito com ♡ por Petra Fernandes. Todos os direitos reservados.
            '/>
        </BrowserRouter>
    )
}

export default Router
