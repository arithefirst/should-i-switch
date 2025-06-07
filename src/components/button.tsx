import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function Button({href, children, className = ''}:ButtonProps) {
  function RootElement({children, c}: {children: React.ReactNode, c: string}) {
    return href?<a href={href} className={c + ' w-fit'}>{children}</a>:<button className={c}>{children}</button>
  }

  return <RootElement c={'bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700 transition-colors cursor-pointer block' + ' ' + className}>
    {children}
  </RootElement>
}