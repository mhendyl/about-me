import HeaderPage from '../components/header/header-page';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from '../components/body/about-me';

export default function Home() {
  return (
    <div>
      <HeaderPage/>
      <AboutMe/>
    </div>
  )
}
