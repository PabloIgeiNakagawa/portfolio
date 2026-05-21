import { useState, useRef } from "react";
import type { ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

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

  const labelClass = "block text-steam-text-light text-xs font-semibold mb-1 uppercase tracking-wide";
  const inputClass = "w-full bg-black/30 backdrop-blur-sm border border-steam-border rounded-sm text-steam-white text-sm px-3 py-2 transition-all duration-200 focus:border-steam-blue focus:shadow-[0_0_0_2px_rgba(26,159,255,0.2)] focus:bg-black/40 placeholder-steam-text/50";

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
      alert("Por favor, completa el captcha para enviar el mensaje.");
      return;
    }

    setEnviando(true);

    try {
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

  return (
    <section id="contact" className="w-full scroll-mt-28">
      <div className="bg-steam-panel backdrop-blur-xl rounded-sm overflow-hidden">
        <div className="bg-white/5 px-4 py-2.5">
          <h2 className="text-steam-text-light text-lg font-semibold tracking-wide">Contacto</h2>
        </div>

        <div className="p-4 md:p-6">
        {enviado ? (
          <div className="text-center py-8">
            <h4 className="text-xl font-titulo font-bold text-steam-green mb-2">
              Mensaje enviado
            </h4>
            <p className="font-texto text-steam-text mb-6 text-sm">
              Gracias por tu mensaje. Te responderé lo antes posible.
            </p>
            <button
              onClick={() => setEnviado(false)}
              className="bg-steam-panel backdrop-blur-sm border border-steam-border rounded-sm text-steam-text-light px-4 py-2 text-sm transition-all duration-200 hover:border-steam-blue/40 hover:text-white"
            >
              Añadir un mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={manejarEnvio} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={labelClass}>Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formulario.name}
                  onChange={manejarCambio}
                  className={inputClass}
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formulario.email}
                  onChange={manejarCambio}
                  className={inputClass}
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className={labelClass}>Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formulario.subject}
                onChange={manejarCambio}
                className={inputClass}
                placeholder="Oportunidad laboral"
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>Mensaje</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formulario.message}
                onChange={manejarCambio}
                className={`${inputClass} resize-none`}
                placeholder="Escribí tu mensaje..."
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
              <ReCAPTCHA
                sitekey={SITE_KEY}
                ref={recaptchaRef}
                theme="dark"
              />

              <button
                type="submit"
                disabled={enviando}
                className="bg-gradient-to-r from-steam-green-bright to-[#6b8a2b] text-white px-6 py-2 rounded-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
              >
                {enviando ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </div>
          </form>
        )}
        </div>
      </div>
    </section>
  );
}
