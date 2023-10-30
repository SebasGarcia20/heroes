import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher: any) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    console.log(publisher)

    if(!validPublisher.includes( publisher)){
        throw new Error (`${publisher} is not a valid publisher`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher)
}