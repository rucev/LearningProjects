import { path } from '../../assets/svgPaths';
import './Footer.css';

export default function Footer() {
    console.log('Footer -> render')
    return <footer>
        made by <span>@rucev</span><a href="https://github.com/rucev" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d={path.github} /></svg></a>
    </footer>
}