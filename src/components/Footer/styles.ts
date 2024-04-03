import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${Cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${Cores.branco};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled.a`
  text-decoration: none;
  color: ${Cores.cinzaClaro};
  margin-right: 8px;
`

export const SectionFooter = styled.div`
  margin-bottom: 64px;
`
