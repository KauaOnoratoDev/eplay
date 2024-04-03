import { Container, Links, Link, SectionFooter, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <SectionFooter>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>AÇÃO</Link>
          </li>
          <li>
            <Link>AVENTURA</Link>
          </li>
          <li>
            <Link>ESPORTES</Link>
          </li>
          <li>
            <Link>ESTRATÉGIA</Link>
          </li>
        </Links>
      </SectionFooter>
      <SectionFooter>
        <h4>Acesso rápido</h4>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em Breve</Link>
          </li>
        </Links>
      </SectionFooter>
      <p>{currentYear} - &copy; E-Play Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
