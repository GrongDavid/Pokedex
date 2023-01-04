import './Pokecard.css'

const Pokecard = ({pokemon}) => (
    <>
        {pokemon.map(pokemon => (<div key={pokemon.id} className='Pokecard'><h3>{pokemon.name}</h3>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="" className='Pokecard-img' /> 
                                    <p className='Pokecard-type'>{pokemon.type}</p>
                                    <p className='Pokecard-experience'>{pokemon.base_experience}</p></div>))}
     </>
)

export default Pokecard