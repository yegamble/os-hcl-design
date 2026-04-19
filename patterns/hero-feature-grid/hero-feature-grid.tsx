import { Button } from '../../components/button/button';
import { Card } from '../../components/card/card';

interface Feature {
  title: string;
  body: string;
}

interface HeroFeatureGridProps {
  title: string;
  subtitle: string;
  cta: string;
  features: Feature[];
}

/**
 * Apple-inspired hero + bento feature grid pattern.
 *
 * Composes: sticky glass nav + hero with display type + primary CTA + bento grid of Cards.
 * Uses ONLY semantic tokens and system utilities. Dark mode and
 * prefers-reduced-transparency are handled automatically by the token/utility layer.
 */
export function HeroFeatureGrid({ title, subtitle, cta, features }: HeroFeatureGridProps) {
  return (
    <div className="bg-surface-default text-text-primary min-h-screen">
      <nav
        className="sticky-nav-blur glass-regular border-border-subtle flex items-center justify-between border-b px-6 py-3"
        aria-label="Primary"
      >
        <span className="text-headline font-semibold">Acme</span>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button size="sm">Get started</Button>
        </div>
      </nav>

      <section className="section-rhythm px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="display-type text-text-primary text-6xl md:text-8xl">{title}</h1>
          <p className="text-text-secondary text-title3 mx-auto mt-6 max-w-2xl">{subtitle}</p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Button size="lg">{cta}</Button>
            <Button size="lg" variant="ghost">
              Learn more
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24" aria-label="Feature highlights">
        <div className="bento-grid mx-auto max-w-6xl">
          {features.map((f) => (
            <Card key={f.title} variant="elevated" padding="lg">
              <Card.Body>
                <h3 className="text-text-primary text-title2 font-semibold">{f.title}</h3>
                <p className="text-text-secondary mt-3 text-base">{f.body}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
