import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

export const HeroPage = () => {

  const { id } = useParams();
  
  const hero = useMemo( () => getHeroById(id), [id]) 


  const navigate = useNavigate();

  const onNavigateBack = () => {
    if(id?.includes('dc')){
      navigate('/dc', { replace: true })
    } else {
      navigate('/marvel', { replace: true })
    }
  }

  if (!hero) {
    return <Navigate to='/marvel' />
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-itemm">
            <b>
              Alter ego:
            </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-itemm">
            <b>
              Publisher:
            </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-itemm">
            <b>
              First appearance:
            </b>
            {hero.alter_ego}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-primary"
          onClick={onNavigateBack}
        >
          Back
        </button>
      </div>

    </div>
  )
}
