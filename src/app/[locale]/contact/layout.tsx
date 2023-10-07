import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContactLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default ContactLayout;
