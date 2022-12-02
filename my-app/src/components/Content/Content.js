import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import LeftNav from '../LeftNav/LeftNav'
import Home from '../RightRoutes/Home'
import Product from '../RightRoutes/Product'
import Wishlist from '../RightRoutes/Wishlist'
import Clients from '../RightRoutes/Clients'
import AboutUs from '../RightRoutes/AboutUs'
import TopNav from '../TopNav/TopNav'
import Description from '../RightRoutes/Description'

export default function Content() {
  return (
    <div>
        <TopNav />
        <div className="main-content">
            <LeftNav />
            <div className="check">
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='products/*' element={<Product />} />
                    <Route path='/wishlist' element={<Wishlist />} />
                    <Route path='/clients' element={<Clients />} />
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/description' element={<Description />} />
                </Routes>
            </div>
        </div>
    </div>
  )
}