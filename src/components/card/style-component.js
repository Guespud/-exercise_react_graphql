import styled from "styled-components";

const BodyContainer = styled.div`
  padding: 96px 90px 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 48em) {
    padding: 74px 40px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  margin-right: 20px;

  @media (max-width: 48em) {
    margin: 0px !important;
    place-items: center;
  }

  & > img {
    width: 100%;
    height: auto;
    min-width: 300px;
  }
`;

const CardAnimate = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(136 152 170 / 15%) 0px 0px 2rem 0px;
  transition: all 0.5s ease 0s;
  border-radius: 0.3rem;

  @media (max-width: 48em) {
    margin-top: 20px;
  }
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  margin-right: 20px;

  @media (max-width: 48em) {
    margin-right: 0px;
  }
`;

const ContainerHeadCard = styled.div`
  border-bottom: 1px solid rgb(236, 237, 239);
  padding: 0.75rem 1.25rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: rgb(255, 255, 255);
  text-align: left;

  & > h5 {
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0px;
    color: rgb(31, 38, 45);
  }
  & > h6 {
    font-size: 0.625rem;
    text-transform: uppercase;
    margin: 4px 0px;
    font-weight: 600;
    color: rgb(111, 115, 122);
  }
`;
const ContainerBodyCard = styled.div`
  padding: 1.25rem;
  flex: 1 1 auto;
`;

const Separate = styled.hr`
  border: 0.5px solid rgb(236, 237, 239);
`;

const Atributtes = styled.span`
  font-weight: bold;
  margin-right: auto;
`;
const ContainerAtributtes = styled.div`
  display: flex;
`;

const Generate = styled.button`
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
  background: linear-gradient(135deg, rgb(48, 206, 231), rgb(130, 101, 252));
  color: rgb(255, 255, 255);
  margin-left: auto;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
  & > button {
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    border: none;
    font-size: 12px;
    text-transform: uppercase;
    padding: 0.875rem 10%;
    background: #1f262d;
    color: white;
  }

  &:hover button {
    color: #1273eb;
  }
`;

const Loading = styled.div`
  padding: 96px 90px 20px;
  text-align: center;
  & > p {
    font-size: 50px;
    font-size: 800;
  }
`;

export {
  BodyContainer,
  Container,
  Image,
  CardAnimate,
  ContainerCard,
  ContainerHeadCard,
  Separate,
  Atributtes,
  ContainerAtributtes,
  ContainerBodyCard,
  Generate,
  Btn,
  Loading,
};
