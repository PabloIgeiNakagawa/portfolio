import { useState, useRef} from "react";
import type { ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

interface Formulario {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contacto() {
  const [formulario, setFormulario] = useState<Formulario>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [enviando, setEnviando] = useState<boolean>(false);
  const [enviado, setEnviado] = useState<boolean>(false);

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const manejarCambio = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const manejarEnvio = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const captcha = recaptchaRef.current?.getValue();
    if (!captcha) {
      alert("Por favor, verifica que no eres un robot.");
      return;
    }

    setEnviando(true);

    const datosEnviar = {
      ...formulario,
      "g-recaptcha-response": captcha
    };

    try {
      await emailjs.send(
        "service_pl0p3ko",
        "template_mvrisu8",
        datosEnviar,
        "fXWqGcgMufDqVp887"
      );

      setEnviado(true);
      setFormulario({ name: "", email: "", subject: "", message: "" });
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Error al enviar el mensaje. Por favor intenta más tarde.");
    }

    setEnviando(false);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-2xl px-6 relative z-10">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="u-text-h2 text-4xl sm:text-5xl font-bold mb-4">
            Contáctame
          </h2>
          <p className="u-text-p text-lg max-w-2xl mx-auto">
            Estoy buscando trabajo y me encantaría formar parte de tu equipo
          </p>
          <div className="u-linea-divisora"></div>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white dark:bg-gray-900 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold u-text-h3 mb-6">
            Envíame un mensaje
          </h3>

          {enviado ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✅</div>
              <h4 className="text-xl font-semibold text-green-500 dark:text-green-400 mb-2">
                ¡Mensaje enviado!
              </h4>
              <p className="u-text-p mb-6">
                Gracias por contactarme. Te responderé lo antes posible.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 disabled:from-gray-600 cursor-pointer font-semibold py-2 px-6 rounded-lg transition-all duration-300"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={manejarEnvio} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="u-label-contacto">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formulario.name}
                    onChange={manejarCambio}
                    className="u-input-contacto"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="u-label-contacto">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formulario.email}
                    onChange={manejarCambio}
                    className="u-input-contacto"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="u-label-contacto">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formulario.subject}
                  onChange={manejarCambio}
                  className="u-input-contacto"
                  placeholder="Oportunidad laboral"
                />
              </div>

              <div>
                <label htmlFor="message" className="u-label-contacto">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formulario.message}
                  onChange={manejarCambio}
                  className="u-textarea-contacto"
                  placeholder="Cuéntame sobre la oportunidad laboral..."
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="6Ldnon0rAAAAAPZriRTTtM7YhGYdPmvCfvje4yPn"
                  ref={recaptchaRef}
                  theme="light"
                />
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-gradient-to-r bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 disabled:from-gray-600 disabled:to-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-3 cursor-pointer"
              >
                {enviando ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <span>Enviar mensaje</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
