"use client";

import React, { FC, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const Provider: FC<{ children: ReactNode; session: any }> = ({
  children,
  session,
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
