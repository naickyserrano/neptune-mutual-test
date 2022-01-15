import styled from 'styled-components'

const Container = styled.div`
    padding: 0 2rem;
`
const Main = styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    min-height: 100vh;
    padding: 4rem 0;
`
const Footer = styled.footer`
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 2rem 0;

    > p {
        margin: 0;
        font-weight: 700;
    }
`
export {
    Container,
    Main,
    Footer
}