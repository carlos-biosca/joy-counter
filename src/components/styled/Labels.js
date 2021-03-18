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

const LabelEffect = styled(InputLabel)`
  display: inline-block;
  width: 150px;
  height: 59px;
  line-height: 58px;
  outline: none;

  &.positivo {
    margin-right: 13px;
  }
`;

const LabelIntensity = styled(InputLabel)`
  width: 40px;
  height: 46px;
  font-weight: 700;
  line-height: 49px;
`;


export { InputLabel, LabelEffect, LabelIntensity };