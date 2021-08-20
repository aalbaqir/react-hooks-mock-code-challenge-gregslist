import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer(props) {
  return (
    <main>
      <ul className="cards">
        {props.dataToMap.map( eachListing => {


          return <ListingCard key={eachListing.id} listingToRender={eachStock}/>
        
      })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
