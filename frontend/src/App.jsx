import React, { useState } from 'react';
import MtoProductPage from './MtoProductPage';
import data from './api/mto.json';
import Navbar from './component/Navbar';

function App() {
  const [selectedProduct, setSelectedProduct] = useState("Thiner");

  return (
    <div>
      <Navbar onSelect={setSelectedProduct} />
      <MtoProductPage data={data.MTO[selectedProduct]} />
    </div>
  );
}

export default App;
