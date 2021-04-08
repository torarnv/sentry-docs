import React from "react";
import { PlatformIcon } from "platformicons";

import PlatformLink from "./platformLink";
import usePlatform, { Platform } from "./hooks/usePlatform";

type Props = {
  platform?: string;
  className?: string;
};

export default ({ platform, className }: Props): JSX.Element => {
  const [currentPlatform] = usePlatform(platform);
  // platform might actually not be a platform, so lets handle that case gracefully
  if (!(currentPlatform as Platform).guides) {
    return null;
  }

  return (
    <ul className={className}>
      {(currentPlatform as Platform).guides.map(guide => (
        <li key={guide.key}>
          <PlatformLink platform={guide.key} to={guide.url} icon={true}>
            <h4 style={{ display: "inline-block" }}>{guide.title}</h4>
          </PlatformLink>
        </li>
      ))}
    </ul>
  );
};
