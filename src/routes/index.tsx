import React from 'react';
import { Routes, Route } from "react-router-dom"
import { PageHome, PageLayout, PageAdm ,PageLogin,PageCadastrar,PageMenu } from "../pages"
import ProtectedRoute from './ProtectedRoute';

export const RouteSoftware = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="/menu" element={<PageMenu />} />
        <Route path="/cadastrar" element={<PageCadastrar />} />
        <Route path="/login" element={<PageLogin />} />
          <Route element={<ProtectedRoute/>} >
         <Route path="/adm" element={<PageAdm />}/>
        
        </Route>
      </Route>

    </Routes>
  )
}