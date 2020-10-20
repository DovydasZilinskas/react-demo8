import React from "react";
import * as S from "./Header.style";
import Section from "../Section/Section";

function Header() {
  return (
    <S.Actions>
      <Section fullWidth>
        <S.Header>
          <S.StyledLink to="/">Home</S.StyledLink>
          <S.StyledLink to="/menu">Menu</S.StyledLink>
          <S.StyledLink to="/services">Services</S.StyledLink>
          <S.StyledLink to="/gallery">Gallery</S.StyledLink>
          <S.StyledLink to="/blog">Blog</S.StyledLink>
          <S.StyledLink to="/contact us ">Contact Us</S.StyledLink>
        </S.Header>
      </Section>
    </S.Actions>
  );
}

export default Header;
