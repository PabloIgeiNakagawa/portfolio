import { useState, useRef, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import SectionTitle from "../../../../components/SectionTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Formulario {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formulario, setFormulario] = useState<Formulario>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [enviando, setEnviando] = useState<boolean>(false);
  const [enviado, setEnviado] = useState<boolean>(false);

  const labelClass = "block font-titulo text-gray-900 dark:text-white font-semibold mb-2";
  const inputTextAreaClass = "w-full bg-gray-50 dark:bg-neutral-800/50 rounded-xl px-4 py-3 font-texto text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-neutral-400 border border-gray-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300";

  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

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

    try {
      // Captcha
      const verifyRes = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: captcha })
      });

      const verifyJson = await verifyRes.json();

      if (!verifyRes.ok || !verifyJson.success) {
        console.error("Captcha verification failed:", verifyJson);
        alert("No se pudo verificar el captcha. Intenta nuevamente.");
        setEnviando(false);
        recaptchaRef.current?.reset();
        return;
      }

      // EmailJS
      const datosEnviar = {
        ...formulario,
        "g-recaptcha-response": captcha
      };

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
      console.error("Error al enviar:", error);
      alert("Error al enviar el mensaje. Por favor intenta más tarde.");
    } finally {
      setEnviando(false);
    }
  };
  
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(containerRef);

      // Inicial: escondemos campos, captcha y botones
      gsap.set(q('.form-field'), { opacity: 0, y: 18, force3D: true });
      gsap.set(q('.efecto-aparicion'), { opacity: 0, y: 18, force3D: true });

      // Animación por lotes para los campos (más eficiente que uno por uno)
      ScrollTrigger.batch(q('.form-field'), {
        start: 'top 85%',
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.06
          });
        },
        once: true
      });

      // Animación para elementos puntuales (título, captcha, botón)
      ScrollTrigger.batch(q('.efecto-aparicion'), {
        start: 'top 85%',
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.08
          });
        },
        once: true
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto max-w-2xl px-6 relative z-10">
        <SectionTitle title="Contáctame"
          paragraph="Estoy buscando trabajo y me encantaría formar parte de tu equipo"
        />

        {/* Formulario de contacto */}
        <div className="bg-white dark:bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-neutral-700/50 shadow-xl shadow-gray-900/5 dark:shadow-black/20">
          <h3 className="text-2xl font-titulo font-bold mb-6 text-gray-900 dark:text-white efecto-aparicion">
            Enviame un mensaje
          </h3>

          {enviado ? (
            <div className="text-center py-12 efecto-aparicion">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-titulo font-bold text-emerald-600 dark:text-emerald-400 mb-3">
                Mensaje enviado
              </h4>
              <p className="font-texto text-gray-600 dark:text-neutral-400 mb-8">
                Gracias por contactarme. Te respondere lo antes posible.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-700 cursor-pointer font-texto font-medium py-3 px-6 rounded-xl transition-all duration-300 border border-gray-200 dark:border-neutral-700"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={manejarEnvio} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="form-field">
                  <label htmlFor="name" className={labelClass}>
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formulario.name}
                    onChange={manejarCambio}
                    className={inputTextAreaClass}
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email" className={labelClass}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formulario.email}
                    onChange={manejarCambio}
                    className={inputTextAreaClass}
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject" className={labelClass}>
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formulario.subject}
                  onChange={manejarCambio}
                  className={inputTextAreaClass}
                  placeholder="Oportunidad laboral"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className={labelClass}>
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formulario.message}
                  onChange={manejarCambio}
                  className={`${inputTextAreaClass} resize-none`}
                  placeholder="Cuéntame sobre la oportunidad laboral..."
                />
              </div>

              <div className="flex justify-center efecto-aparicion">
                <ReCAPTCHA
                  sitekey={SITE_KEY}
                  ref={recaptchaRef}
                  theme="light"
                />
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-3 cursor-pointer efecto-aparicion"
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
