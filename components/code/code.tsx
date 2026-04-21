import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  /** Inline vs block. Block renders a <pre><code>; inline renders a <code>. */
  block?: boolean;
  /** Language hint for the code fence (class "language-<lang>" for downstream highlighters). */
  language?: string;
}

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ block = false, language, className, children, ...props }, ref) => {
    const codeCls = twMerge(
      'font-mono text-footnote',
      !block &&
        'inline rounded-[4px] border border-border-subtle bg-surface-elevated px-1.5 py-0.5 text-text-primary',
      block && 'block text-text-primary',
      language ? `language-${language}` : '',
      className,
    );

    if (block) {
      return (
        <pre className="rounded-card bg-surface-elevated border-border-subtle overflow-x-auto border p-4">
          <code ref={ref} className={codeCls} {...props}>
            {children}
          </code>
        </pre>
      );
    }

    return (
      <code ref={ref} className={codeCls} {...props}>
        {children}
      </code>
    );
  },
);
Code.displayName = 'Code';
