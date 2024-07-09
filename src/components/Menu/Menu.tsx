import React, { FC } from 'react';
import { MenuWrapper, DisplyCentr } from './Menu.styled';

interface MenuProps {}

const Menu: FC<MenuProps> = () => (
 <MenuWrapper>
   <DisplyCentr>
    <p> Menu </p>
    <a> Number</a>
    <a> Model</a>
    <a> VIN code</a>
   </DisplyCentr>
   
 </MenuWrapper>
);

export default Menu;
