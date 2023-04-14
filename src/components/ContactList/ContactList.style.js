import styled from "styled-components";

export const ContactListCantainer = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
`;


export const ContactListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 40px;
    padding: 10px;
    `;

export const ContactListButton = styled.button`
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