// Importar componentes
import Card, { CardBody } from './components/Card'
import Button from './components/Button';
import List from './components/List';
import { useState } from 'react';

function App() {
  /*
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => setIsLoading(!isLoading)

  const list: string[] = ['Carlos', 'Emmma']

  const handleSelect = (item: string) => {
    console.log("imprimiendo", item)
  }

  return (
    <Card>
      <CardBody title="Hola mundo" text="Este es el texto" />
      {list.length ? (<List data={list} onSelect={handleSelect} />) : ('No hay contenido')}
      <Button isLoading={isLoading} onClick={handleClick}>Hola mundo</Button>
    </Card>
  )
  */

  const[data, setData] = useState(['Carlos', 'Emmma', 'Freddy'])
  
  const addMinion = () => setData([...data, 'Minion'])
  const delMinion = () => setData(data.slice(0, -1))
 
  return (
    <Card>
      <Button onClick={addMinion}>Agregar</Button>
      <Button onClick={delMinion}>Eliminar</Button>
      <List data={data}/>
    </Card>
  )
}

export default App;