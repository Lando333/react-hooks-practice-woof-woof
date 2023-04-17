
function DogTile({ name, changeDogDisplay, dogId }) {

    return <span onClick={() => changeDogDisplay(dogId - 1)}>
        {name}
    </span>
}

export default DogTile