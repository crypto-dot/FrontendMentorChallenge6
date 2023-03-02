import { ShortLink } from "../types"
import { ShortURL } from "./ShortURL"
import React from "react"
export const ListOfShortLinks = (props: {shortURLs: ShortLink[]}) => {
  
  return (
    <ul> {props.shortURLs.map((shortURLItem,index) => {
      return (<ShortURL shortURL={shortURLItem.shortURL} longURL={shortURLItem.longURL} key={index}/>) } )} </ul>
  )
}
