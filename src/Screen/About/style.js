import styled from "styled-components";


export const AboutContainer = styled.div`
    .header{
    display: flex;
    align-items: cennter;
    justify-content: center;
    position: relative;
    img{
        max-height: 300px;
        width: 100%;
        object-fit: cover;
    }
    h1{
        position: absolute;
        top: 30%;
        color: var(--white);
        font-size: 3.3rem;
    }
}

    .body{
        .row-1{
            max-width: var(--max-width);
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            margin-top: 5rem;

            @media (max-width: 900px){
                flex-direction: column;
                margin: 1rem;
                .left{
                    margin: 2rem 0;
                }
            }
            .left{
                width: 100%;
                font-size: 42px;
                letter-spacing: -1.8px;
                line-height: 50px;
                font-weight: 600;
                color: var(--dark-gray);
                
                .green{
                    color: var(--text-green);
                }
            }
            .right{
                @media (min-width: 900px){

                    margin: 1rem;
                }
                width: 100%;
            }
        }
        .row-2{
            background: var(--secondary-color);
            padding: 2rem;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            color: var(--white);
            margin-top: 5rem;

            @media (max-width: 1110px){
                flex-direction: column;
                .left{
                    margin-bottom: 2rem;
                }
            }
            .left{
                h1{
                    color: var(--white);
                    font-size: 42px;
                    letter-spacing: -1.8px;
                    line-height: 50px;
                    max-width: 800px;
                    font-weight: 500;

                }
            }
            .right{
                display: flex;
                flex-direction: column;
                align-items: center;
                .icon{
                    font-size: 4.5rem;
                }
                p{
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 5px;
                    color: var(--white);
                }
                h3{
                    font-size: 36px;
                    font-weight: bold;
                    margin: 10px 0;
                }
                .btn{
                    background: var(--text-green);
                    display: flex;
                    align-items: center;
                    justify-cotent: center;
                    cursor: pointer;
                    font-weight: 800;
                    font-size: 14px;
                    color: var(--white);
                    padding: 10px 20px;
                    border-radius: 5px;
                }
            }
        }
    }
`