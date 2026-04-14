export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center mb-6">
              <span className="text-2xl font-black tracking-tighter uppercase text-white">
                Magri <span className="font-light text-white/70">Global Services</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Votre partenaire de confiance pour des projets d'énergie solaire, d'électricité générale, de plomberie et de travaux publics au Maroc. L'excellence depuis plus de 15 ans.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Liens Rapides</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-secondary transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-secondary transition-colors">À Propos</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-secondary transition-colors">Nos Services</a></li>
              <li><a href="#portfolio" className="text-slate-400 hover:text-secondary transition-colors">Réalisations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-4">
              <li className="text-slate-400">Installations Solaires</li>
              <li className="text-slate-400">Électricité Générale</li>
              <li className="text-slate-400">Travaux de Plomberie</li>
              <li className="text-slate-400">Travaux Publics & Construction</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Magri Global Services SARL. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
