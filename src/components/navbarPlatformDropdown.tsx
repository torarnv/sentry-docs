import React from "react";
import { NavDropdown } from "react-bootstrap";
import { PlatformIcon } from "platformicons";

import usePlatform, { usePlatformList } from "./hooks/usePlatform";
import PlatformLink from "./platformLink";
import SmartLink from "./smartLink";

export default () => {
  const platformList = usePlatformList();
  const [currentPlatform] = usePlatform(null, false, false);
  return (
    <NavDropdown
      title={
        currentPlatform ? (
          <React.Fragment>
            <PlatformIcon
              platform={currentPlatform.key}
              size={16}
              style={{ marginRight: "0.5rem" }}
              format="lg"
            />
            {currentPlatform.title}
          </React.Fragment>
        ) : (
          "Platforms"
        )
      }
      id="nd-platforms"
    >
      {platformList.map(platform => (
        <PlatformLink
          className={`dropdown-item ${
            currentPlatform && currentPlatform.key == platform.key
              ? "active"
              : ""
          }`}
          platform={platform.key}
          icon={true}
        />
      ))}
      <NavDropdown.Divider />
      <SmartLink className="dropdown-item" to="/platforms/">
        Show all platforms
      </SmartLink>
    </NavDropdown>
  );
};
