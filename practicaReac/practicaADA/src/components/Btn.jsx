

const Btn = (props) => {
   
  return (
    <button disabled={props.disabled} >{props.disabled ? 'no se puede' : 'Enviar' }</button>
  )
}
export default Btn;