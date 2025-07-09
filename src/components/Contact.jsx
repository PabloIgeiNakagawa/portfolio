import { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contacto() {
  const [formulario, setFormulario] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const recaptchaRef = useRef(null);

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();

    const captcha = recaptchaRef.current?.getValue();
    if (!captcha) {
      alert("Por favor, verifica que no eres un robot.");
      return;
    }

    setEnviando(true);

    const datosEnviar = {
      ...formulario,
      "g-recaptcha-response": captcha,
    };

    try {
      await emailjs.send(
        'service_pl0p3ko',
        'template_mvrisu8',
        datosEnviar,
        'fXWqGcgMufDqVp887'
      );

      setEnviado(true);
      setFormulario({ name: "", email: "", subject: "", message: "" });
      recaptchaRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Error al enviar el mensaje. Por favor intenta más tarde.');
    }

    setEnviando(false);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-purple-500 to-pink-500 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-2xl px-6 relative z-10">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Contáctame
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Estoy buscando trabajo y me encantaría formar parte de tu equipo
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6">
            Envíame un mensaje
          </h3>

          {enviado ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✅</div>
              <h4 className="text-xl font-semibold text-green-400 mb-2">
                ¡Mensaje enviado!
              </h4>
              <p className="text-gray-300 mb-6">
                Gracias por contactarme. Te responderé lo antes posible.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={manejarEnvio} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formulario.name}
                    onChange={manejarCambio}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formulario.email}
                    onChange={manejarCambio}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formulario.subject}
                  onChange={manejarCambio}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Oportunidad laboral"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formulario.message}
                  onChange={manejarCambio}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
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
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-3"
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
