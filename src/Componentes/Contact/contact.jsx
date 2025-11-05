import './contact.css';

const Contact = () => {
  return (
    <section className="contact-section py-5" id="contacto">
      <div className="container">
        <h2 className="text-center fw-bold mb-5" data-aos="fade-down">
          💬 ¡Podes contactarme para hacer realidad tu proximo proyecto web!
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form
              action="https://formsubmit.co/nachorojos99@gmail.com"
              method="POST"
              className="contact-form shadow-lg rounded-4 p-4 p-md-5"
              data-aos="zoom-in"
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label fw-semibold">Nombre</label>
                  <input type="text" className="form-control" id="nombre" name="nombre" required />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-semibold">Email</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>

                <div className="col-12">
                  <label htmlFor="asunto" className="form-label fw-semibold">Asunto</label>
                  <input type="text" className="form-control" id="asunto" name="asunto" required />
                </div>

                <div className="col-12">
                  <label htmlFor="comentario" className="form-label fw-semibold">Mensaje</label>
                  <textarea className="form-control" id="comentario" name="comentario" rows="5" required></textarea>
                </div>
              </div>

              <div className="text-center mt-4">
                <button type="submit" className="contact-btn px-4 py-2 fw-semibold">
                  Enviar Mensaje 
                </button>
              </div>

              <input type="hidden" name="_next" value="https://porfolioignaciorojos.netlify.app/" />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

