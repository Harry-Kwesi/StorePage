import React from "react";
import "./Hero.css";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { toOptimizedImage } from "../../helpers/general";

const Hero = (props) => {
  const {
    title,
    subtitle,
    ctaText,
    ctaAction,
    image,
    maxWidth,
    ctaStyle,
    ctaLink,
    ctaTo,
    header,
  } = props;
  return (
    <div
      className="rootHero"
      style={{ backgroundImage: `url(${toOptimizedImage(image)})` }}
    >
      <div className="contentHero" style={{ maxWidth: maxWidth }}>
        {header && <span className="headerHero">{header}</span>}
        {title && <h2 className="titleHero">{title}</h2>}
        {subtitle && <span className="subtitleHero">{subtitle}</span>}
        {ctaText && (
          <Button
            className={`ctaButtonHero ${ctaStyle}`}
            level={"primary"}
            onClick={ctaAction}
          >
            {ctaText}
          </Button>
        )}
        {ctaLink && (
          <Link className="ctaLinkHero" to={ctaTo}>
            {ctaLink}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
