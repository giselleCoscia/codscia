import { Children } from "react";


const Card = ({Children}) => {
  return (
    <div>
        <h1>Titulo de la card</h1>
      {Children}
    </div>
  )
}
export default Card;
