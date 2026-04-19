import { useState, type FormEvent } from 'react';
import { Button } from '../../components/button/button';
import { Card } from '../../components/card/card';
import { Input } from '../../components/input/input';

interface AuthFormProps {
  /** 'sign-in' or 'sign-up' — drives heading, button label, link copy. */
  mode?: 'sign-in' | 'sign-up';
  /** Optional: handle submit. Returns a promise; error is surfaced via aria-invalid + inline text. */
  onSubmit?: (email: string, password: string) => Promise<void> | void;
  /** Show a Google OAuth button above the divider. */
  showGoogle?: boolean;
}

/**
 * Email + password auth form with optional OAuth shoulder. UI only — consumer wires auth logic.
 */
export function AuthForm({ mode = 'sign-in', onSubmit, showGoogle = true }: AuthFormProps) {
  const [error, setError] = useState<string | null>(null);
  const isSignUp = mode === 'sign-up';

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    try {
      await onSubmit?.(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <Card variant="elevated" padding="lg" className="mx-auto w-full max-w-md">
      <Card.Body>
        <h1 className="text-title1 text-text-primary mb-2 font-semibold">
          {isSignUp ? 'Create your account' : 'Sign in to your account'}
        </h1>
        <p className="text-text-secondary mb-6">
          {isSignUp ? 'Start shipping in minutes.' : 'Welcome back. Enter your email and password.'}
        </p>

        {showGoogle ? (
          <>
            <Button variant="secondary" className="w-full" type="button">
              Continue with Google
            </Button>
            <div className="text-text-tertiary my-4 flex items-center gap-3" aria-hidden="true">
              <span className="bg-border-subtle h-px flex-1" />
              <span className="text-footnote">or</span>
              <span className="bg-border-subtle h-px flex-1" />
            </div>
          </>
        ) : null}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          <label className="flex flex-col gap-2" htmlFor="auth-email">
            <span className="text-subheadline text-text-secondary">Email</span>
            <Input
              id="auth-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={error ? 'true' : undefined}
            />
          </label>

          <label className="flex flex-col gap-2" htmlFor="auth-password">
            <span className="text-subheadline text-text-secondary flex items-center justify-between">
              <span>Password</span>
              {!isSignUp ? (
                <a
                  href="/forgot"
                  className="text-text-link text-footnote focus-visible:rounded-button focus-visible:ring-action-primary focus-visible:ring-offset-surface-raised hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  Forgot?
                </a>
              ) : null}
            </span>
            <Input
              id="auth-password"
              name="password"
              type="password"
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
              minLength={8}
              required
              aria-invalid={error ? 'true' : undefined}
              aria-describedby={error ? 'auth-error' : undefined}
            />
          </label>

          {error ? (
            <p id="auth-error" role="alert" className="text-text-destructive text-footnote">
              {error}
            </p>
          ) : null}

          <Button type="submit" className="mt-2 w-full">
            {isSignUp ? 'Create account' : 'Sign in'}
          </Button>
        </form>

        <p className="text-footnote text-text-tertiary mt-6 text-center">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <a href="/sign-in" className="text-text-link hover:underline">
                Sign in
              </a>
            </>
          ) : (
            <>
              New here?{' '}
              <a href="/sign-up" className="text-text-link hover:underline">
                Create an account
              </a>
            </>
          )}
        </p>
      </Card.Body>
    </Card>
  );
}
