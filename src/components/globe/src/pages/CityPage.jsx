import React from "react";

function CityPage({ match }) {
  const cityName = match.params.cityName;
  return (
    <div>
      <h1>{cityName}</h1>
      
    </div>
  );
}

export default CityPage;