import header from './header.module.css'

interface HeaderProp{
  title: string;
}

export default function Header(props: HeaderProp) {
  return (<header className={header.header}><h1 className={header.title}>{props.title}</h1></header>)
}