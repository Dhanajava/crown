import { useState, useEffect ,Fragment} from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";

import Spinner from "../../components/spinner/spinner.components";
import { selectCategoriesMap, selectIsCategoriesLoading} from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import {Title, CategoryContainer } from "./category.styles"

const Category = () => {
    const {category}=useParams();
    const categoriesMap=useSelector(selectCategoriesMap);
    const isLoading =useSelector(selectIsCategoriesLoading);
    const [products, setproducts] = useState(categoriesMap[category]);

    useEffect (() => {
      setproducts(categoriesMap[category]);
    },[category,categoriesMap])

    return(
      <Fragment>
      <Title>{category.toUpperCase()} </Title>
      {isLoading ? (<Spinner/> 
        ):(
          <CategoryContainer>
          {products && products.map((product)=> (
         <ProductCard key={product.id} product={product}/> 
        ))}
        </CategoryContainer> 
        )} 
      </Fragment>
     
    );

};

export default Category