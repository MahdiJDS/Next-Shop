import Container from "@/components/Conteiner"
import ProductID from './productID'

interface propmType{
  params: Promise<{ id: string }>
}


export default async function Product(promps:propmType) {
  const {id} = await promps.params
  return (
    <Container>
      <ProductID  title={id}/>
    </Container>
  )
}
