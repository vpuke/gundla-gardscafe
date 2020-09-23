import styled from "styled-components";
import { device } from "../MediaQueries/mediaQueries";

const StyledSection = styled.section`
  height: 100%;
  background-image: url("dark-background.png");
  color: white;
  background-repeat: no-repeat;
  background-size: cover;

  a {
    font-size: 16px;
  }

  h1 {
    text-align: center;
    margin: 0;
    padding: 20px 0 0 0;
  }

  @media ${device.mobileS} {
    h1 {
      font-size: 25px;
    }
  }

  @media ${device.laptop} {
    h1 {
      font-size: 64px;
    }
  }
`;

const Section = (props) => {
  return (
    <StyledSection
      className={props.id === "menu" ? "menu-background" : " "}
      id={props.id}
    >
      <h1>{props.title}</h1>
      {props.children}
    </StyledSection>
  );
};

export default Section;
