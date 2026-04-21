import type { ReactNode } from 'react';
import { useState } from 'react';
import { Button } from '../../components/button/button';
import { Stepper } from '../../components/stepper/stepper';

export interface OnboardingStep {
  id: string;
  label: string;
  description?: string;
  content: ReactNode;
}

interface OnboardingProps {
  steps: OnboardingStep[];
  onComplete?: () => void;
  onDismiss?: () => void;
}

export function Onboarding({ steps, onComplete, onDismiss }: OnboardingProps) {
  const [index, setIndex] = useState(0);
  const step = steps[index];
  const isLast = index === steps.length - 1;

  function next() {
    if (isLast) onComplete?.();
    else setIndex((i) => i + 1);
  }

  function prev() {
    if (index > 0) setIndex((i) => i - 1);
  }

  if (!step) return null;

  return (
    <section
      aria-label="Onboarding"
      className="bg-surface-raised border-border-subtle shadow-card rounded-sheet border"
    >
      <div className="p-6">
        <Stepper steps={steps.map((s) => ({ id: s.id, label: s.label }))} current={index} />
      </div>
      <div className="border-border-subtle border-t px-6 py-8">
        <h2 className="text-title2 text-text-primary font-semibold">{step.label}</h2>
        {step.description ? (
          <p className="text-text-secondary text-body mt-2">{step.description}</p>
        ) : null}
        <div className="mt-6">{step.content}</div>
      </div>
      <div className="border-border-subtle flex items-center justify-between border-t px-6 py-4">
        <Button variant="ghost" onClick={onDismiss}>
          Skip
        </Button>
        <div className="flex items-center gap-2">
          {index > 0 ? (
            <Button variant="secondary" onClick={prev}>
              Back
            </Button>
          ) : null}
          <Button onClick={next}>{isLast ? 'Finish' : 'Next'}</Button>
        </div>
      </div>
    </section>
  );
}
