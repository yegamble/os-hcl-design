import { forwardRef, useRef, useState, type ChangeEvent, type DragEvent } from 'react';
import { twMerge } from 'tailwind-merge';

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  onFiles?: (files: File[]) => void;
  label?: string;
  hint?: string;
  className?: string;
  disabled?: boolean;
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      accept,
      multiple,
      maxSize,
      onFiles,
      label = 'Drag files here, or click to browse',
      hint,
      className,
      disabled,
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function pickFiles(list: FileList | null) {
      if (!list || list.length === 0) return;
      const files = Array.from(list);
      if (maxSize) {
        const tooBig = files.find((f) => f.size > maxSize);
        if (tooBig) {
          setError(`${tooBig.name} exceeds ${formatSize(maxSize)}.`);
          return;
        }
      }
      setError(null);
      onFiles?.(files);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
      pickFiles(e.target.files);
      e.target.value = '';
    }

    function handleDrop(e: DragEvent<HTMLDivElement>) {
      e.preventDefault();
      setIsDragging(false);
      if (disabled) return;
      pickFiles(e.dataTransfer.files);
    }

    return (
      <div
        role="button"
        aria-label={label}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={(e) => {
          if (disabled) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        className={twMerge(
          'rounded-card relative flex min-h-32 flex-col items-center justify-center gap-2 border-2 border-dashed p-6 text-center',
          'duration-ui transition-colors motion-reduce:transition-none',
          'focus-visible:ring-action-primary focus-visible:ring-offset-surface-default focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
          'cursor-pointer',
          isDragging
            ? 'bg-surface-elevated border-action-primary'
            : 'border-border-default bg-surface-default',
          disabled && 'cursor-not-allowed opacity-60',
          className,
        )}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          aria-hidden
          fill="none"
          className="text-text-tertiary"
        >
          <path
            d="M16 22V10m0 0l-5 5m5-5l5 5M6 26h20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-body text-text-primary font-medium">{label}</p>
        {hint ? <p className="text-footnote text-text-tertiary">{hint}</p> : null}
        {error ? (
          <p role="alert" className="text-footnote text-text-destructive">
            {error}
          </p>
        ) : null}
        <input
          ref={(el) => {
            inputRef.current = el;
            if (typeof ref === 'function') ref(el);
            else if (ref) ref.current = el;
          }}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
          onClick={(e) => e.stopPropagation()}
          className="sr-only"
          aria-label={label}
        />
      </div>
    );
  },
);
FileUpload.displayName = 'FileUpload';
