import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Filter from './common/Filter';
import BarChart from './common/BarChart';
import TableContainer from './common/TableContainer';
import ProductDetail from './common/ProductDetail';

const columnHeaders = [
  'title',
  'price',
  'description',
  'rating'
];

function App() {
  const storeURL = 'https://fakestoreapi.com/products';

  const [catOptions, setCatOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productOptions, setProductOptions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [productLabels, setProductLabels] = useState([]);
  const [productValues, setProductValues] = useState([]);
  const [tableColumns, setTableColumns] = useState<any[]>([]);
  const [productRows, setProductRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const categories = await axios.get(`${storeURL}/categories`);
      setCatOptions(categories.data);
    };
    fetchData();
  }, []);

  const getProducts = async (e: any) => {
    setSelectedCategory(e.target.value);
    const products = await axios.get(`${storeURL}/category/${e.target.value}`);
    setProductOptions(products.data);
    setProductRows(products.data.map((p: any) => {
      return {
        title: p.title,
        price: p.price,
        description: p.description,
        rating: p.rating.rate
      }
    }));
    setProductLabels(products.data.map((p: any) => p.title));
    setProductValues(products.data.map((p: any) => p.price)); 
    setTableColumns(columnHeaders.map((col: string) => {
      return {
        name: col,
        title: col.toUpperCase()
      }
    }));
    console.log(productOptions);
  };

  const getProduct = async (e: any) => {
    console.log(e);
    setSelectedProduct(e.target.value);
  }

  const getSelectedProduct = () => {
    return productOptions.filter((opt: any) => opt.title === selectedProduct)[0];
  }

  const clearCatSelection = () => {
    setSelectedCategory("");
    setSelectedProduct("");
  }

  const clearProductSelection = () => {
    setSelectedProduct("");
  }

  return (
    <div className="App">
      <header className="app-header">
          <h1>My Fabulous Store</h1>
      </header>
      <div className='main-container'>
        <div className="side-bar">
            <Filter 
              selected={selectedCategory}
              options={catOptions}
              title="Category"
              handleChange={getProducts}
              clearSelection={clearCatSelection}
            />
            <Filter 
              selected={selectedProduct}
              options={productLabels}
              title="Products"
              handleChange={getProduct}
              clearSelection={clearProductSelection}
            />
        </div>
        <div className='content'>
          {
            (selectedCategory.length > 0) ?
            <div>
              {
              (selectedProduct.length > 0) ?
               <ProductDetail 
                  product={getSelectedProduct()}
               /> :
               <div className='chart-div'>
                <BarChart 
                  title="Price Comparison"
                  xAxisCat={productLabels}
                  yAxisTitle="Price"
                  dataValues={productValues}
                />
                <TableContainer
                  columns={tableColumns}
                  rows={productRows}
                  />
              </div>
              }
            </div>
             : 
            <div className='msg-div'>
              <h4>Please select a category</h4>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;


