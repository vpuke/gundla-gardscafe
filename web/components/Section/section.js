import styled from "styled-components";

const StyledSection = styled.section`
height: 100vh;

a {
  font-size: 16px;
}
`;

const Section = (props) => {
    return (
      <StyledSection id={props.id}>
          <h1>{props.title}</h1>
          {props.children}
      </StyledSection>
    );
  };
  
  export default Section;