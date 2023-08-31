import styled from "styled-components";


export const DetailContainer = styled.div`
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
    padding-top: 6rem;
    .row-1{
        display: flex;
        max-width: var(--max-width);
        margin: 0 auto;

        @media (max-width: 800px){
            flex-direction: column;
            .right{
                margin: 2rem;
            }
        }
        .left{
            max-width: 600px;
        }
        .right{
            margin-left: 3rem;
            h3{
                font-size: 26px;
                margin-bottom: 20px;
                letter-spacing: -.5px;
                color: var(--dark-gray);
            }
            .box{
                background: #E8E8E8;
                margin: 2rem 0;
                // max-width: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 3rem;
                flex-direction: column;
                border-radius: 5px;
                h3{
                    font-weight: 600;
                    font-size: 42px;
                }
            }
        }
    }
    .row-2{
        max-width: var(--max-width);
        margin: 3rem auto;
        .container{
            max-width: 400px;
            padding: 30px;
            box-shadow: 3px 3px 9px rgba(164,164,186,0.2);
            border: solid 1px #dddddd;
            margin: 1rem;
            h4{
                font-size: 20px;
                line-height: 26px;
                color: var(--dark-gray);
                margin-bottom: 2rem;
            }
            form{
                .input{
                    margin: 1.5rem 0;
                    h5{
                        font-size: 16px;
                        color: var(--dark-gray);
                    }
                    input{
                        width: 100%;
                        border: 1px solid #4f4f4f;
                        border-radius: 5px;
                        font-size: 18px;
                        padding: 8px;
                        color: #4f4f4f;
                        margin-top: 1rem;
                        :focus{
                            outline: none;
                        }
                    }
                }
                .btn{
                    background: var(--text-green);
                    color: var(--white);
                    font-size: 14px;
                    padding: 10px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    cursor: pointer;
                }
            }
        }
    }
}

`