import React from 'react';
import * as S from './Layout.styled.js';
import NavigationBar from '../components/NavigationBar/NavigationBar';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <NavigationBar />
      <S.ContentLayout>
        <S.ContentHeader>
          <S.HeaderImage src="./assets/images/microsoft.png" />
        </S.ContentHeader>
        {children}
      </S.ContentLayout>
    </S.LayoutWrapper>
  );
};

export default Layout;
