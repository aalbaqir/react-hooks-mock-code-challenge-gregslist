import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useEffect, useState } from "react";

function App() {

  const [listings, setListings] = useState ([]);
  const [headerlist, setHeaderList] = useState([]);

useEffect(() =>{
  fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

}, [] )

  return (
    <div className="app">
      <Header />
      <ListingsContainer dataTopMap={listing}/>
    </div>
  );
}

export default App;
