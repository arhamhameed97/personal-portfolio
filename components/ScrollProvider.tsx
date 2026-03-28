"use client";

import { ReactNode } from "react";

interface ScrollProviderProps {
  children: ReactNode;
}

export default function ScrollProvider({ children }: ScrollProviderProps) {
  return <>{children}</>;
}
