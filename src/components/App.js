import React, { useState } from "react";
import pups from "../db.json"
import DogTile from "./DogTile";
import DogInfo from "./DogInfo";

function App() {
  
  const [currentDog, setDogInfo] = useState(0)
  const [goodBoyInfo, setGoodBoy] = useState(true)
  const [filter, setFilter] = useState(true)
  let goodBoyFilter = true
  
  function changeDogDisplay(dogId) {
    setDogInfo(dogId)
  }
  function toggleGoodBoy(dog) {
    setGoodBoy(dog.isGoodDog = !dog.isGoodDog)
  }
  function toggleFilter() {
    console.log(goodBoyFilter)
    setFilter(goodBoyFilter = !goodBoyFilter)
  }

  const dogTileElements = pups.pups.map(pup => {
    return <DogTile
      key={pup.id}
      dogId={pup.id}
      name={pup.name}
      currentDog={currentDog}
      changeDogDisplay={changeDogDisplay} />
  })

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={() => toggleFilter()}>
          {filter ? "Filter good dogs: OFF" : "Filter good dogs: ON"}
        </button>
      </div>

      <div id="dog-bar">
        {dogTileElements}
      </div>
      
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <DogInfo
          pups={pups}
          currentDog={currentDog}
          goodBoyInfo={goodBoyInfo}
          toggleGoodBoy={toggleGoodBoy}
        />
      </div>
    </div>
  );
}

export default App;
