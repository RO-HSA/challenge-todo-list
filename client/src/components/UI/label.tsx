import { cn } from '@/app/lib/utils';
import * as React from 'react';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        className={cn('text-black font-bold text-lg', className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Label.displayName = 'Label';

export default Label;
