import React from "react";

import { HeaderContainer, GithubLogin } from "./";

export const Header = () => {
  return (
    <HeaderContainer>
      <GithubLogin isAbsolute={true} />
    </HeaderContainer>
  );
};
