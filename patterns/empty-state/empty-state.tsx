import type { ReactNode } from 'react';
import { Button } from '../../components/button/button';

interface EmptyStateProps {
  /** Icon or illustration. Pass an SVG marked aria-hidden. */
  icon?: ReactNode;
  title: string;
  description?: string;
  /** Optional primary action. */
  actionLabel?: string;
  onAction?: () => void;
}

/**
 * Empty-state pattern. Centered icon + title + description + optional CTA.
 * Single focal point; positive framing; one action.
 */
export function EmptyState({ icon, title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <section
      aria-label={title}
      className="flex flex-col items-center justify-center gap-4 p-10 text-center"
    >
      {icon ? <div className="text-text-tertiary mb-2">{icon}</div> : null}
      <h3 className="text-title2 text-text-primary font-semibold">{title}</h3>
      {description ? <p className="text-text-secondary text-body max-w-md">{description}</p> : null}
      {actionLabel ? (
        <Button onClick={onAction} className="mt-4">
          {actionLabel}
        </Button>
      ) : null}
    </section>
  );
}
