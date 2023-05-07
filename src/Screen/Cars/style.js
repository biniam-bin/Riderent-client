import styled from "styled-components";


export const CarsContainer = styled.div`
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
    // background: red;
    padding: 5rem;
    display: flex;
    justify-content: space-between;
    @media (max-width: 610px){
        flex-direction: column;
        width: 100%;
    }
    .boxes{
        flex: 0.18;
        .box{
            font-size: 15px;
            // max-width: 250px;
            margin-bottom: 25px;
            border: solid 1px rgba(0,0,0,.15);
            padding: 25px;
            border-radius: 6px;
            -moz-border-radius: 6px;
            -webkit-border-radius: 6px;
            box-shadow: 3px 3px 9px rgba(164,164,186,0.2);
            h4{
                font-size: 18px;
                color: var(--dark-gray);
                margin-bottom: 20px;
            }
            .row{
                display: flex;
                align-items: center;
                margin: 7px 0;
                input[type="checkbox"]{
                    accent-color: var(--secondary-color);
                    :hover{
                        accent-color: var(--secondary-color);
                        
                    }
                }
                span{
                    margin-left: 7px;
                    color: gray;
                }
            }
        }
    }
    .cards{
        // background: red;
        // width: 100%;
        flex: 0.82;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
}

`

export const CardContainer = styled.div`
@media (max-width: 610px){
    width: 100%;
}
background: white;    
width: 100%;
    max-width: 280px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 3px 9px rgba(164,164,186,0.2);
    border: solid 1px #dddddd;
    margin: 10px;
    img{
        max-width: 340px;
        height: 150px;
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
            margin: 1rem 0;
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