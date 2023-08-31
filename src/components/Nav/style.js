import styled from "styled-components"


export const NavContainer = styled.div`
    height: 70px;
    // background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    `
    
export const NavWrapper = styled.div`

    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-width);
    width: 100%;
    // background: blue;
    display: flex;
    .logo{
        img{
            height: 50px;
        }
    }

    .navs{
        display: flex;
        list-style: none;
        .nav{
            margin: 0 1.6rem;
            cursor: pointer;
            position: relative;
            align-items: center;
            justify-content: center;
            display: flex;
            font-size: 15px;
        }
        .active::before{
            content: '';
            position: absolute;
            bottom: 2px;
            margin: 0 auto;
            height: 3px;
            width: 70%;
            border-radius: 50px;
            background: var(--primary-color);
        }
        @media (max-width: 700px) {
            display: none;
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

        @media (max-width: 700px) {
            display: none;
        }
    }
    .menu_icon{
        font-size: 25px;
        display: none;
        @media (max-width: 700px) {
            display: flex;

        }
    }
`


export const SideBar = styled.div`
    // background: red;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: var(--white);
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 70%;
    max-width: 400px;
    transition: all 1s ease-out;
    .btn{
        height: 6rem;
        font-size: 30px;
        padding: 10px;
    }
    .navs{
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 0 15px;
        .nav{
            margin: 5px;
            font-size: 20px;
        }
    }
    

`