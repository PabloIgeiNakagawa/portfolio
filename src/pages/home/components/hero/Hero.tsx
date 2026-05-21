import foto from '../../../../assets/hero/foto.webp';
import arGif from '../../../../assets/hero/ar.gif';
import cvPdf from '../../../../assets/CV_PabloIgeiNakagawa.pdf';

function Hero() {
  const getLevel = () => {
    const birthDate = new Date('2003-04-21');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const level = getLevel();

  return (
    <section id="hero" className="relative scroll-mt-28">
      <div className="p-6 md:p-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-w-0 flex flex-row gap-4 items-start md:gap-6">
            <div className="shrink-0">
              <img 
                src={foto} 
                alt="Avatar" 
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-sm border-2 border-steam-green shadow-[0_0_15px_rgba(144,186,60,0.3)]"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-xl text-steam-white font-medium mb-2 tracking-tight">Pablo Igei Nakagawa</h1>

               <div className="flex flex-col gap-1.5 mb-3">
                  <p className="text-steam-text text-xs flex items-center gap-2">
                    <img src={arGif} alt="Argentina" className="w-5 h-auto inline-block" /> 
                    Buenos Aires, Argentina
                  </p>
               </div>
              
               <p className="text-steam-text text-sm">
                 Me gusta resolver, no solo programar.
               </p>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-steam-white text-xl font-medium">Nivel</span>
              {level >= 50 ? (
                <div className="w-8 h-8 bg-gradient-to-br from-steam-orange-start to-steam-orange-end flex items-center justify-center text-steam-white font-bold text-sm shadow-[0_0_12px_rgba(255,123,0,0.4)]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                  {level}
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full border-2 border-yellow-400 bg-steam-bg-light/80 flex items-center justify-center text-steam-white font-bold text-sm shadow-[0_0_8px_rgba(255,255,0,0.3)]">
                  {level}
                </div>
              )}
            </div>
            <div className="bg-black/30 backdrop-blur-sm px-3 py-2 flex items-center gap-2 rounded-sm flex-1">
              <div className="w-8 h-8 rounded-full bg-steam-neon-purple flex items-center justify-center text-sm font-bold text-white shadow-[0_0_10px_rgba(184,41,221,0.6)]">D</div>
              <div className="flex flex-col">
                <span className="text-steam-white text-xs font-bold" style={{ fontWeight: 700 }}>Desarrollador</span>
                <span className="text-steam-text text-[10px]">100 XP</span>
              </div>
            </div>
            <a href={cvPdf} download="CV_PabloIgeiNakagawa.pdf" className="w-1/2 text-center bg-white/5 hover:bg-white/10 text-steam-white text-sm tracking-wide px-5 py-2.5 rounded-sm transition-colors duration-200">
              Descargar CV
            </a>
          </div>

          <div className="hidden lg:flex w-[300px] shrink-0 flex-col items-start gap-2">
            <div className="flex items-center gap-2">
                <span className="text-steam-white text-xl font-medium">Nivel</span>
              {level >= 50 ? (
                <div className="w-8 h-8 bg-gradient-to-br from-steam-orange-start to-steam-orange-end flex items-center justify-center text-steam-white font-bold text-sm shadow-[0_0_15px_rgba(255,123,0,0.4)]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                  {level}
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full border-2 border-yellow-400 bg-steam-bg-light/80 flex items-center justify-center text-steam-white font-bold text-sm shadow-[0_0_10px_rgba(255,255,0,0.3)]">
                  {level}
                </div>
              )}
            </div>
            <div className="bg-black/30 backdrop-blur-sm px-4 py-3 flex w-full items-center gap-3 rounded-sm mt-2">
              <div className="w-10 h-10 rounded-full bg-steam-neon-purple flex items-center justify-center text-lg font-bold text-white shadow-[0_0_12px_rgba(184,41,221,0.6)]">D</div>
              <div className="flex flex-col">
                <span className="text-steam-white text-sm font-bold" style={{ fontWeight: 700 }}>Desarrollador</span>
                <span className="text-steam-text text-xs">100 XP</span>
              </div>
            </div>
            <a href={cvPdf} download="CV_PabloIgeiNakagawa.pdf" className="w-1/2 text-center bg-white/5 hover:bg-white/10 text-steam-white text-sm tracking-wide px-5 py-2.5 rounded-sm transition-colors duration-200 mt-1">
              Descargar CV
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-steam-blue/30 to-transparent"></div>
    </section>
  );
}

export default Hero;
