// import HomePageStyle from './page.module.css';
import HomePage from './homepage/page';
import Nav from './components/nav/nav';

export default function Home() {
  return (
    <div>
      <Nav />
      <HomePage />
    </div>
  );
}
