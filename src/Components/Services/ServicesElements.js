import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 600px;
  text-align: center;
  padding: 50px;
  flex-direction: colomn;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media screen and (max-width: 1080px) {
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    height: 600px;
  }

  @media screen and (max-width: 480px) {
    height: 600px;
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  margin-top: 50px;
  grid-template-columns: 1fr 1 fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 0px 20px;
  }
`;

export const ServicesCard = styled.div`
  box-shadow: 0px 2px 5px black;
  background-color: rgb(16, 47, 50);

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 1px 5px black;
  color: grey;
  height: 380px;
  width: 400px;
  padding: 10px;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: 350px;
  }

  @media screen and (max-width: 480px) {
    height: 350px;
  }
`;

export const ServicesIcon = styled.img`
  height: 50%;
  width: 250px;
  margin-bottom: 10px;
  margin-top: 30px;

  @media screen and (max-width: 1080px) {
    height: 30%;
    width: 135px;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: crimson;
  text-shadow: 2px 2px 8px #c1e910;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-decoration: none;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
