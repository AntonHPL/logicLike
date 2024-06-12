import { FC } from 'react'
import { ALL_CATEGORIES } from './helpers'
import { StyledMenu, StyledMenuItem } from '../styles/Menu.styled'
import { MenuProps } from './types';

const Menu: FC<MenuProps> = ({ selectedTag, setSelectedTag }) => {
  const menuItems = [
    { title: ALL_CATEGORIES, code: ALL_CATEGORIES },
    { title: 'Логика и мышление', code: 'Логика и мышление' },
    { title: 'Загадки', code: 'Загадки' },
    { title: 'Головоломки', code: 'Головоломки' },
    { title: 'Путешествия', code: 'Страны и столицы' },
  ];

  return (
    <StyledMenu>
      {menuItems.map(({ title, code }) => (
        <StyledMenuItem
          key={code}
          $isActive={code === selectedTag}
          onClick={() => setSelectedTag(code)}
        >
          {title}
        </StyledMenuItem>
      ))}
    </StyledMenu>
  )
}

export default Menu
