import { HeaderContainer, TitleContainer, IconContainer } from "./styles";
import { Menu, MenuOpen } from "@styled-icons/material";

type HeaderProps = {
  isOpened: boolean,
  toggelDrawer: () => void
}

export default function Header({isOpened, toggelDrawer}: HeaderProps) {
  return (
    <HeaderContainer>
      <IconContainer onClick={toggelDrawer}>
        {isOpened? <MenuOpen /> : <Menu />}
      </IconContainer>
      <TitleContainer>Rana Micro Roastery</TitleContainer>
    </HeaderContainer>
  );
}