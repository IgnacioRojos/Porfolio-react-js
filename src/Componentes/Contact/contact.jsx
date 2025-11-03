import './contact.css';

const Contact = () => {
    return (
        <section className="contact-section container py-5" id="contacto">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <form
                        action="https://formsubmit.co/nachorojos99@gmail.com"
                        method="POST"
                        className="contact-form p-4 shadow rounded"
                    >
                        <h2 className="contact-title text-center mb-4">Contacto</h2>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" name="nombre" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="asunto" className="form-label">Asunto</label>
                            <input type="text" className="form-control" id="asunto" name="asunto" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="comentario" className="form-label">Comentario</label>
                            <textarea className="form-control" id="comentario" rows="4" name="comentario" required></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="contact-button">Enviar</button>
                        </div>

                        <input type="hidden" name="_next" value="http://127.0.0.1:5500/" />
                        <input type="hidden" name="_captcha" value="false" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;