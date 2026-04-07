
import { requireDev } from "@katebtech/framework";
import { ReactNode } from "react";

const DevLayout = ({ children }: { children: ReactNode }) => {
  requireDev();
  return <>{children}</>;
};

export default DevLayout;
