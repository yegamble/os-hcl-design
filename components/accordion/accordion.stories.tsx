import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-96">
      <AccordionItem value="billing">
        <AccordionTrigger>Billing</AccordionTrigger>
        <AccordionContent>Manage payment methods, invoices, and billing contacts.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="team">
        <AccordionTrigger>Team</AccordionTrigger>
        <AccordionContent>Invite members, set roles, and manage permissions.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="api">
        <AccordionTrigger>API keys</AccordionTrigger>
        <AccordionContent>Create and revoke API keys. Rotate regularly.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
