import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const ContentLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 50px;
  background: linear-gradient(
      162.35deg,
      rgba(236, 237, 243, 0.2) 60.07%,
      rgba(138, 138, 138, 0.2) 80.3%
    ),
    #f1f1f1;
`;

export const ContentHeader = styled.div`
  width: 100%;
  height: 50px;
  margin: 14px 0 6px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 15px;
`;

export const HeaderImage = styled.img`
  width: 134px;
`;
