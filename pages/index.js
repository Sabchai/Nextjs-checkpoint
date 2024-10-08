import Link from 'next/link';
import style from '../components/index/index.module.css';
import Image from 'next/image';

const Home = () => {
  return ( 
    <div className={style.header}>
      <h1 className={style.h1}>Bienvenidos a mi Portafolio</h1>
      <nav className={style.Navbar}>
        <ul className={style.navLinks}>
          <li className={style.navLink} ><Link href="/about">Acerca de mí</Link></li>
          <li className={style.navLink} ><Link href="/projects">Mis Proyectos</Link></li>
          <li className={style.navLink} ><Link href="/Contact">Contacto</Link></li>
        </ul>
      </nav>
      <Image className={style.img} 
            src="https://i.blogs.es/9c94f9/casa-ayfraym-2/1366_2000.jpg"
            alt="Home" 
            width={800} 
            height={650} 
        />
    </div>
    
  );
}

export default Home;
