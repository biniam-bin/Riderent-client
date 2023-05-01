import styled from "styled-components"


export const HomeContainer = styled.div`

`

export const HeroContainer = styled.div`
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6.5rem 20px;


    .left{
        max-width: 500px;

        h3{
            color: var(--text-green);
        }
        h1{
            // color: var(--primary-color);
            color: var(--dark-gray);
            font-size: 3rem;
            margin: 20px 0;
        }
        p{
            font-size: 18px;
            color: gray;
            line-height: 25px;
        }
        .btns{
            display: flex;
            margin-top: 15px;
            align-items: center;
            color: var(--white);
            font-weight: 900;
            font-size: 15px;
            .green{
                background: var(--secondary-color);
                padding: 10px 25px;
                border-radius: 5px;
                cursor: pointer;
            }
            .dark{
                background: var(--primary-color);
                padding: 10px 25px;
                border-radius: 5px;
                margin-left: 15px;
                cursor: pointer;
            }
        }
    }
    .right{
        max-width: 500px;
        img{
            max-height: 300px;
        }
        @media (max-width: 1000px){
            display: none;
        }
    }

`

// //////////////////////////// Card ////////////
export const CardContainer = styled.div`
    background: white;    
    width: 100%;
    max-width: 340px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 3px 9px rgba(164,164,186,0.2);
    border: solid 1px #dddddd;
    img{
        max-width: 340px;
        height: 200px;
        border-radius: 10px;
        object-fit: cover;
            width: 100%;     
        
    }
    .info{
        margin-top: 30px;
        width: 90%;
        .row-1{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            p{
                color: var(--primary-color) !important;
                font-weight: 700;
                font-size: 1.1rem;
            }
            span{
                display: flex;
                align-items: center;
                color: gray !important;
                p{
                    margin-left: 5px;
                    font-size: 15px;
                    color: #999 !important;
                    font-weight: 500;
                }

            }
        }
        .row-2{
            display: flex;
            align-items: center;
            margin-top: 8px;
            .value{
                margin-right: 15px;
                margin-left: 3px;
                font-weight: 600;
            }
        }
        .row-3{
            border-top: 1px solid #999;
            margin: 2rem 0;
        }
        .row-4{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .col{
                h4{
                    color: gray;
                    font-weight: 500;
                }
                h2{
                    margin-top: 8px;
                }
            }
            .btn{
                background: var(--text-green);
                color: var(--white);
                padding: 10px 20px;
                font-size: 13px;
                border-radius: 5px;
                cursor: pointer;
                font-weight: 600;
            }
        }

    }

`


// //////////////////////////// Fleets ////////
export const FleetsContainer = styled.section`
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        max-width: 550px;
        text-align: center;
    }
    .cards{
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`

export const BannerContainer = styled.div`
    margin: 6rem auto;
    background-color: rgb(248, 248, 248);
    display: flex;
    align-items: center;

    @media(max-width: 1030px){
        flex-direction: column;
        width: 100%;
    }
    .left{
        img{
            height: 450px;
            @media(max-width: 1120px){
                height: auto;
                
            }
            object-fit: cover;
        }
    }
    .right{
        max-width: 450px;
        margin: 0 auto;
        @media(max-width: 1030px){
            padding: 0 10px;

            margin-top: 30px;
        }
        h2{
              color: var(--dark-gray);
            font-size: 42px;
            letter-spacing: -1.8px;
            line-height: 50px;
        }
        .btn_row{
            display: flex;
            margin-top: 30px;
            .btn{
                margin-right: 20px;
                cursor: pointer; 
                font-size: 13px;
                font-weight: 600;
                // color: var(--white);
                color: rgba(0,0,0,.6);
                // background: var(--text-green);
                background-color: #f5f5f5;
                padding: 15px 20px;
                border-radius: 5px;
                
            }
            .active{
                box-shadow: 0 2px 5px 0 rgba(0,0,0,.2), 0 2px 10px 0 rgba(0,0,0,.1);
                background: var(--text-green);
                color: var(--white);

            }
        }
        p{
            margin-top: 30px;
        }
    }

`

export const ValuesContainer = styled.div`
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 800px){
        flex-direction: column;
        justify-content: center;
        width: 100%;
        align-items: center;
        .value{
            width: 80%;
        }
    }
    .value{
        width: 30%;
        display: flex;
        align-items: center;
        flex-direction: column;
        @media (max-width: 800px){
            
            width: 70%;
            margin-top: 50px;
        }
        .icon{
            background-color: var(--text-green);    
            width: 80px;
            height: 80px;
            font-size: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            border-radius: 6px;
        }
        h4{

            color: var(--dark-gray);
            font-size: 20px;
            margin-top: 0;
            margin-bottom: 10px;
            line-height: 26px;
            margin-top: 20px;   
        }
        p{
            text-align: center;
        }
    }
`




export const ReviewsContainer = styled.div`
    max-width: var(--max-width);
    margin: 5rem auto;    
    display: flex;
    justify-content: space-between;

    @media (max-width: 1040px){
        flex-direction: column;
        align-items: center;
        .review{
            margin-top: 30px;
        }
    }
    .review{
        display: flex;
        flex-direction: column;
        position: relative;
        img{
            height: 430px;
            width: 320px;
            background-size: 50%;
            object-fit: cover;
        }
        .text{
            display: flex;
            max-width: 320px;
            padding: 70px 40px;
            background: linear-gradient(3deg, rgba(30,30,30,0) 30%, rgba(30,30,30,1) 100%);
            height: 100%;
            flex-direction: column;
            position: absolute;
            h4{
                color: var(--white)
            }
            h6{
                font-size: 15px;
                color: rgba(255, 255, 255, .7);
                padding: 0;
                line-height: 1.6em;
                margin-top: 15px;
            }
            h5{
                color: var(--white);
                font-weight: 600;
                margin-top: 10px;
                padding-left: 30px;
            }
            h5::before{
                content: "";
                display: block;
                position: absolute;
                left: 40px;
                margin-top: 8px;
                width: 20px;
                height: 1px;
                background: #ffffff;
            }
        }
    }

`



export const BoxesContainer = styled.div`
    background: var(--text-green);
    .cont{
        max-width: var(--max-width);
        margin: 0 auto;
        padding: 5rem 0;
        display: flex;
        justify-content: space-between;
        // flex-wrap: wrap;
        justify-content: center;
        @media(max-width: 750px){
            flex-direction: column;
        }

        .box{
            background: var(--white);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 15px 15px;
            padding: 30px 15px;
            border-radius: 3px;
            h1{   
                color: var(--text-green) !important;
                margin-top: 0;
            }
            h3{
                color: var(--dark-gray);    
            }
            p{
                font-size: 15px;
                text-align: center;
            }
        }
    }

`

export const MarqueContaainer = styled.div`
    background: var(--primary-color);
    padding: 2.6rem 0;
    .container{
        display: flex;
        align-items: center;    

        h1{
            margin: 0 50px;
            font-size: 4rem;
            
            color: var(--secondary-color);
        }
        .dot{
            width: 10px !important;
            height: 10px !important;
            border-radius: 50%;
            background-color: var(--secondary-color);
        }
    }

`