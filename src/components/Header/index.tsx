import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinhoLogo from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to={'/'}>
        <img src={logo} alt="ePlay" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categorias">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinhoLogo} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
