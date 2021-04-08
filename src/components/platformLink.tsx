import React from "react";

import usePlatform from "./hooks/usePlatform";
import SmartLink from "./smartLink";

type Props = {
  to?: string;
  platform?: string;
  children: JSX.Element;
};

export default ({ children, to, platform }: Props): JSX.Element => {
  const [currentPlatform] = usePlatform(platform);
  let path = currentPlatform ? currentPlatform.url : `/platform-redirect/`;
  if (to)
    path += currentPlatform ? to.slice(1) : `?next=${encodeURIComponent(to)}`;
  return <SmartLink to={path}>{children || (!to ? currentPlatform.title : null)}</SmartLink>;
};
