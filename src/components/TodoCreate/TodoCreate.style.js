import styled from "styled-components";

export const TodoContent = styled.form`
    width: 100%;
    max-width: 500px;
    background-color: #1a1a1a;
    border-radius: 8px;
    padding: 1.2em;
    display: flex;
    place-items: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
`;

export const TodoContentHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    align-items: center;
`;

export const TodoContentButton = styled.button`
    background: transparent;
    border: none;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
`;

export const TodoModalBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TodoTextArea = styled.textarea`
    min-width: 100%;
    max-width: 100%;
    max-height: 120px;
    min-height: 30px;
    display: flex;
    flex-direction: column;

    font-family: Arial, Helvetica, sans-serif;
    padding-left: 5px;
    padding-top: 5px;
`;

export const TodoBottonCreate = styled.button`
    cursor: pointer;
    border-radius: 40px;
    margin: 20px;
    width: 50%;
    height: 40px;
    transition: all .5s;

    &:hover{
        color:red;
        width: 30%;
    }
`;
