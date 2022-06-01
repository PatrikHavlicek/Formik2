import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 50rem;
  background-color: lightblue;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  column-width: 20rem;
  font-size: 2rem;
  padding: 3rem;
  border: 0.2rem solid darkblue;
  border-radius: 3rem;
`;

export const LabelStyled = styled.label`
  margin-bottom: 0.5rem;
`;

export const InputStyled = styled.input`
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

export const BtnStyled = styled.button`
  margin: 5rem auto;
  width: 20rem;
  height: 5rem;
  background-color: lightskyblue;
  border: 0.2rem solid darkblue;
  border-radius: 2rem;
  cursor: pointer;
`;

export const ErrorStyled = styled.div`
  color: red;
  margin-top: -1.5rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  width: fit-content;
`;

export const SSelect = styled.select`
  display: block;
  margin: 10rem auto 5rem;
`;
