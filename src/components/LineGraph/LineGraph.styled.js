import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 387px;
  height: 288px;
  border-radius: 27px;
  padding: 24px 0;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  padding: 0 24px;
`;

export const LinesTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 40px;
`;

export const LineTitle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const LineColor = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ color }) => color};
  margin-right: 5px;
`;

export const LineDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${Colors.typographyPrimary};
`;
