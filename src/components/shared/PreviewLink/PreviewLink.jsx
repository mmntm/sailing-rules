import React from "react";
import { makeStyles, FormHelperText, Card } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { muiTheme } from "../theme/theme";

export const PreviewLinkInner = ({ children, previewText, className, to }) => {
  return (
    <div className={className}>
      <Link to={to}>{children}</Link>
      <Card elevation={4} className={"previewText"}>
        {previewText}
      </Card>
    </div>
  );
};

export const PreviewLink = styled(PreviewLinkInner)`
  display: inline-flex;
  position: relative;

  &:hover {
    .previewText {
      opacity: 1;
    }
  }

  .previewText {
    opacity: 0;
    position: absolute;
    top: 30px;
    padding: 10px;
    background: white;
    width: 300px;
    transition: all 230ms ease-in-out;
    padding: 15px;
    ${muiTheme.breakpoints.down("sm")} {
      display: none;
    }
  }
`;
