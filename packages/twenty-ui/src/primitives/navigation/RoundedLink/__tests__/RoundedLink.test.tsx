import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { RoundedLink } from '../RoundedLink';

describe('RoundedLink', () => {
  it('applies the requested text direction to the link', () => {
    render(
      <div dir="rtl">
        <RoundedLink
          href="tel:+972521234567"
          label="+972 52 123 4567"
          dir="ltr"
        />
      </div>,
    );

    expect(
      screen.getByRole('link', { name: '+972 52 123 4567' }),
    ).toHaveAttribute('dir', 'ltr');
  });

  it('inherits the surrounding direction by default', () => {
    render(<RoundedLink href="https://twenty.com" label="twenty.com" />);

    expect(
      screen.getByRole('link', { name: 'twenty.com' }),
    ).not.toHaveAttribute('dir');
  });
});
