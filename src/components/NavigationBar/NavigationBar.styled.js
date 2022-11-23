import styled from 'styled-components';
import Colors from '../../constants/Colors';
import { NavLink } from 'react-router-dom';

export const NavbarWrapper = styled.nav`
  width: 122px;
  height: 100%;
  background-color: ${Colors.bluePrimary};
  padding-top: 101px;
`;

export const NavbarItemWrapper = styled(NavLink)`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  cursor: pointer;
  text-decoration: none;
`;

export const NavbarIcon = styled.img`
  width: 22px;
  height: 22px;
`;

export const NavbarTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${Colors.white};
  margin-top: 10px;
`;
