import styled from "styled-components";

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
`;


export const FormInput = styled.input`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  align-items: center;
  font-size: 20px;
  text-align: left;
  padding: 5px 20px;
    `;

export const FormButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: grey;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  height: 40px;
  min-width: 150px;
  padding: 0 10px;
  &:hover {
  background-color: teal;
  cursor: pointer;
  }
 `;