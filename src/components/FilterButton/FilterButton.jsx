import * as S from './FilterButton.styled';

const FilterButton = ({ title, isActive, onClick }) => {
  return (
    <S.ButtonWrapper isActive={isActive} onClick={onClick}>
      <S.ButtonTitle isActive={isActive}>{title}</S.ButtonTitle>
    </S.ButtonWrapper>
  );
};

export default FilterButton;
