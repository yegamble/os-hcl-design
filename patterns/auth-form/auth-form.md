---
name: Auth Form
category: pattern
status: stable
version: 0.1.0
tokensUsed:
  - color.text.primary
  - color.text.secondary
  - color.text.tertiary
  - color.text.link
  - color.text.destructive
  - color.border.subtle
  - color.action.primary
  - radius.button
dependsOn:
  - Button
  - Card
  - Input
a11y:
  role: form
  keyboard: [Tab, Enter]
  focus: inherits from Input + Button children
  minHitTarget: 44px (via Input + Button)
---

# Auth Form

## Overview

Sign-in / sign-up form with optional Google OAuth shoulder. Elevated Card container, two labeled Inputs (email + password), primary submit Button, inline error surface (`role="alert"`), "Forgot password" link (sign-in only), switch-mode link at the bottom.

## Anatomy

- Card container (elevated, max-w-md, padding lg)
- Heading (`<h1>`) + sub-copy
- Optional "Continue with Google" Button (secondary) + divider
- `<form>`:
  - Email Input (labeled)
  - Password Input (labeled + optional "Forgot?" link aligned right)
  - Inline error paragraph (only when `error` state is set, `role="alert"`, linked via `aria-describedby`)
  - Submit Button (primary, full-width)
- Switch-mode link

## Variants

- `mode="sign-in"` / `mode="sign-up"` — toggles heading copy, button label, forgot-link visibility
- `showGoogle` toggle

## States

- default
- invalid (`aria-invalid="true"` on inputs + inline error)
- submitting (consumer toggles `disabled` on Submit Button during async submit)

## Props

| name         | type                                                         | required | default     | description                                           |
| ------------ | ------------------------------------------------------------ | -------- | ----------- | ----------------------------------------------------- |
| `mode`       | `'sign-in' \| 'sign-up'`                                     | no       | `'sign-in'` | Drives heading copy, button label, forgot-link.       |
| `onSubmit`   | `(email: string, password: string) => Promise<void> \| void` | no       | —           | Handler; may return a Promise. Throws surface inline. |
| `showGoogle` | `boolean`                                                    | no       | `true`      | Toggle the "Continue with Google" OAuth shoulder.     |

## Usage

| ✅ Do                                                                | ❌ Don't                                  |
| -------------------------------------------------------------------- | ----------------------------------------- |
| Pair with a consumer-side auth client that handles the actual submit | Build auth logic into the pattern itself  |
| Keep OAuth options to 1–2 (Google + Apple typical)                   | Stack 6 OAuth buttons — noise             |
| Link "Forgot?" visibly on sign-in mode                               | Hide password-reset behind a tiny subtext |
| Show the error inline via `role="alert"`                             | Show a modal dialog for auth errors       |

## Code Examples

```tsx
<AuthForm
  mode="sign-in"
  showGoogle
  onSubmit={async (email, password) => {
    await signIn(email, password);
  }}
/>

<AuthForm mode="sign-up" showGoogle={false} />
```

## Accessibility

- Form inputs have real `<label>` wrappers with `htmlFor`
- `autoComplete` hints tell password managers what to fill
- `aria-invalid` toggles on error; `aria-describedby` wires the inline error text to both inputs
- Error `<p role="alert">` is announced by screen readers when it appears
- All interactive elements honor the 44 px hit target and focus-visible ring

## Tokens Used

See front-matter.

## Related

- `components/input/`, `components/button/`, `components/card/`
- `patterns/hero-feature-grid/` — typical landing-page partner

## Changelog

- **0.1.0** — Initial.
