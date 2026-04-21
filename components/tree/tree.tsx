import { forwardRef, useState, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TreeNode {
  id: string;
  label: ReactNode;
  children?: TreeNode[];
}

interface TreeItemProps {
  node: TreeNode;
  depth: number;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

function TreeItem({ node, depth, selectedId, onSelect }: TreeItemProps) {
  const [expanded, setExpanded] = useState(depth === 0);
  const hasChildren = !!node.children && node.children.length > 0;
  const selected = selectedId === node.id;

  return (
    <li role="treeitem" aria-expanded={hasChildren ? expanded : undefined} aria-selected={selected}>
      <div
        className={twMerge(
          'rounded-button text-body flex min-h-11 cursor-pointer items-center gap-1 px-2',
          'hover:bg-surface-elevated',
          'focus-within:ring-action-primary focus-within:ring-2 focus-within:ring-offset-0 focus-within:outline-none',
          'duration-ui transition-colors motion-reduce:transition-none',
          selected && 'bg-surface-elevated text-text-primary font-semibold',
        )}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {hasChildren ? (
          <button
            type="button"
            aria-label={expanded ? 'Collapse' : 'Expand'}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((v) => !v);
            }}
            className="text-text-tertiary inline-flex h-6 w-6 shrink-0 items-center justify-center focus-visible:outline-none"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              aria-hidden
              className={twMerge(
                'duration-ui transition-transform motion-reduce:transition-none',
                expanded && 'rotate-90',
              )}
            >
              <path
                d="M4 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : (
          <span className="w-6 shrink-0" aria-hidden />
        )}
        <button
          type="button"
          onClick={() => onSelect?.(node.id)}
          className="flex-1 text-left focus-visible:outline-none"
        >
          {node.label}
        </button>
      </div>
      {hasChildren && expanded ? (
        <ul role="group" className="m-0 list-none p-0">
          {node.children!.map((child) => (
            <TreeItem
              key={child.id}
              node={child}
              depth={depth + 1}
              selectedId={selectedId}
              onSelect={onSelect}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export interface TreeProps {
  nodes: TreeNode[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  'aria-label'?: string;
  className?: string;
}

export const Tree = forwardRef<HTMLUListElement, TreeProps>(
  ({ nodes, selectedId, onSelect, 'aria-label': ariaLabel = 'Tree', className }, ref) => (
    <ul
      ref={ref}
      role="tree"
      aria-label={ariaLabel}
      className={twMerge('m-0 list-none p-0', className)}
    >
      {nodes.map((n) => (
        <TreeItem key={n.id} node={n} depth={0} selectedId={selectedId} onSelect={onSelect} />
      ))}
    </ul>
  ),
);
Tree.displayName = 'Tree';
