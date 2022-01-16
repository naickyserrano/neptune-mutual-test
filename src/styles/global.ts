import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    #__next {
        height: 100%;
    }

    body {
        background-color: ${({ theme }) => theme.colors.primarybackground};
        color: ${({ theme }) => theme.colors.text};
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }

    .ant-table-thead > tr > th {
        font-size: 12px;
    }
`
