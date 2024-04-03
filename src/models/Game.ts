class Game {
  title: string
  category: string
  system: string
  description: string
  image: string
  infos: string[]
  id: number

  constructor(
    title: string,
    category: string,
    system: string,
    description: string,
    image: string,
    infos: string[],
    id: number
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.system = system
    this.description = description
    this.image = image
    this.infos = infos
  }
}

export default Game
