import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  width: 400px;
  background: linear-gradient(to right, #159957, #155799);
  color: palevioletred;
  box-shadow: rgba(0, 0, 0, 0.4) 5px 5px, rgba(0, 0, 0, 0.3) 10px 10px,
    rgba(0, 0, 0, 0.2) 15px 15px, rgba(0, 0, 0, 0.1) 20px 20px,
    rgba(0, 0, 0, 0.05) 25px 25px;
  font-size: 1em;
  margin: 1em;
  padding: 5rem;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: white;
  border-radius: 0 2rem;
`;
export const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    border-radius: 50rem;
    align-items: right;
  }
  p {
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
  }
`;
export const Text = styled.div`
  margin-top: 1rem;
  padding-left: 3rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 25px;
    justify-content: center;
  }
  p {
    width: 100%;
    text-align: center;
  }
`;
export const Info = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 25px;
    justify-content: center;
  }
  p {
    width: 100%;
    text-align: center;
  }
`;
