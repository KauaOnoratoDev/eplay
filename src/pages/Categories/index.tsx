import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import imageResident from '../../assets/images/resident.png'
import imageDiablo from '../../assets/images/diablo.png'
import imageZelda from '../../assets/images/zelda.png'
import imageStar from '../../assets/images/star_wars.png'
const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Leon S. Kennedy tracks the presidents missing daughter to a secluded European village, where there is something terribly wrong with the villagers. Featuring modernized gameplay, a reimagined storyline, and vividly detailed graphics, Resident Evil 4 marks the rebirth of an industry juggernaut.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: imageResident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Leon S. Kennedy tracks the presidents missing daughter to a secluded European village, where there is something terribly wrong with the villagers. Featuring modernized gameplay, a reimagined storyline, and vividly detailed graphics, Resident Evil 4 marks the rebirth of an industry juggernaut.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: imageResident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Leon S. Kennedy tracks the presidents missing daughter to a secluded European village, where there is something terribly wrong with the villagers. Featuring modernized gameplay, a reimagined storyline, and vividly detailed graphics, Resident Evil 4 marks the rebirth of an industry juggernaut.',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: imageStar
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Leon S. Kennedy tracks the presidents missing daughter to a secluded European village, where there is something terribly wrong with the villagers. Featuring modernized gameplay, a reimagined storyline, and vividly detailed graphics, Resident Evil 4 marks the rebirth of an industry juggernaut.',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: imageStar
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo is an action role-playing video game. The player moves and interacts with the environment primarily by way of a mouse. Other actions, such as casting a spell, are performed in response to keyboard inputs.',
    title: 'Diablo IV',
    system: 'PS5',
    infos: ['17/05'],
    image: imageDiablo
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo is an action role-playing video game. The player moves and interacts with the environment primarily by way of a mouse. Other actions, such as casting a spell, are performed in response to keyboard inputs.',
    title: 'Diablo IV',
    system: 'PS5',
    infos: ['17/05'],
    image: imageDiablo
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo is an action role-playing video game. The player moves and interacts with the environment primarily by way of a mouse. Other actions, such as casting a spell, are performed in response to keyboard inputs.',
    title: 'Zelda TOTK',
    system: 'PS5',
    infos: ['17/05'],
    image: imageZelda
  },
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo is an action role-playing video game. The player moves and interacts with the environment primarily by way of a mouse. Other actions, such as casting a spell, are performed in response to keyboard inputs.',
    title: 'Zelda TOTK',
    system: 'PS5',
    infos: ['17/05'],
    image: imageZelda
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="Ação" background="gray" />
    <ProductsList games={emBreve} title="Aventura" background="black" />
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
