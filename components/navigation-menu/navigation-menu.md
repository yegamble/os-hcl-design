---
name: NavigationMenu
category: navigation
status: stable
version: 0.1.0
tokensUsed:
  - color.surface.raised
  - color.surface.elevated
  - color.text.primary
  - color.text.secondary
  - color.border.subtle
  - color.action.primary
  - radius.card
  - radius.button
  - shadow.popover
dependsOn: ['@radix-ui/react-navigation-menu']
a11y:
  role: navigation + menu
  keyboard: [Tab, Arrow, Enter, Esc]
  focus: focus-visible ring on triggers and links
  minHitTarget: 44px per trigger and link
---

# NavigationMenu

## Overview

Multi-level top-nav with flyout panels. Radix NavigationMenu handles focus management, arrow navigation between triggers, and keyboard dismiss. Use as a site/app primary navigation when you need panels of related links per section ("Products", "Learn", "Company" each with a sub-panel).

## Anatomy

Root + Viewport (the animated shared panel) + List + Item(s) containing Trigger + Content (flyout) or Link (direct jump).

## Variants

None.

## States

- Trigger: default / hover / open (data-state="open")
- Viewport: closed / transitioning / open

## Props

Radix NavigationMenu props.

## Usage

| ✅ Do                                             | ❌ Don't                                 |
| ------------------------------------------------- | ---------------------------------------- |
| Use for a site-wide primary nav with sub-sections | Use as a single-level nav — just use Nav |
| Keep each panel to ≤ 10 links                     | Put 40-link directories in panels        |
| Group related links in a panel with a heading     | Mix unrelated links in one panel         |

## Code Examples

```tsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent className="grid w-96 grid-cols-2 gap-2">
        <NavigationMenuLink href="/a">Analytics</NavigationMenuLink>
        <NavigationMenuLink href="/b">Billing</NavigationMenuLink>
        <NavigationMenuLink href="/c">Chat</NavigationMenuLink>
        <NavigationMenuLink href="/d">Docs</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/pricing">Pricing</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Accessibility

- Radix handles the full WAI-ARIA menubar pattern.
- Panel stays open while focused; Esc closes.
- Every link is a real `<a>` — direct keyboard reachability.

## Tokens Used

See front-matter.

## Related

- `components/nav/` — simple one-level counterpart
- `components/dropdown-menu/` — action-menu counterpart

## Changelog

- **0.1.0** — Initial.
