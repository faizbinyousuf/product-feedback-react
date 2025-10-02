// components/elements/Button.tsx
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ComponentProps<typeof ShadcnButton> {
  loading?: boolean;
}

export function Button({
  className,
  loading,
  children,
  ...props
}: ButtonProps) {
  return (
    <ShadcnButton
      className={cn("rounded-xl font-medium", className)}
      disabled={loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </ShadcnButton>
  );
}
