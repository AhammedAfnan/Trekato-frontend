import React from 'react'

interface FooterLinkProps {
    question: string;
    linkText: string;
    linkHref: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ question, linkText, linkHref}) => {
  return (
    <p className='text-black text-sm mt-4 font-semibold'>
        {question} <a href={linkHref} className='text-red-500'>{linkText}</a>
    </p>
  )
}

export default FooterLink
