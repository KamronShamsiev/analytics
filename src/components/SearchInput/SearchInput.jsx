import * as S from './SearchInput.styled';

const SearchInput = ({ title }) => {
  return (
    <S.InputWrapper>
      <S.Input placeholder={`Search ${title}`} />
      <S.ApplyButton>Apply</S.ApplyButton>
    </S.InputWrapper>
  );
};

export default SearchInput;
