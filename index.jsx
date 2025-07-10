import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home.jsx';
import Error from './Components/Error.jsx';
import CountryDetail from './Components/CountryDetail.jsx';

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}  >
                    <Route index element={<Home />} />
                    <Route path='/:country' element={<CountryDetail />} />
                </Route>
                <Route element={<Error />}>
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
const root = createRoot(document.querySelector('#root'))
root.render(<Main />)