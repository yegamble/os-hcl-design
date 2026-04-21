import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { FileUpload } from './file-upload';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof FileUpload>;

function Demo() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div className="w-96 space-y-3">
      <FileUpload
        accept="image/*"
        multiple
        maxSize={5 * 1024 * 1024}
        label="Drop images or click to browse"
        hint="PNG / JPG up to 5 MB each"
        onFiles={setFiles}
      />
      {files.length > 0 ? (
        <ul className="text-footnote text-text-secondary space-y-1">
          {files.map((f) => (
            <li key={f.name}>
              {f.name} — {(f.size / 1024).toFixed(0)} KB
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export const Default: Story = { render: () => <Demo /> };
export const Disabled: Story = {
  render: () => (
    <div className="w-96">
      <FileUpload disabled label="Upload disabled" hint="Plan doesn't include uploads" />
    </div>
  ),
};
