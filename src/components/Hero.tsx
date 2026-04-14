import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Installation de panneaux solaires premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="text-secondary font-semibold tracking-wider text-sm uppercase">
              Énergies Renouvelables & Travaux Publics
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            L'Excellence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-300">
              durable
            </span> pour vos projets.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Basée au Maroc, Magri Global Services SARL offre plus de 15 ans d'expertise dans les installations solaires, l'électricité générale, la plomberie et les travaux publics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full bg-secondary text-primary font-bold text-lg hover:bg-secondary-light transition-all transform hover:scale-105 text-center flex items-center justify-center shadow-[0_0_20px_rgba(250,219,95,0.4)]"
            >
              Découvrir nos réalisations
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 font-bold text-lg hover:bg-white/20 transition-all text-center flex items-center justify-center"
            >
              Demander un devis
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
