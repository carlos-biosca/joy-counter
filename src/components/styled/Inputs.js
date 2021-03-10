import styled from 'styled-components';

const InputContainer = styled.div`
  width: 313px;
  margin: 0 auto;
  text-align: left;
`;

const ContainerActivity = styled(InputContainer)`
  & input {
    height: 59px;
    width: 313px;
    box-sizing: border-box;
    border: 3px solid black;
    font-size: 24px;
    text-indent: 10px;
    background-color: ${({ theme }) => theme.whitecolor}
  }
`;

const ContainerEffect = styled(InputContainer)`
  margin-bottom: 13px;
`;

const ContainerIntensity = styled(InputContainer)`
  margin-bottom: 62px;

  & div {
    display: flex;
    justify-content: space-between;
  }
`;

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

export { InputContainer, ContainerActivity, ContainerEffect, ContainerIntensity, InputRadio };