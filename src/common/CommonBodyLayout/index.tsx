import { ReactNode } from "react";

type CommonBodyLayoutProps = {
  children: ReactNode;
};

// Styles -----------------------------------------------------------
import "./CommonBodyLayout.scss";
// ------------------------------------------------------------------

function CommonBodyLayout({ children }: CommonBodyLayoutProps) {
  return <div className="common-body-layout">{children}</div>;
}

export default CommonBodyLayout;
