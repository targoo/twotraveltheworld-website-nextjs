import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import styled from 'styled-components';

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: 'afterChildren' },
  },
  show: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
    },
  },
};

const menuItemAnimation = {
  hidden: (index: number) => ({
    padding: 0,
    x: '-100%',
    transition: {
      duration: (index + 1) * 0.1,
    },
  }),
  show: (index: number) => ({
    x: 0,
    transition: {
      duration: (index + 1) * 0.1,
    },
  }),
};

export const SidebarMenu = ({
  route,
  showAnimation,
  isOpen,
  setIsOpen,
}: SidebarMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <Menu onClick={toggleMenu}>
        <MenuItem>
          <div className="icon">{route.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link_text"
              >
                {route.name}
              </motion.div>
            )}
          </AnimatePresence>
        </MenuItem>
        {isOpen && (
          <motion.div
            animate={
              isMenuOpen
                ? {
                    rotate: -90,
                  }
                : { rotate: 0 }
            }
          >
            <FaAngleDown />
          </motion.div>
        )}
      </Menu>{' '}
      <AnimatePresence>
        {isMenuOpen && (
          <MenuContainer
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {route.subRoutes.map((subRoute, index) => (
              <motion.div
                variants={menuItemAnimation}
                key={index}
                custom={index}
              >
                <nav className="link">
                  <div className="icon">{subRoute.icon}</div>
                  <motion.div className="link_text">{subRoute.name}</motion.div>
                </nav>
              </motion.div>
            ))}
          </MenuContainer>
        )}{' '}
      </AnimatePresence>
    </>
  );
};

const Menu = styled.div`
  display: flex;
  color: white;
  padding: 5px 10px;
  border-right: 4px solid transparent;
  transition: 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);
  justify-content: space-between;
`;

const MenuItem = styled.div`
  display: flex;
  gap: 10px;
`;

const MenuContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  .link {
    padding-left: 20px;
    border-bottom: #fff 0.5px solid;
  }
`;

type SidebarMenuProps = {
  route: {
    name: string;
    icon: JSX.Element;
    subRoutes: {
      name: string;
      icon: JSX.Element;
    }[];
  };
  showAnimation: any;
  isOpen: boolean;
  setIsOpen: any;
};
