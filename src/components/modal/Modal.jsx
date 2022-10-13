import React, { useContext } from 'react';
import styled from 'styled-components'
import CheckoutPaymentsData from '../payments/PaymentsData';
import { ProductContext } from '../../context/ProductContext';

const Modal = ({ children }) => {

  const { 
    modal1, 
    modal2, 
    modal3, 
    modalSearchFilter, 
    modalSplit1, 
    modalSplit2,
    modalSplit3,
    modalSplit4,
    modalSplit5,
  } = useContext(ProductContext);

  return (
    <>
      {modal1 &&
        <Overlay>
          {children}
        </Overlay>
      }
      {modal2 && 
        <Overlay>
          {children}
        </Overlay>
      }
      {modal3 &&
        <Overlay>
          {children}
        </Overlay>
      }

      {modalSplit1 &&
        <Overlay>
          {children}
        </Overlay>
      }

      {modalSplit2 &&
        <Overlay>
          {children}
        </Overlay>
      }

      {modalSplit3 &&
        <Overlay>
          {children}
        </Overlay>
      }

      {modalSplit4 &&
        <Overlay>
          {children}
        </Overlay>
      }

      {modalSplit5 &&
        <Overlay>
          {children}
        </Overlay>
      }

      {modalSearchFilter &&
        <Overlay>
          {children}
        </Overlay>
      }

    </>
  )
}

export default Modal

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.5);
`;

