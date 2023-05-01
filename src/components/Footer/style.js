import styled from "styled-components";


export const FooterContainer = styled.div`
    background: var(--color-dark);
    .container{
        max-width: var(--max-width);
        margin: 0 auto;
        color: var(--white);
        padding: 5rem 0;
        display: flex;
        justify-content: space-between;
        @media (max-width: 660px){
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .col{
            max-width: 300px;
            width: 20%;
            @media (max-width: 660px){
                width: 70%;
                margin-top: 40px;

            }
            .body{
                margin-top: 20px;
                font-size: 16px;
            }
            .social{
                display: flex;
                span{
                    margin-right: 10px;
                    font-size: 20px;
                    cursor: pointer;
                }
            }
        }
    }

`
