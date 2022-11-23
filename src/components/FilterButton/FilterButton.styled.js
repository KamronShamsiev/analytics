import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const ButtonWrapper = styled.button`
  padding: 9px 20px;
  border: ${({ isActive }) =>
    isActive
      ? `2px solid ${Colors.bluePrimary}`
      : `2px solid ${Colors.boxBorder}`};
  border-radius: 16px;
  cursor: pointer;
  margin: 0 5px;
`;

export const ButtonTitle = styled.p`
  font-size: 14px;
  color: ${Colors.typographyPrimary};
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
`;
