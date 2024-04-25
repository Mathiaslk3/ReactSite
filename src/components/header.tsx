import { BrowserRouter, Link } from "react-router-dom"

const content = [
    {titel: "Forside", url: "/"},
    {titel: "underside 1", url: "/"},
    {titel: "underside 2", url: "/"},
    {titel: "underside 3", url: "/"},
]


export default function Header() {
  return (
    <nav>
        <ul>
            <BrowserRouter>
            {content.map((item) => (
                <Link key={item.titel} to={item.url}>{item.titel}</Link>
            ))}
            </BrowserRouter>
        </ul>
    </nav>
  )
}
