import styled from "styled-components";


export const ContactContainer = styled.div`
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
    display: flex;
    align-items: center;
    // justify-content: space-between;
    
    max-width: var(--max-width);
    margin: 0 auto;
    
    @media (max-width: 1100px){
        flex-direction: column;
        
    }
    
    .left{
        padding: 5rem 0;
        flex: 0.7;
        h2{
            color: var(--dark-gray);
        }
        form{
            display: flex;
            flex-direction: column;
            margin: 2rem 0;
            .row{
                @media (max-width: 790px){
                    flex-direction: column;
                }
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
            }
            input, textarea{
                @media (max-width: 790px){
                    width: 100%;
                    margin: 10px;
                }
                border: 1px solid gray;
                padding: 10px;
                font-size: 17px;
                border-radius: 5px;
                margin: 5px;
             
                :focus{
                    outline: none;
                }
            }
            textarea{
                margin: 1rem 0;
                resize: vertical;
            }
            .submit{
                max-width: 150px;
                font-size: 15px;
                font-weight: 800;
                cursor: pointer;
                color: var(--white);
                background: var(--secondary-color);
                border: none;
            }
        }
    }
    .right{
        margin-left: 2rem;
        .box{
            padding: 30px;
            box-shadow: 3px 3px 9px rgba(164,164,186,0.2);
            border: solid 1px #dddddd;
            display: flex;  
            flex-direction: column;
            h4{
                font-size: 20px;
                margin-top: 0;
                margin-bottom: 10px;
                line-height: 26px;
                color: var(--dark-gray);
            }
            span{
                color: var(--secondary-color);
                margin-top: 10px;
            }
        }
    }
}

`