import { useEffect } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from 'cmdk';
import { twMerge } from 'tailwind-merge';
import { Dialog, DialogContent, DialogTitle } from '../dialog/dialog';
import { Kbd } from '../kbd/kbd';

export interface CommandPaletteCommand {
  id: string;
  label: string;
  group?: string;
  shortcut?: string[];
  onSelect: () => void;
}

export interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  commands: CommandPaletteCommand[];
  placeholder?: string;
}

export function CommandPalette({
  open,
  onOpenChange,
  commands,
  placeholder = 'Type a command or search…',
}: CommandPaletteProps) {
  const groups = commands.reduce<Record<string, CommandPaletteCommand[]>>((acc, c) => {
    const g = c.group ?? 'General';
    (acc[g] = acc[g] ?? []).push(c);
    return acc;
  }, {});

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0">
        <DialogTitle className="sr-only">Command palette</DialogTitle>
        <Command className="w-full" label="Command menu">
          <div className="border-border-subtle border-b px-4">
            <CommandInput
              placeholder={placeholder}
              className="text-body text-text-primary placeholder:text-text-tertiary h-14 w-full bg-transparent focus:outline-none"
            />
          </div>
          <CommandList className="max-h-96 overflow-auto p-2">
            <CommandEmpty className="text-body text-text-tertiary py-8 text-center">
              No commands found.
            </CommandEmpty>
            {Object.entries(groups).map(([group, items], i) => (
              <div key={group}>
                {i > 0 ? <CommandSeparator className="bg-separator-default my-1 h-px" /> : null}
                <CommandGroup
                  heading={group}
                  className="text-footnote text-text-tertiary px-2 pt-2 font-medium tracking-wide uppercase"
                >
                  {items.map((c) => (
                    <CommandItem
                      key={c.id}
                      value={c.label}
                      onSelect={() => {
                        c.onSelect();
                        onOpenChange(false);
                      }}
                      className={twMerge(
                        'rounded-button text-body text-text-primary relative flex min-h-11 cursor-pointer items-center justify-between px-3',
                        'data-[selected=true]:bg-surface-elevated',
                      )}
                    >
                      <span>{c.label}</span>
                      {c.shortcut ? (
                        <span className="flex items-center gap-1">
                          {c.shortcut.map((k) => (
                            <Kbd key={k}>{k}</Kbd>
                          ))}
                        </span>
                      ) : null}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </div>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

/** Convenience hook: binds ⌘K / Ctrl+K to toggle the palette. */
export function useCommandPaletteShortcut(onToggle: () => void) {
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onToggle();
      }
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onToggle]);
}
