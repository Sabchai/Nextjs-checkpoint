import Style from "../pages/projects.module.css";

const MisProyectos = () => {
    return (
        <div className={Style.proyectosContainer}>
            <h1 className={Style.titulo}>Mis Proyectos</h1>
            <ul className={Style.listaProyectos}>
                <li className={Style.proyectoItem}>
                    <h2 className={Style.nombreProyecto}>Proyecto 1:</h2>
                    <p className={Style.descripcionProyecto}>
                        Este proyecto consiste en la creación de una aplicación web interactiva que permite a los usuarios gestionar sus tareas diarias de manera eficiente. Incluye características como recordatorios,
                        categorización de tareas y un diseño intuitivo para mejorar la productividad.
                    </p>
                </li>
                <li className={Style.proyectoItem}>
                    <h2 className={Style.nombreProyecto}>Proyecto 2: </h2>
                    <p className={Style.descripcionProyecto}>
                        Este proyecto se centra en desarrollar una plataforma de seguimiento de hábitos que ayuda a los usuarios a establecer y mantener objetivos personales. Con funciones como estadísticas visuales, notificaciones y
                        personalización de metas, busca fomentar el crecimiento personal y la motivación diaria.
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default MisProyectos;
