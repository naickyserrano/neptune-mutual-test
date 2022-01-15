import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow: auto;
  padding: 0 2rem;
`
const Main = styled.main`
  margin: 7.5rem 0 0;
`
const Content = styled.div`
  background: ${(props) => props.theme.colors.secondarybackground};
  border-radius: 4px;
  margin: 3rem 0 0;
  max-width: 460px;
  padding: 3rem;
  width: 100%;
`
const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2rem;
  text-align: center;
  width: 100%;

  > p {
    margin: 0;
    font-weight: 700;
  }
`
const SwapIconContainer = styled.div`
  text-align: center;
  margin: 1rem 0;
`
const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 1rem;
`

export { Container, Main, Footer, SwapIconContainer, Content, Title }
