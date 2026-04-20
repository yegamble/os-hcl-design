import type { ReactNode } from 'react';
import { Avatar } from '../../components/avatar/avatar';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/dropdown-menu/dropdown-menu';

interface NavLink {
  href: string;
  label: string;
  active?: boolean;
}

interface DashboardHeaderProps {
  brand: ReactNode;
  nav: NavLink[];
  user: { name: string; email?: string; src?: string };
  onSearch?: (query: string) => void;
  onSignOut?: () => void;
}

export function DashboardHeader({ brand, nav, user, onSearch, onSignOut }: DashboardHeaderProps) {
  return (
    <header className="sticky-nav-blur glass-regular border-border-subtle border-b">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-6">
        <div className="text-headline text-text-primary font-semibold">{brand}</div>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="m-0 flex list-none items-center gap-1 p-0">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={`rounded-button text-callout duration-ui inline-flex min-h-11 items-center px-3 transition-colors motion-reduce:transition-none ${item.active ? 'text-text-primary font-semibold' : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'} focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          {onSearch ? (
            <form
              role="search"
              className="hidden md:block"
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem('q') as HTMLInputElement;
                onSearch(input.value);
              }}
            >
              <Input
                name="q"
                type="search"
                placeholder="Search…"
                aria-label="Search"
                className="w-64"
              />
            </form>
          ) : null}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                aria-label="Account menu"
                className="rounded-pill focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Avatar src={user.src} alt={user.name} size="md" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
              {user.email ? (
                <div className="text-footnote text-text-tertiary -mt-1 px-3 pb-2">{user.email}</div>
              ) : null}
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={onSignOut} className="text-text-destructive">
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" className="md:hidden" aria-label="Menu" variant="ghost">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
              <path
                d="M3 5h14M3 10h14M3 15h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
