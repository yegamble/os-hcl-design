import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-96">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="specs">Specs</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="text-text-secondary">
        Overview content — a gentle summary of the product.
      </TabsContent>
      <TabsContent value="specs" className="text-text-secondary">
        Specs content — technical details.
      </TabsContent>
      <TabsContent value="reviews" className="text-text-secondary">
        Reviews content — what customers say.
      </TabsContent>
    </Tabs>
  ),
};
