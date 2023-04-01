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
        () => {
          console.error('Unable to copy text to clipboard!');
        }
      );
  }
  return (
    <li className='bg-white w-[calc(100%-3rem)] relative left-6 rounded-sm'> 
      <article className='pb-4 h-shortLinkArticle'>
        <div className='pl-4 h-shortLinkH1Height flex items-center'> 
          <h1 aria-label='long URL' className='text-primarytxt tracking-wide w-[100%] overflow-hidden whitespace-nowrap text-ellipsis' >{props.longURL}</h1> 
          
        </div>
        <div className='pl-4 pr-4 border-t border-t-secondarytxt text-secondary tracking-wide h-[calc(100%-3rem)] flex flex-col justify-between pt-[.4375rem]'>
          <div className='h-[2.25rem] flex items-center'> 
            <h2 aria-label='short URL' className='text-primary w-[100%] overflow-hidden whitespace-nowrap text-ellipsis'>{props.shortURL}</h2>
          </div>
          <button className='self-center max-w-copyBtn w-btnXlg h-btnSm bg-primary disabled:bg-secondary focus:bg-primary-hover hover:bg-primary-hover text-white' onClick={handleCopy} disabled={isCopied} aria-pressed={isCopied} aria-label='Copy the short URL'>{isCopied ? 'Copied' : 'Copy'}</button>
        </div>
      </article> 
    </li>
  );
}
