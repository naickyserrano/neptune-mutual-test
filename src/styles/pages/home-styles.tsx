import { Button } from 'antd'
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
  text-align: center;
`
const ButtonContainer = styled.div`
  text-align: center;

  > p {
    font-weight: 500;
    margin: 1.5rem 0 0;
  }
`
const ConnectToWalletButton = styled(Button)`
  font-weight: 500;
  margin: 1.5rem 0 0;
`
const CheckWalletDetailsButton = styled(Button)`
  font-weight: 500;
  margin: 0.5rem 0;
`
const WalletContainer = styled.div`
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  display: flex;
  padding: 0.5rem;

  > p {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
    margin: 0 1rem;
  }
`
const ConnectIcon = styled.span<{ connected: boolean }>`
  background-color: ${({ connected, theme }) =>
    connected ? theme.colors.connect : theme.colors.disconnect};
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 0 0.5rem 0 0;
`

export {
  Container,
  Main,
  Footer,
  SwapIconContainer,
  Content,
  Title,
  ButtonContainer,
  WalletContainer,
  ConnectIcon,
  ConnectToWalletButton,
  CheckWalletDetailsButton,
}
