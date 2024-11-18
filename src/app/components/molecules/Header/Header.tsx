import { NextIntlClientProvider, useLocale } from 'next-intl';

import { LogoBasic } from '../../atoms/Logo/Logo';
import { MenuButton } from '../../atoms/MenuButton/MenuButton';
// import { FontWeights } from "@styles/fonts";
// import { media } from "@styles/media";
import { TopNavigation } from '../TopNavigation/TopNavigation';
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import { useState } from "react";
import styles from './Header.module.css';

export async function Header(): Promise<JSX.Element> {
  const locale = useLocale();

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {}

  return (
    <header className={styles.header}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <TopNavigation />
      </NextIntlClientProvider>
      <div className={styles.mainNavigation}></div>
    </header>
  );
  // const [isClosed, setIsClosed] = useState(true);
  // const itemVariants = {
  //   open: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { type: "spring", stiffness: 500, damping: 24 },
  //   },
  //   closed: {
  //     opacity: 0,
  //     y: -240,
  //     transition: { duration: 0.2 },
  //   },
  // };
  // const isHiddenStyle = "hidden";
  // const isVisibleStyle = "visible";
  // return (
  //   <header>
  //     {/* <TopNavigation /> */}
  //     <MainNavigation>
  //       <LeftSide>
  //         <LogoBasic />
  //       </LeftSide>
  //       <Middle>
  //         <DesktopNav>
  //           <NavLink href="/destinations">Destinations</NavLink>
  //           <NavLink href="/resources">resources</NavLink>
  //           <NavLink href="/diaries">Diaries</NavLink>
  //           <NavLink href="/blogs">Blogs</NavLink>
  //           <NavLink href="/godchildren">Godchildren</NavLink>
  //         </DesktopNav>
  //       </Middle>
  //       <RightSide>
  //         <MobileNav>
  //           <MenuButtonWrapper
  //             initial={{ opacity: 0.6 }}
  //             whileInView={{ opacity: 1 }}
  //             whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
  //             onClick={() => {
  //               setIsClosed(!isClosed);
  //             }}
  //           >
  //             <MenuButton
  //               isOpen={!isClosed}
  //               strokeWidth="1"
  //               color="var(--color-primary)"
  //               transition={{ ease: "easeOut", duration: 0.2 }}
  //               width="48"
  //               height="24"
  //             />
  //           </MenuButtonWrapper>
  //         </MobileNav>
  //       </RightSide>
  //     </MainNavigation>
  //     <motion.div animate={isClosed ? "closed" : "open"}>
  //       <HiddenNavigation>
  //         <motion.ul
  //           variants={{
  //             open: {
  //               paddingTop: "64px",
  //               paddingBottom: "0px",
  //               transition: {
  //                 type: "spring",
  //                 bounce: 0,
  //                 duration: 0.7,
  //                 delayChildren: 0.3,
  //                 staggerChildren: 0.05,
  //               },
  //             },
  //             closed: {
  //               paddingTop: "0px",
  //               paddingBottom: "0px",
  //               transition: {
  //                 type: "spring",
  //                 bounce: 0,
  //                 duration: 0.2,
  //               },
  //             },
  //           }}
  //           className={isClosed ? isHiddenStyle : isVisibleStyle}
  //         >
  //           <motion.li variants={itemVariants}>
  //             <NavLink href="/destinations">Destinations</NavLink>
  //           </motion.li>
  //           <motion.li variants={itemVariants}>
  //             <NavLink href="/resources">resources</NavLink>
  //           </motion.li>
  //           <motion.li variants={itemVariants}>
  //             <NavLink href="/diaries">Diaries</NavLink>
  //           </motion.li>
  //           <motion.li variants={itemVariants}>
  //             <NavLink href="/blogs">Blogs</NavLink>
  //           </motion.li>
  //           <motion.li variants={itemVariants}>
  //             <NavLink href="/godchildren">Godchildren</NavLink>
  //           </motion.li>
  //         </motion.ul>
  //       </HiddenNavigation>
  //     </motion.div>
  //   </header>
  // );
}

// const MainNavigation = styled.div`
//   padding: 16px var(--right-left-global-padding);
//   background-color: var(--color-primary);
//   display: flex;
//   align-items: center;
//   border-top: 3px solid var(--color-contrast);
//   box-shadow: 2.6px 5.1px 5.1px hsl(0deg 0% 0% / 0.42);

//   ${media.from_tablet`
//     border-top: none;
//   `}
// `;

// const LeftSide = styled.div`
//   display: flex;
//   flex: 1;
// `;

// const RightSide = styled.div`
//   flex: 1;
//   justify-content: flex-end;
//   display: flex;

//   ${media.from_tablet`
//     display: none;
//   `}

//   ${media.from_large_laptop`
//     display: flex;
//   `}
// `;

// const Middle = styled.div`
//   display: none;

//   ${media.from_tablet`
//     display: flex;
//   `}
// `;

// const DesktopNav = styled.nav`
//   display: flex;
//   gap: 1rem;
//   /* gap: clamp(0.1rem, 2.1vw + 1rem, 2.5rem); */
// `;

// const MobileNav = styled.div`
//   display: flex;
//   ${media.from_tablet`
//     display: none;
//   `}
// `;

// const HiddenNavigation = styled.div`
//   padding-inline: 16px var(--right-left-global-padding);
//   background-color: var(--color-primary);
//   position: absolute;
//   width: 100%;

//   ul {
//     &.hidden {
//       display: none;
//     }

//     &.visible {
//       display: flex;
//       flex-direction: column;
//     }
//   }

//   li {
//     padding-block: 16px;
//   }

//   li:first-child {
//     padding-top: 0px;
//   }

//   li:not(:last-child) {
//     border-bottom: 1px solid var(--color-primary-dark);
//   }
// `;

// const NavLink = styled.a`
//   font-size: 1rem;
//   text-transform: uppercase;
//   text-decoration: none;
//   color: var(--color-gray-900);
//   font-weight: ${FontWeights.Medium};
//   cursor: pointer;

//   ${media.from_desktop`
//     font-size: 1.125rem;
//   `}

//   ${media.from_large_laptop`
//     font-size: 1.250rem;
//   `}
// `;

// const MenuButtonWrapper = styled(motion.button)`
//   all: unset;
//   cursor: pointer;
// `;
