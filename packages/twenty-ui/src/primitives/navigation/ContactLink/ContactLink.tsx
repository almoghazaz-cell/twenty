import * as React from 'react';

import { getSafeUrl } from '@ui/utilities/utils/getSafeUrl';

import styles from './ContactLink.module.scss';

type ContactLinkProps = {
  href: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  maxWidth?: number;
  dir?: 'ltr' | 'rtl' | 'auto';
};

export const ContactLink = ({
  href,
  children,
  onClick,
  maxWidth,
  dir,
}: ContactLinkProps) => {
  return (
    <a
      className={styles.root}
      style={
        {
          '--contact-link-max-width': maxWidth ?? '100%',
        } as React.CSSProperties
      }
      target="_blank"
      dir={dir}
      onClick={onClick}
      href={getSafeUrl(href)}
    >
      {children}
    </a>
  );
};
