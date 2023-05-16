import styled from "styled-components";


export const ContainerInput = styled.div`
              margin-bottom: 1rem;

              >input{ 
                border: 1px solid #eee;
                display: block;
                width: 100%;
                font-size: 1rem;
                padding: 0.8rem;
                border-radius: 0.4rem;
                transition: .1s;
                background: #eee;
              }

            >input:focus,input:hover{
                outline: none;
                border-color: #fb1;
                background: white;
                box-shadow: 0 0 0 3px #fea;

            }
          
            >label{ 
                display: block;
                font-size: 1rem;
                line-height: 1;
                padding-bottom: 0.5rem;
            }

            >p {
                color: #f31;
                font-size: .875rem;
                margin-top: 0.25rem;
                
            }

`