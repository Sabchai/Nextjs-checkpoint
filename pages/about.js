import Style from "../pages/about.module.css";

const About = () => {
  return (
      <div className={Style.about}>
          <h1 className={Style.h1}>Acerca de mí</h1>
          <p className={Style.p}>Soy tunecina. Tengo 32 años. Soy profesora de Español como Lengua extranjera. </p>
          <p className={Style.p} > Mis competencias son las siguientes: CRM tools, Html, Css, JavaScript, etc.</p>
      </div>
  );
};

export default About; 