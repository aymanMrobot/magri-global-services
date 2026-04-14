import { motion } from 'framer-motion';
import { Award, Clock, Users, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Clock size={24} className="text-secondary" />, value: "30+", label: "Années d'expérience du CEO" },
    { icon: <Award size={24} className="text-secondary" />, value: "15+", label: "Années d'existence" },
    { icon: <Zap size={24} className="text-secondary" />, value: "50+", label: "Projets Solaires" },
    { icon: <Users size={24} className="text-secondary" />, value: "Expertise", label: "Électriciens, Maçons, Plombiers" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
              {/* Photo of CEO */}
              <img 
                src="/images/IMG_4636.jpg" 
                alt="Abdelouahab El Magri - CEO" 
                className="w-full h-[450px] md:h-[600px] object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Abdelouahab El Magri</h3>
                <p className="text-secondary font-medium">Fondateur et PDG</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 w-48 md:w-64 h-48 md:h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8 w-32 md:w-48 h-32 md:h-48 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-secondary rounded-full"></div>
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm md:text-base">À Propos De Nous</h2>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
              Une vision forgée par <span className="text-primary">l'expérience</span>.
            </h3>
            
            <p className="text-slate-600 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              Fondée il y a plus de 15 ans par Abdelouahab El Magri, <strong className="text-slate-900">Magri Global Services SARL</strong> est le fruit de plus de 30 années d'expertise personnelle dédiées au secteur des travaux publics et du bâtiment au Maroc.
            </p>
            <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
              Nous sommes fiers de notre capacité à fournir un travail irréprochable grace à notre équipe composée des meilleurs <span className="text-primary font-medium">électriciens, maçons, et plombiers</span>. Que ce soit pour des fermes isolées, des villas résidentielles ou des établissements publics, notre engagement envers l'excellence environnementale et la qualité est total.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2 p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/5 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</h4>
                  <p className="text-xs md:text-sm text-slate-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
