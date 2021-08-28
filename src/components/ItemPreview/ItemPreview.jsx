import React from "react";
import { ButtonBase, Avatar } from "@material-ui/core";
import styled from "styled-components";
import { tokens } from "../../data/tokens";
import { Text } from "../Text";
import { ArrowForwardIos as Icon, Star as StarIcon } from "@material-ui/icons";
import { Children } from "react";
const StyledAvatar = styled(Avatar)

const extractAbbr = (string) => {
    const firstLetter = string[0];
    const extraLetters = string
    .match(/\s\w/g)
    .map((val)=> val[1])
    .map((val)=> val.toUpperCase())
    .slice(0, 2);

    return `${firstLetter}${extraLetters.join('')}`;
  };
  

const Base = styled(ButtonBase)`
  min-height: 10rem;
  width: 100%;
  border-bottom: 1px solid
    rgba(${tokens.colors.blue}, ${tokens.opacity.subtler});
  text-align: left;
  justify-content: flex-start;
  padding: ${tokens.spacing.l};

  &:hover {
    background: rgba(${tokens.colors.Black}, ${tokens.opacity.subtler});
  }
`;
const Image = styled(Avatar)`
width:${({ size }) => tokens.images[size]};
height:${({ size }) => tokens.images[size]};
border-radius:${tokens.radius.strong}
margin-right:${tokens.spacing.m}
display:none;
background-color: rgb(${tokens.color.blue})

display:relative;
@media(min-width:400px){
    display:flex;
    align-items:center;
    justify-content:center;
}
`;

const StarBase = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: 1.5rem solid transparent;
  border-top-color: rgba(${tokens.colors.blue});
  border-right-color: rgba(${tokens.colors.blue});
`;

const Info = styled.div`
  flex-grow: 1;
`;

const TitleWrap = styled.div`
padding-bottom =${tokens.spacing.xs}
`;
const StyleStar = styled(StarIcon)`
  position: absolute;
  top: ${tokens.spacing.s};
  right: ${tokens.spacing.xs};
  width: ${tokens.spacing.xs};
  height: ${tokens.spacing.xs};
  color: white;
`;
export const ItemPreview = (props) => {
  const { title, helper, size = "s", image, starred = false, children } = props;

const abbr = image ? null: extractAbbr(title)

  return (
    <Base href="#">
      <Image size={size} src={image} alt="" >{abbr}</Image>

      <Avatar>OP</Avatar>

      <Info>
        <TitleWrap>
          <Text size="l" lines={2}>
            {title}
          </Text>
        </TitleWrap>

        <Text size="m" lines={1}>
          {helper}
        </Text>
        {children}
      </Info>

      <Icon />
      {starred && <StarBase />}
      {starred && <StarIcon />}
    </Base>
  );
};

export default ItemPreview;
