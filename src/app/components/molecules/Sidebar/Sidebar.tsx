import { Colors } from '@styles/colors';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

import { SidebarMenu } from './SidebarMenu';

export const SideBar = ({ routes }: SideBarProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: 'auto',
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Sidebar
      animate={{
        width: isOpen ? '300px' : '45px',
        transition: {
          duration: 0.5,
          type: 'spring',
          damping: 10,
        },
      }}
    >
      <TopSection>
        <AnimatePresence>
          {isOpen && (
            <Logo
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Quick Links
            </Logo>
          )}
        </AnimatePresence>

        <Bars>
          <FaBars onClick={toggle} />
        </Bars>
      </TopSection>

      <Routes>
        {routes.map((route, index) => {
          if (route.subRoutes) {
            return (
              <SidebarMenu
                setIsOpen={setIsOpen}
                route={route}
                showAnimation={showAnimation}
                isOpen={isOpen}
                key={index}
              />
            );
          }
          return (
            <Nav key={index}>
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <LinkText
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                  >
                    {route.name}
                  </LinkText>
                )}
              </AnimatePresence>
            </Nav>
          );
        })}
      </Routes>
    </Sidebar>
  );
};

const Sidebar = styled(motion.div)`
  background-color: ${Colors.Primary};
  color: ${Colors.White};
  position: sticky;
  top: 0px;
  height: 60vh;
  overflow-y: auto;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
`;

const Logo = styled(motion.h1)`
  font-size: 18px;
  line-height: 0;
`;

const Bars = styled.div`
  width: 30px;
`;

const Routes = styled.section`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Nav = styled.nav`
  display: flex;
  color: white;
  gap: 10px;
  padding: 5px 10px;
  border-right: 4px solid transparent;
  transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);

  &:hover {
    border-right: 4px solid white;
    background: rgb(45, 51, 89);
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  &.active {
    border-right: 4px solid white;
    background: rgb(45, 51, 89);
  }
`;

const LinkText = styled(motion.h1)`
  white-space: nowrap;
  font-size: 15px;
`;

type SideBarProps = {
  routes: {
    name: string;
    icon: JSX.Element;
    subRoutes: {
      name: string;
      icon: JSX.Element;
    }[];
  }[];
};
