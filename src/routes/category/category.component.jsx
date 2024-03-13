import { useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./category.component.scss";
import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories.context";
import { Fragment } from "react";

const Category = () => {
    const {category}=useParams();
    const {categoriesMap} =useContext(CategoriesContext);
    const [products, setproducts] = useState(categoriesMap[category]);

    useEffect (() => {
      setproducts(categoriesMap[category]);
    },[category,categoriesMap])

    return(
      <Fragment>
        <h2 className="category-title">{category.toUpperCase()}</h2>
        <div className="category-container" >
         {products && products.map((product)=> (
        <ProductCard key={product.id} product={product}/> 
       ))}
       </div>
      </Fragment>
     
    );

};

export default Category