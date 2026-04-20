import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Pagination>;

function Demo({ total }: { total: number }) {
  const [page, setPage] = useState(1);
  return (
    <div className="space-y-3">
      <Pagination page={page} pageCount={total} onPageChange={setPage} />
      <p className="text-footnote text-text-tertiary">
        Page {page} of {total}
      </p>
    </div>
  );
}

export const Few: Story = { render: () => <Demo total={5} /> };
export const Many: Story = { render: () => <Demo total={20} /> };
export const Lots: Story = { render: () => <Demo total={120} /> };
