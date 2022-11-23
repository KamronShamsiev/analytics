import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 210px;
  padding: 28px 28px 26px 28px;
  border-radius: 27px;
  box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: ${Colors.typographyPrimary};
`;

export const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 13px;
`;

export const AccountIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export const AccountTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${Colors.typographyPrimary};
  margin: 0 7px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const FilterLabel = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${Colors.typographyPrimary};
  margin-right: 5px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
