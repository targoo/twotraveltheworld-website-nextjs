// 'use client';

// import React from 'react';
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaPinterest,
//   FaYoutube,
// } from 'react-icons/fa';
// import Link from 'next/link';
// import styled from 'styled-components';
// import { usePathname } from 'next/navigation';
// import { useTranslations, useLocale } from 'next-intl';

// import { Colors } from '@styles/colors';
// import { media } from '@styles/media';
// import { TextLink } from '../../atoms/TextLink/TextLink';
// import { VisuallyHidden } from '../../atoms/VisuallyHidden/VisuallyHidden';

// export const TopNavigation = () => {
//   const locale = useLocale();
//   const t = useTranslations('Navigation');

//   const pathname = usePathname();
//   const languageHref = locale === 'en' ? '/fr' : '/en';
//   const languageLabel = locale === 'en' ? 'Français' : 'English';

//   return (
//     <StyledNav>
//       <StyledQuickNav>
//         {/* <li className={pathname === "/" ? "active" : ""}>
//           <Link href="/">{t("home")}</Link>
//         </li>
//         <li className={pathname === "/about-us" ? "active" : ""}>
//           <Link href="/about-us">{t("aboutUs")}</Link>
//         </li>
//         <li className={pathname === "/our-gears" ? "active" : ""}>
//           <Link href="/our-gears">{t("ourGears")}</Link>
//         </li> */}
//       </StyledQuickNav>
//       <StyledSocialNav>
//         <li className="language">
//           {/* <Link href={languageHref}>
//             <TextLink>{languageLabel}</TextLink>
//           </Link> */}
//         </li>
//         <li>
//           <a
//             href="https://www.instagram.com/twotraveltheworld2017"
//             target="_blank"
//             rel="noopener noreferrer"
//             suppressHydrationWarning
//           >
//             <UnstyledButton>
//               <span className="content">
//                 <FaInstagram />
//               </span>
//             </UnstyledButton>
//             <VisuallyHidden>Instagram</VisuallyHidden>
//           </a>
//         </li>
//         <li>
//           <Link
//             href="https://twitter.com/twotravelworld"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <UnstyledButton>
//               <span className="content">
//                 <FaTwitter />
//               </span>
//             </UnstyledButton>
//             <VisuallyHidden>Twitter</VisuallyHidden>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="https://www.facebook.com/twotraveltheworld"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <UnstyledButton>
//               <span className="content">
//                 <FaFacebook />
//               </span>
//             </UnstyledButton>
//             <VisuallyHidden>Facebook</VisuallyHidden>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="https://uk.pinterest.com/twotraveltheworld"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <UnstyledButton>
//               <span className="content">
//                 <FaPinterest />
//               </span>
//             </UnstyledButton>
//             <VisuallyHidden>Pinterest</VisuallyHidden>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="https://www.youtube.com/channel/UCPzPOyWi1pou7a0vSldVoQw"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <UnstyledButton>
//               <span className="content">
//                 <FaYoutube />
//               </span>
//             </UnstyledButton>
//             <VisuallyHidden>YouTube</VisuallyHidden>
//           </Link>
//         </li>
//       </StyledSocialNav>
//     </StyledNav>
//   );
// };

// const UnstyledButton = styled.button`
//   border: none;
//   padding: 0;
//   background: transparent;
//   transform: translateY(3px);

//   &:hover .content {
//     transform: translateY(-2px);
//   }

//   .content {
//     display: grid;
//     place-content: center;
//     color: white;
//     font-size: 1.5rem;
//     line-height: 1;
//     transition: transform 250ms ease-in-out;
//     cursor: pointer;
//   }
// `;

// const StyledNav = styled.nav`
//   background-color: ${Colors.Contrast};
//   padding: 0 var(--right-left-global-padding);
//   flex-wrap: wrap;
//   display: none;

//   ${media.from_tablet`
//     display: flex;
//   `}
// `;

// const StyledQuickNav = styled.ul`
//   height: 40px;
//   flex-grow: 3;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   list-style: none;
//   padding: 0;

//   li:not(:last-of-type) {
//     margin-right: clamp(8px, 2vw, 24px);
//   }

//   a {
//     outline-offset: 2px;

//     :hover {
//       color: ${Colors.PrimaryDarkest};
//     }
//   }

//   .active a {
//     font-weight: var(--font-weight-bold);
//   }
// `;

// const StyledSocialNav = styled.ul`
//   height: 40px;
//   flex-grow: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   list-style: none;
//   padding: 0;

//   li {
//     margin-left: 16px;

//     a {
//       color: var(--color-white);
//       display: inline-block;
//       will-change: transform; // Force GPUs acceleration

//       &.icon {
//         transform: translateY(2px);
//         transition: transform 250ms ease-out;

//         @media (prefers-reduced-motion: no-preference) {
//           &:hover {
//             transform: translateY(-4px);
//           }
//         }
//       }

//       :hover {
//         color: var(--color-primary);
//       }
//     }
//   }
// `;
