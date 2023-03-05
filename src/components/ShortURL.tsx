import React, { useEffect, useState } from "react"
export const ShortURL = (props: { shortURL: string, longURL: string}) => {
  const [isCopied,setIsCopied] = useState<boolean>(false);
  const copyTextToClipboard = async (text : string): Promise<boolean | void> => {
    if('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    }
    return document.execCommand('copy', true, text);
  }
  const handleCopy = () => {
      copyTextToClipboard(props.shortURL)
      .then(
      () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false)
          }, 2000)  
      })
      .catch(
        (err : any) => {
          console.log()
        }
      )
  }
  return (
    <li className='bg-white w-[100%-3rem]'> 
      <article>
      <h1 aria-label='long URL' className="mb-[.8125rem]">{props.longURL}</h1>
      <div>
        <h2 aria-label='short URL'>{props.shortURL}</h2> 
        <button onClick={handleCopy} disabled={isCopied} aria-pressed={isCopied} aria-label="Copy the short URL">{isCopied ? 'Copied' : 'Copy'}</button>
      </div>
    </article> 
    </li>
  );
}
