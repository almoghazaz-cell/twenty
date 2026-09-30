import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { OverflowingTextWithTooltip } from '../OverflowingTextWithTooltip';

describe('OverflowingTextWithTooltip', () => {
  it('lays out each value by its own direction', () => {
    render(
      <div dir="rtl">
        <OverflowingTextWithTooltip text="Enterprise Workstation Refresh" />
        <OverflowingTextWithTooltip text="הטמעת CRM לאקמה" />
      </div>,
    );

    expect(screen.getByText('Enterprise Workstation Refresh')).toHaveAttribute(
      'dir',
      'auto',
    );
    expect(screen.getByText('הטמעת CRM לאקמה')).toHaveAttribute('dir', 'auto');
  });
});
