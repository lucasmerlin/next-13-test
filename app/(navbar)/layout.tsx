import {ReactNode} from "react";


export default function NavbarLayout({children}: { children: ReactNode }) {
  return <>
    <div className="navbar bg-neutral text-neutral-content">
      <a className="btn btn-ghost normal-case text-xl">HelloPaint Gallery Viewer</a>
    </div>
    {children}
  </>
}