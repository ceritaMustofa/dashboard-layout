import Footer from "../Footer";
import Header from "../Header";
import { Container, Content, PageContainer } from "./styles";

import { useState } from "react";
import Sidebar from "../Sidebar";

type DashboardLayoutProps = {
    children: React.ReactNode,
  };

export default function Layout({ children }: DashboardLayoutProps) {
  const [isOpened, setOpened] = useState(false);
  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
        <Container>
          <Header isOpened={isOpened} toggelDrawer={toggleDrawer}/>
          <Content>
            <Sidebar isOpened={isOpened}/>
            <PageContainer>{children}</PageContainer>
          </Content>
          <Footer />
        </Container>
  )
}