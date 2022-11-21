import styled from 'styled-components';

export const Board = styled.div`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  flex: 1;

  > header {
    padding: 8px;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    background-color: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    padding: 40px 0;

    strong {
      font-weight: 500;
      font-size: 1rem;
    }

    span {
      font-weight: 400;
      font-size: 0.875rem;
      color: #666;
    }

    & + button {
      margin-top: 24px;
    }
  }
`;
