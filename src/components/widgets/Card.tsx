// components/elements/Card.tsx
import {
  Card as ShadcnCard,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({ title, children, footer }: CardProps) {
  return (
    <ShadcnCard className="rounded-xl shadow-sm">
      {title && (
        <CardHeader>
          <h3 className="text-lg font-semibold">{title}</h3>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </ShadcnCard>
  );
}
