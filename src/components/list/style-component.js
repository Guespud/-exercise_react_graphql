import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;
  transition: all 0.5s ease 0s;
  border-radius: 0.3rem;
  margin-bottom: 20px;
  flex-direction: row;

  & > img {
    padding: 10px;
    width: 80px;
    height: auto;
    border-radius: 50%;
  }
`;

const Detail = styled.div`
  padding: 1.25rem;
  flex: 1 1 auto;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 22px;

  &:hover button {
    color: #1273eb;
  }

  @media (max-width: 48em) {
    padding: 0.25rem;
  }

  & > button {
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    border: none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 12px;
    width: max-content;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.875rem 1rem;
    margin-top: 20px;
    background: #1f262d;
    color: white;
    margin-left: auto;

    @media (max-width: 48em) {
      margin-top: 0px;
    }
  }

  & > span {
    padding: 1rem;
    flex: 1 1 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 30px;
    font-weight: 700;

    @media (max-width: 48em) {
      padding: 0rem;
      font-size: 20px;
    }
  }
`;

export { Container, Detail };
