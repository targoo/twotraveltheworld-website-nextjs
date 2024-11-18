export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2021 TwoTravelTheWorld. All rights reserved.</p>
    </footer>
  );
};

// import Link from 'next/link';
// import { useTranslations, useLocale } from 'next-intl';

// import styles from './Footer.module.css';
// import { Logo } from '../../atoms/Logo/Logo';

// export function Footer() {
//   const t = useTranslations('Navigation');
//   const locale = useLocale();

//   const languageHref = locale === 'en' ? '/fr' : '/en';
//   const languageLabel = locale === 'en' ? 'Français' : 'English';

//   return (
//     <section className={styles.footer}>
//       <div className={styles.footer__info}>
//         <p className={styles.logo}>TwoTravelTheWorld</p>
//         <p className={styles.sublogo}>
//           An adventure by <span className="person-name">David Calcus</span> and{' '}
//           <span className="person-name">Caroline Vaisiere</span>.
//         </p>
//         <p className={styles.legal}>
//           Copyright © {new Date().getFullYear()}{' '}
//           <span className="company-name">TwoTravelTheWorld</span>{' '}
//           {t('allRightsReserved')}.
//         </p>
//       </div>
//       <div className={styles.footer__links}>
//         <div>
//           <h2 className={styles.links__title}>{t('legal')}</h2>
//           <nav className={styles.links}>
//             <ul>
//               <li>
//                 <Link href="/privacy-policy-disclaimer" className={styles.link}>
//                   {t('privacyPolicyDisclaimer')}
//                 </Link>
//               </li>
//               <li>
//                 <Link href={languageHref}>{languageLabel}</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <div>
//           <h2 className={styles.links__title}>{t('aboutUs')}</h2>
//           <nav className={styles.links}>
//             <ul>
//               <li>
//                 <Link href="/about-us" className={styles.link}>
//                   {t('aboutUs')}
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className={styles.link}>
//                   {t('contact')}
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <div>
//           <Logo color="var(--color-gray-400)" />
//         </div>
//       </div>
//     </section>
//   );
// }
