import Style from "../pages/Contact.module.css"; // Asegúrate de ajustar la ruta según tu estructura de carpetas

const Contact = () => {
    return (
        <div>
            <h1 className={Style.titulo}>Contáctame</h1>
            
            <form className={Style.contactForm}>
                <div>
                    <label htmlFor="name">Nombre :</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Escribe aquí su nombre" 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email">Correo electrónico :</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Escribe aquí su email" 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="4" 
                        placeholder="Escribe aquí su mensaje" 
                        required 
                    ></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>

            <footer className={Style.footer}>
                <p>Email: <a href="mailto:chaibisab80@gmail.com">chaibisab80@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/sabrine-c-07184b212/" target="_blank" rel="noopener noreferrer">ver LinkedIn</a></p>
            </footer>
        </div>
    );
};

export default Contact;
