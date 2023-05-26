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

export const TaskListStyled = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin: 0 auto;
  border-bottom: 1px solid grey;
  padding: 1em;

  .details {
    text-align: left;
  }

  .details h4 {
    font-size: 1.2em;
    margin-bottom: 1em;
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .actions i {
    margin-bottom: 0.5em;
    font-size: 1.2em;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    padding: 0.4em;
    transition: 0.5s;
  }

  .actions i:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
