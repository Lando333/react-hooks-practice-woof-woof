function DogInfo({ currentDog, pups, toggleGoodBoy }) {

    const pupper = pups.pups[currentDog]
    
    return <div id="dog-info">
        <img src={pupper.image} alt={pupper.name} />
        
        <h2>{pupper.name}</h2>
        
        <button onClick={() => toggleGoodBoy(pupper)}>
            {pupper.isGoodDog ? "Good Dog!" : "Bad Dog!"}
        </button>
    </div>
}

export default DogInfo