import clsx from 'clsx'

export function Prose({ className, contentType, ...props }: { contentType: 'article' | 'job-application'; className?: string }) {
  return (
    <div className={clsx(className, `prose prose-${contentType}`)} {...props} />
  );
}
