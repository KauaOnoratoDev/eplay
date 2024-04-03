import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  image: string
  infos: string[]
}

const Product = ({
  title,
  category,
  system,
  description,
  image,
  infos
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info: string) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
