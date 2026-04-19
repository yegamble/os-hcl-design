import { Button } from '../../components/button/button';
import { Card } from '../../components/card/card';
import { Badge } from '../../components/badge/badge';

interface Tier {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

interface PricingProps {
  title: string;
  subtitle: string;
  tiers: Tier[];
}

/**
 * Apple-style pricing pattern. Three tiers in a bento grid.
 * The featured tier gets elevated variant + primary CTA; others are outlined + secondary.
 */
export function Pricing({ title, subtitle, tiers }: PricingProps) {
  return (
    <section className="section-rhythm bg-surface-default px-6" aria-label="Pricing">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="display-type text-text-primary text-5xl md:text-6xl">{title}</h2>
        <p className="text-text-secondary text-title3 mt-6">{subtitle}</p>
      </div>

      <div className="bento-grid mx-auto max-w-6xl">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            variant={tier.featured ? 'elevated' : 'outlined'}
            padding="lg"
            className="flex flex-col"
          >
            <Card.Body className="flex flex-1 flex-col">
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="text-title2 text-text-primary font-semibold">{tier.name}</h3>
                {tier.featured ? <Badge variant="info">Most popular</Badge> : null}
              </div>
              <div className="mb-6">
                <span className="text-text-primary text-4xl font-semibold">{tier.price}</span>
                <span className="text-text-tertiary ml-2">{tier.period}</span>
              </div>
              <ul className="mb-8 flex flex-col gap-3">
                {tier.features.map((f) => (
                  <li key={f} className="text-text-secondary flex items-start gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      aria-hidden
                      className="text-action-primary mt-1 shrink-0"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button className="w-full" variant={tier.featured ? 'primary' : 'secondary'}>
                  {tier.cta}
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}
