import { useEffect } from "react";
import {Routes,Route} from "react-router-dom";
import { useDispatch } from 'react-redux'

import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category.component";

import { fetchCategoriesAsync } from "../../store/categories/category.action";
import "./shop.style.scss"

const Shop =()=>{
  const dispatch=useDispatch();

  useEffect(()=>{
  dispatch(fetchCategoriesAsync());
},[])
 return(
  <Routes>
    <Route index element = { <CategoriesPreview /> } />
    <Route path=":category" index element = { <Category /> } />
  </Routes>
 );
};


export default Shop