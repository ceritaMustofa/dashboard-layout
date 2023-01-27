import MenuItemsList from "../MenuItemsList";
import { MENU_ITEMS } from "@/constants/menu-items";
import { SidebarContainer } from "./styles";


type SidebarProps = {
    isOpened: boolean;
  };

export default function Sidebar({ isOpened }: SidebarProps) {
  return (  
    <SidebarContainer isOpened={isOpened}>
      <MenuItemsList options={MENU_ITEMS} />
    </SidebarContainer>
  )
}