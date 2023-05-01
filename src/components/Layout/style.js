import styled from "styled-components";


export const LayoutContainer = styled.div`
    position: relative;
    .btn-scroll{
        background: var(--text-green);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        position: fixed;
        bottom: 30px;
        right: 20px;
        cursor: pointer;
    }
    .hidden{
        display: none;
    }
`
