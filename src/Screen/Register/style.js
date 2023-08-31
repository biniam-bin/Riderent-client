import styled from "styled-components";


export const RegisterContainer = styled.div`
    background: url('/banner3.jpg') center;
    height: 100vh;
    object-fit: contain;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        background: var(--white);
        width: 30%;
        border-radius: 5px;
        padding: 20px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        
        @media (max-width: 1100px){
            width: 35%;
            
        }
        @media (max-width: 860px){
            width: 45%;
            
        }
        @media (max-width: 670px){
            width: 80%;
            
        }
        @media (max-width: 370px){
            width: 95%;
            
        }
        h1{
            font-size: 30px;
        }
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
            input{
                margin: 5px 0;
                padding: 5px 5px;
                :focus{
                    outline: none;
                }
            }
            .btn{
                background: var(--secondary-color);
                padding: 8px 25px;
                border-radius: 3px;
                cursor: pointer;
                color: var(--white);
                font-size: 1rem;
                font-weight: 600;
                margin-top: 15px;

                @media (max-width: 700px) {
                    display: none;
                }
            }
        }
        .footer{
            display: flex;
            align-items: center;
            margin-top: 15px;
            p{

                font-size: 14px;
            }
            span{
                margin-left: 5px;
                font-size: 14px;
                text-decoration: underline;
                color: blue;    

            }
        }
    }
`