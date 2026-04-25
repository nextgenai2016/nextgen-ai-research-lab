import type { ReactNode } from "react";
import { layoutShell } from "@/components/layout/shell";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`${layoutShell} ${className}`}>{children}</div>;
}
