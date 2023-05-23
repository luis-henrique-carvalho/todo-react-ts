import styled from "styled-components";

export const theme = {
  colors: {
    primary: "#61dafb",
    secondary: "#282c34",
  },
};

export const HeaderStyled = styled.header`
  background-color: red;
`;

export const TaskFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  input {
    padding: 8px 15px;
    margin-bottom: 1.5em;
    border-radius: 0;
    border: 1px solid #282c34;
  }

  input[type="submit"] {
    background-color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secundary};
    transition: 0.5s;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: white;
    border-color: gray;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .input-container label {
    font-weight: bold;  
    margin-bottom: 0.4em;
  }
`;
