import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './toast';
import { Button } from '../button/button';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Toast>;

function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="right" duration={4000}>
      <Button onClick={() => setOpen(true)}>Save</Button>
      <Toast open={open} onOpenChange={setOpen}>
        <div>
          <ToastTitle>Saved</ToastTitle>
          <ToastDescription>Your changes are synced.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}

export const Default: Story = { render: () => <Demo /> };
