import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHoresByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }: any) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3">
            {heroes.map((heroe: heroes) => {
                return (
                    <HeroCard
                        key={heroe.id}
                        {...heroe}

                    />
                )
            })}
        </div>
    )
}
