import { type ComponentProps, type FC } from "react";

type IconButtonProps = ComponentProps<"button"> & {
  badge?: number;
};

export const IconButton: FC<IconButtonProps> = ({ badge, className = "", children, ...props }) => (
  <button
    className={`relative inline-flex h-9 w-9 items-center justify-center rounded-md text-navy-400 transition-colors hover:bg-navy-100 hover:text-navy-600 ${className}`}
    {...props}
  >
    {children}
    {badge != null && badge > 0 && (
      <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-accent-600 px-1 text-[10px] font-semibold text-white">
        {badge > 99 ? "99+" : badge}
      </span>
    )}
  </button>
);
