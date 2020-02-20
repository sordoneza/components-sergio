import React, { useState } from "react";
import Sidebar from "react-sidebar";
import styled, { withTheme } from "styled-components";
import classnames from "classnames";

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  list-style: none;
  width: 200px;
  heiht: 50px;

  &:hover {
    cursor: pointer;
  }

  &.active {
    background: #7cca98;
  }

  & a {
    text-decoration: none;
    color: white;
    padding: 16px;
    display: block;
  }
`;

const MenuItem = ({ children, tag, active, ...rest }) => {
  const Tag = tag || "a"; // Si le llega la props Tag se renderiza este componenete si no
  // se renderiza un elemento <a></a>
  const linkClass = classnames({ active });

  return (
    <StyledLi className={linkClass}>
      <Tag {...rest}>{children}</Tag>
    </StyledLi>
  );
};

const Container = ({ children, theme, sidebar }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Sidebar
      sidebar={sidebar}
      open={sidebarOpen}
      onSetOpen={open => setSidebarOpen(open)}
      styles={{ sidebar: { background: theme.color.green } }}
    >
      {children({ openSidebar: () => setSidebarOpen(true) })}
    </Sidebar>
  );
};

Container.SidebarMenu = StyledUl;
Container.SidebarMenuItem = MenuItem;

export default withTheme(Container);
