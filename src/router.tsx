import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import { AboutUs } from './components/aboutUs/AboutUs'
import { Layout } from './components/layout/Layout'
import { HomePage } from './components/pages/Home/HomePage'
import { NotFound } from './components/pages/NotFound/NotFound'
import { ProductPage } from './components/pages/Product/ProductPage'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

export default router
