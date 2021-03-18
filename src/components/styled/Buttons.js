import styled from 'styled-components';

const SubmitButton = styled.input`
  width: 172px;
  height: 67px;
  background: ${({ theme }) => theme.whitecolor};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  font-weight: 700;
  font-size: 32px;
  border: none;
  outline: none;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.blackcolor};
    color: ${({ theme }) => theme.whitecolor};
  }

  &:active {
    transform: scale(0.9);
    color: ${({ theme }) => theme.redcolor};
    box-shadow: none;
  }
`;

const InfoButton = styled(SubmitButton)`
  margin-left: 90px;
`;

export { SubmitButton, InfoButton };