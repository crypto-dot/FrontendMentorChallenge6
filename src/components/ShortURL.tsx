import React from "react"
export const ShortURL = (props: { shortURL: string, longURL: string}) => {
  return (
    <li >{props.shortURL} : {props.longURL}</li>
  );
}
