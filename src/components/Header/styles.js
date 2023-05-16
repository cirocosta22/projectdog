import styled from "styled-components";
import img from '../../Assets/usuario.svg'

export const ContainerHeader = styled.div`
    box-shadow: 0px 1px 1px rgba(0, 0, 0, .1);
   
    position: fixed;
    width: 100%;
    z-index: 100;
   top: 0px;

    >nav{ 
        display: flex;
        justify-content: space-between;
        align-items:center;
        height: 4rem;
        >.logo{
           padding: 0.5rem 0 ;
        }
        >.login{
             color: #333;
            display: flex;
            align-items: center;
            font-weight: bold;
        }
        .login::after{
             content: '';
             display: inline-block;
             width: 14px;
             height: 17px;
             background: url(${img}) no-repeat center center; 
             position: relative;
             top: -1px;
             margin-left: .5rem;
        }
    }
 

`
