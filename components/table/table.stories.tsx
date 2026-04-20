import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from './table';
import { Badge } from '../badge/badge';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Table>;

const rows = [
  { id: 1, name: 'Aurora', status: 'Active', budget: '$12,000' },
  { id: 2, name: 'Basilisk', status: 'Paused', budget: '$8,400' },
  { id: 3, name: 'Corvid', status: 'Active', budget: '$3,250' },
  { id: 4, name: 'Delphinus', status: 'Archived', budget: '—' },
];

export const Default: Story = {
  render: () => (
    <Table>
      <Table.Caption>Active projects</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell className="text-right">Budget</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rows.map((r) => (
          <Table.Row key={r.id}>
            <Table.HeaderCell scope="row">{r.name}</Table.HeaderCell>
            <Table.Cell>
              <Badge variant={r.status === 'Active' ? 'info' : 'neutral'}>{r.status}</Badge>
            </Table.Cell>
            <Table.Cell className="text-right font-mono">{r.budget}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};
