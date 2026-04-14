import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    { src: "/images/Lycee_Hassan_2/5558c309-2fa7-42a2-93ce-ca8e91770a91.JPG", alt: "Lycée Hassan 2 - Électricien Principal", category: "Projet Récent" },
    { src: "/images/Lycee_Hassan_2/17dcfc1d-bf33-4122-8e2a-2885c7d92c3b.JPG", alt: "Lycée Hassan 2 - Installation", category: "Projet Récent" },
    { src: "/images/Lycee_Hassan_2/a6b9120a-66d2-4b5f-a7d5-8a6f158c18b5.JPG", alt: "Lycée Hassan 2 - Déploiement", category: "Projet Récent" },
    { src: "/images/Lycee_Hassan_2/c3b6606a-fb18-4890-9c17-d8cb332281f3.JPG", alt: "Lycée Hassan 2 - Équipement", category: "Projet Récent" },
    { src: "/images/IMG_4626.JPG", alt: "Installation Solaire - Projet 1", category: "Énergie Solaire" },
    { src: "/images/IMG_4627.JPG", alt: "Installation Solaire - Projet 2", category: "Travaux" },
    { src: "/images/ab35dfd4-94ff-4757-adf4-679864898ff1.JPG", alt: "Travaux d'électricité", category: "Électricité" },
    { src: "/images/IMG_4628.JPG", alt: "Installation - Projet 3", category: "Intégration Systèmes" },
    { src: "/images/af3dc608-6327-4d0f-8483-658fee41587d.JPG", alt: "Chantier en cours", category: "Travaux Publics" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
            <h2 className="text-secondary font-bold tracking-wider uppercase">Nos Réalisations</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>
          <h3 className="text-4xl font-bold mb-6">Des Résultats Concrets</h3>
          <p className="text-lg text-white/80">
            Découvrez un aperçu de nos projets récents dont notre toute dernière réalisation au Lycée Hassan 2.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-800"
            >
              <img 
                src={project.src} 
                alt={project.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                <span className="text-secondary font-medium tracking-wider text-xs md:text-sm mb-2 uppercase">{project.category}</span>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.alt}
                </h4>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center text-primary transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <ExternalLink size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Highlight Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 flex flex-col md:flex-row items-center gap-8 shadow-xl"
        >
          <div className="w-full md:w-1/3 flex-shrink-0">
            <h4 className="text-secondary font-bold tracking-wider uppercase mb-2">Notre Équipe en Action</h4>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Focus sur notre expertise terrain</h3>
          </div>
          <div className="w-full md:w-2/3 border-l-0 md:border-l-2 border-secondary/30 pt-4 md:pt-0 pl-0 md:pl-8">
            <p className="text-lg text-white/90 leading-relaxed">
              Dans nos récentes photos du projet <strong>Lycée Hassan 2</strong> (y compris celle avec la casquette bleue et orange), vous remarquerez le travail exceptionnel de <strong className="text-secondary">Abdeljabar el Hassnaoui</strong>. En tant qu'électricien principal de Magri Global Services, il cumule plus de <strong className="text-white">12 ans d'expérience</strong> dans l'installation de systèmes électriques avancés et de panneaux solaires, garantissant la sécurité et la perfection de chaque chantier.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-secondary text-secondary font-bold text-lg hover:bg-secondary hover:text-primary transition-all"
          >
            Lancer votre projet avec nous
          </a>
        </div>
      </div>
    </section>
  );
}
