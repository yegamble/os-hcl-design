import type { ReactNode } from 'react';
import { Card } from '../../components/card/card';

interface SettingsNavItem {
  id: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

interface SettingsSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function SettingsSection({ title, description, children }: SettingsSectionProps) {
  return (
    <section aria-labelledby={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="mb-4">
        <h2
          id={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="text-title3 text-text-primary font-semibold"
        >
          {title}
        </h2>
        {description ? <p className="text-text-secondary text-body mt-1">{description}</p> : null}
      </div>
      <Card>
        <Card.Body className="divide-border-subtle divide-y [&>*]:py-4 first:[&>*]:pt-0 last:[&>*]:pb-0">
          {children}
        </Card.Body>
      </Card>
    </section>
  );
}

interface SettingsProps {
  nav: SettingsNavItem[];
  children: ReactNode;
  title?: string;
}

/**
 * Settings layout: sidebar nav + scrollable content area.
 * Content is composed from SettingsSection children containing form fields.
 */
export function Settings({ nav, children, title = 'Settings' }: SettingsProps) {
  return (
    <div className="bg-surface-default min-h-screen">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <aside aria-label="Settings navigation" className="space-y-1 md:col-span-1">
          <h1 className="text-title1 text-text-primary md:text-title2 mb-4 font-semibold">
            {title}
          </h1>
          <nav aria-label="Sections">
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              {nav.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={item.onClick}
                    aria-current={item.active ? 'page' : undefined}
                    className={`rounded-button text-callout duration-ui inline-flex min-h-11 w-full items-center px-3 text-left transition-colors motion-reduce:transition-none ${item.active ? 'bg-surface-elevated text-text-primary font-semibold' : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'} focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="space-y-8 md:col-span-3">{children}</main>
      </div>
    </div>
  );
}
