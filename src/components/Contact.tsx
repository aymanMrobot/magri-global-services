import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-secondary rounded-full"></div>
              <h2 className="text-primary font-bold tracking-wider uppercase">Contact</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Prêt à concrétiser <br /> votre projet ?
            </h3>
            <p className="text-lg text-slate-600 mb-12">
              Que ce soit pour une installation solaire, des travaux d'électricité, de plomberie ou de construction, notre équipe est à votre disposition pour vous fournir un devis personnalisé.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Téléphone & WhatsApp</h4>
                  <p className="text-slate-600 mb-2">Lundi - Samedi, 8h00 - 18h00</p>
                  <a href="https://wa.me/212668515050" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
                    +212 6 68 51 50 50
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600 mb-2">Notre équipe vous répondra dans les 24h.</p>
                  <a href="mailto:elmagriabdelouahab@gmail.com" className="text-xl font-bold text-primary hover:text-secondary transition-colors break-all">
                    elmagriabdelouahab@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Siège Social</h4>
                  <p className="text-slate-600 font-medium text-lg">
                    Maroc
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (UI only to look premium) */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
            <h4 className="text-2xl font-bold text-slate-900 mb-8">Envoyez-nous un message</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nom Complet</label>
                  <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Téléphone</label>
                  <input type="tel" placeholder="+212 ..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service souhaité</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all bg-white">
                  <option>Installation Panneaux Solaires</option>
                  <option>Électricité Générale</option>
                  <option>Plomberie</option>
                  <option>Travaux Publics / Construction</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea rows={4} placeholder="Parlez-nous de votre projet..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"></textarea>
              </div>

              <button className="w-full px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-light transition-colors flex items-center justify-center gap-2">
                <span>Envoyer le message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
