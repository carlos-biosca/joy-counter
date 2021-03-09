import styled from 'styled-components'

const InputLabel = styled.label`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-size: 24px;
  box-sizing: border-box;

  &:hover {
    color: ${({ theme }) => theme.redcolor};
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default InputLabel;