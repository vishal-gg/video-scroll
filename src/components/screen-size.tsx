import { forwardRef } from "react";
import { cn } from "../lib/cn";

type TScreenSizeProps = {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLDivElement>;
  className?: string;
};

const ScreenSize = forwardRef<HTMLDivElement, TScreenSizeProps>(
  ({ children, props, className }, ref) => {
    return (
      <div className={cn("h-screen w-screen", className)} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

export default ScreenSize;
