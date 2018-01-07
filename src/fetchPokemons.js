/**
 * Fake fetch :P A fetch is no needed, given the sprites
 * are correlated under the same resource with their pokedex id, 
 * and it is consecutive
 */
export default async function fetchPokemons () {
    return await Array.apply(null, { length: 150 })
        .map((item, index) => {
            return {
                id: index + 1,
                sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            }
        })
}