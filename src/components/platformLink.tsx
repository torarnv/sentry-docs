import React from "react";

import usePlatform from "./hooks/usePlatform";
import SmartLink from "./smartLink";

import { PlatformIcon } from "platformicons";

type Props = {
  to?: string;
  platform?: string;
  icon?: boolean;
  children: JSX.Element;
};

export default ({ children, icon, to, platform, ...props }: Props): JSX.Element => {
  const [currentPlatform] = usePlatform(platform);
  let path = currentPlatform ? currentPlatform.url : `/platform-redirect/`;
  if (to)
    path += currentPlatform ? to.slice(1) : `?next=${encodeURIComponent(to)}`;
  return (
    <SmartLink to={path} {...props}>
      {icon ? <PlatformIcon
        size={16}
        platform={currentPlatform.key}
        style={{ marginRight: "0.5rem" }}
        format="lg"
      /> : null }
      {children || (!to ? currentPlatform.title : null)}
    </SmartLink>
  );
};
