import { motion } from 'framer-motion';
import { SunMedium, Zap, Droplets, HardHat } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Énergie Solaire",
      desc: "Installation complète de panneaux solaires pour fermes, villas et établissements publics.",
      icon: <SunMedium size={36} className="text-white" />,
      color: "bg-secondary",
      delay: 0.1
    },
    {
      id: 2,
      title: "Électricité Générale",
      desc: "Réseaux électriques, câblage, et maintenance par nos maîtres électriciens.",
      icon: <Zap size={36} className="text-white" />,
      color: "bg-primary",
      delay: 0.2
    },
    {
      id: 3,
      title: "Plomberie Professionnelle",
      desc: "Installations sanitaires, tuyauterie industrielle et domestique de haute qualité.",
      icon: <Droplets size={36} className="text-white" />,
      color: "bg-blue-500",
      delay: 0.3
    },
    {
      id: 4,
      title: "Travaux Publics & Maçonnerie",
      desc: "Construction, rénovation et gros œuvre par notre équipe de constructeurs expérimentés.",
      icon: <HardHat size={36} className="text-white" />,
      color: "bg-slate-700",
      delay: 0.4
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
            <h2 className="text-primary font-bold tracking-wider uppercase">Nos Services</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Expertise Complète Pour Vos Projets</h3>
          <p className="text-lg text-slate-600">
            De la conception à la réalisation, notre portefeuille de services couvre l'ensemble de vos besoins en construction et intégration énergétique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 relative overflow-hidden"
            >
              {/* Hover background effect */}
              <div className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-100">
                <a href="#contact" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group/link">
                  En savoir plus 
                  <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
