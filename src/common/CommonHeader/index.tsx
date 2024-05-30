import { ReactNode } from "react";

type CommonHeaderProps = {
  children: ReactNode;
};

// Styles -----------------------------------------------------------
import "./CommonHeader.scss";
// ------------------------------------------------------------------

function CommonHeader({ children }: CommonHeaderProps) {
  return <div className="common-header">{children}</div>;
}

export default CommonHeader;
