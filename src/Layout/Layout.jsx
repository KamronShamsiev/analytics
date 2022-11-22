import React from 'react';
import * as S from './Layout.styled.js';
import NavigationBar from '../components/NavigationBar/NavigationBar';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <NavigationBar />
      <S.ContentLayout>{children}</S.ContentLayout>
    </S.LayoutWrapper>
  );
};

export default Layout;
