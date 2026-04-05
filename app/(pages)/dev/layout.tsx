import { requireDev } from "@/app/_lib/utils/dev";
import { ReactNode } from "react";

const DevLayout = ({ children }: { children: ReactNode }) => {
  requireDev();
  return <>{children}</>;
};

export default DevLayout;
