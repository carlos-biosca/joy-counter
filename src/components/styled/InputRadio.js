import styled from 'styled-components';

const InputRadio = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;

  &:checked + label,
  &:focus + label {
    box-shadow: none;
    background-color: ${({ theme }) => theme.blackcolor};
  }

  &:checked + label{
    color: ${({ theme }) => theme.whitecolor};
  }

  &:focus + label {
    color: ${({ theme }) => theme.redcolor};
  }
`;

export default InputRadio;