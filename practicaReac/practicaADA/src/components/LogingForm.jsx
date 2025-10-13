
import Btn from "./Btn"
import Card from "./Card"
import Input from "./Input";

const LogingForm = () => {
  return (<>
    <div>
        <Input type="text" placeholder="Pepe Honguito"/>
       
        <Card>
            <h2>Esto es un texto</h2>
        </Card>
         <Input type="text" placeholder="email"/>
    </div>
      <Btn disabled={true}/>
      <Btn disabled={false}/>
</>
  )
}
export default LogingForm;
