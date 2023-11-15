import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home' 
import Sobre from '../src/pages/Sobre' 
import Projetos from '../src/pages/Projetos' 
import Contatos from '../src/pages/Contatos' 
import Page404 from '../src/pages/Page404' 
import PageBase from '../src/pages/PaginaBase' 

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/sobre" element={ <Sobre /> }></Route>
                    <Route path="/projetos" element={ <Projetos /> }></Route>
                    <Route path="/contatos" element={ <Contatos /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
