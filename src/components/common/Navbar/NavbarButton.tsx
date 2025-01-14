import React from 'react';
import './NavbarButton.scss';

interface NavbarButtonProps {
  label: string;
  route: string;
  selected: boolean;
}

export const NavbarButton = ({ label, route, selected }: NavbarButtonProps) => {
  return (
    <a
      href={`${route}`}
      className={`${selected ? 'button_selected' : 'button_unselected'}`}
    >
      {label.toLocaleUpperCase()}
    </a>
  );
};
