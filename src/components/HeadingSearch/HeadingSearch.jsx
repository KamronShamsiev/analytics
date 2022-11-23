import * as S from './HeadingSearch.styled';
import FilterButton from '../FilterButton/FilterButton';
import { useState } from 'react';

const ButtonsArray = [
  { title: 'Current month' },
  { title: '3 months' },
  { title: '1 year' },
];

const HeadingSearch = () => {
  const [activeButton, setActiveButton] = useState('Current month');

  const activeHandler = (title) => setActiveButton(title);

  console.log(activeButton);

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>Nodes</S.Title>
        <S.AccountWrapper>
          <S.AccountIcon src="assets/icons/account.png" alt="account" />
          <S.AccountTitle>Account</S.AccountTitle>
          <img src="assets/svgs/arrow.svg" alt="arrow" />
        </S.AccountWrapper>
      </S.TitleWrapper>
      <S.FilterWrapper>
        <S.FilterLabel>Showing data for:</S.FilterLabel>
        {ButtonsArray.map(({ title }) => {
          return (
            <FilterButton
              onClick={() => setActiveButton(title)}
              key={title}
              title={title}
              isActive={activeButton === title}
            />
          );
        })}
      </S.FilterWrapper>
      <S.SearchWrapper>
        <FilterButton title="All Nodes" isActive />
      </S.SearchWrapper>
    </S.Wrapper>
  );
};

export default HeadingSearch;
