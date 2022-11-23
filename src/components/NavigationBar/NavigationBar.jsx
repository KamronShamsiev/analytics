import * as S from './NavigationBar.styled';

const NavbarItemsArray = [
  { title: 'Nodes', icon: 'assets/icons/nodes.png', link: '/' },
  {
    title: 'Suppliers',
    icon: 'assets/icons/suppliers.png',
    link: '/suppliers',
  },
  { title: 'Products', icon: 'assets/icons/products.png', link: '/products' },
  { title: 'Offers', icon: 'assets/icons/offers.png', link: '/offers' },
];

const NavigationBar = () => {
  return (
    <S.NavbarWrapper>
      {NavbarItemsArray.map(({ title, icon, link }) => {
        return (
          <S.NavbarItemWrapper
            key={title}
            to={link}
            className={({ isActive }) => isActive && 'active'}
          >
            <S.NavbarIcon src={icon} />
            <S.NavbarTitle>{title}</S.NavbarTitle>
          </S.NavbarItemWrapper>
        );
      })}
    </S.NavbarWrapper>
  );
};

export default NavigationBar;
