import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;

  left: 0;
  top: 0;

  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
`;

export const ModalBody = styled.div`
  background-color: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      line-height: 0;
      border: none;
      background-color: transparent;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      opacity: 0.8;
      font-weight: 500;
    }

    div {
      margin-top: 8px;
      display: flex;
      gap: 8px;
    }
  }

`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .order-itens {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
        }

        span {
          font-size: 0.875rem;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 12px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 12px 24px;
    gap: 8px;
    width: 100%;

    border-radius: 48px;
    border: none;

    background-color: #333;

    color: #fff;
    font-size: 1rem;
  }

  .secondary {
    background-color: transparent;
    padding: 14px 24px;
    color: #d73035;
    font-weight: bold;
    border: none;
  }
`;
