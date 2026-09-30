import { isNonEmptyString } from '@sniptt/guards';
import { clsx } from 'clsx';
import { type MouseEvent } from 'react';

import { getSafeUrl } from '@ui/utilities/utils/getSafeUrl';

import styles from './RoundedLink.module.scss';

type RoundedLinkProps = {
  href: string;
  label?: string;
  dir?: 'ltr' | 'rtl' | 'auto';
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
};

export const RoundedLink = ({
  label,
  href,
  // Emails, URLs and names can read in either direction whatever the page
  // direction; by default each one is laid out and truncated by its own.
  dir = 'auto',
  onClick,
  className,
}: RoundedLinkProps) => {
  if (!isNonEmptyString(label)) {
    return <></>;
  }

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClick?.(event);
  };

  return (
    <a
      href={getSafeUrl(href)}
      target="_blank"
      rel="noreferrer"
      dir={dir}
      onClick={handleClick}
      className={clsx(styles.root, className)}
    >
      <span className={styles.label}>{label}</span>
    </a>
  );
};
