import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Copy, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Portfolyo İletişimi - ${formData.name}`);
    const mailtoBody = encodeURIComponent(`İsim: ${formData.name}\nE-posta: ${formData.email}\n\nMesaj:\n${formData.message}`);
    window.location.href = `mailto:anilmetey@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Arka Plan Karartması */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal İçeriği */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#121316] border border-[#2A2E35] rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto my-auto z-10 custom-scrollbar"
          >
            {/* Üst Dekoratif Renk Parıltısı */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-[#B600A8]/20 via-[#7621B0]/30 to-[#38bdf8]/20 blur-3xl pointer-events-none" />

            {/* Kapat Butonu */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">
                  Birlikte Çalışalım
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mt-1">
                  Anıl Mete Yıldız
                </h2>
                <p className="text-[#D7E2EA]/70 text-sm sm:text-base mt-1">
                  Bilgisayar Mühendisi &bull; Mobil &amp; Full-Stack Geliştirici
                </p>
              </div>

              {/* Hızlı İletişim Butonları */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="relative group p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#B600A8]/50 hover:bg-white/[0.07] transition-all flex items-center justify-between">
                  <a
                    href="mailto:anilmetey@gmail.com"
                    className="flex items-center gap-3 overflow-hidden"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8] flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] text-[#D7E2EA]/50 uppercase font-medium">E-posta</div>
                      <div className="text-sm font-medium text-white truncate">anilmetey@gmail.com</div>
                    </div>
                  </a>
                  <button
                    onClick={() => copyToClipboard('anilmetey@gmail.com', 'email')}
                    type="button"
                    title="Kopyala"
                    className="p-2 text-white/50 hover:text-white cursor-pointer"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="relative group p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#7621B0]/50 hover:bg-white/[0.07] transition-all flex items-center justify-between">
                  <a
                    href="tel:+905071437410"
                    className="flex items-center gap-3 overflow-hidden"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#7621B0]/20 flex items-center justify-center text-[#7621B0] flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#D7E2EA]/50 uppercase font-medium">Telefon</div>
                      <div className="text-sm font-medium text-white">+90 507 143 7410</div>
                    </div>
                  </a>
                  <button
                    onClick={() => copyToClipboard('+905071437410', 'phone')}
                    type="button"
                    title="Kopyala"
                    className="p-2 text-white/50 hover:text-white cursor-pointer"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <a
                  href="https://linkedin.com/in/anıl-mete-yıldız-b76129234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/50 hover:bg-white/[0.07] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#D7E2EA]/50 uppercase font-medium">LinkedIn</div>
                    <div className="text-sm font-medium text-white">anıl-mete-yıldız</div>
                  </div>
                </a>

                <a
                  href="https://github.com/anilmetey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-purple-400/50 hover:bg-white/[0.07] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#D7E2EA]/50 uppercase font-medium">GitHub</div>
                    <div className="text-sm font-medium text-white">anilmetey</div>
                  </div>
                </a>
              </div>

              {/* Konum & Okul */}
              <div className="flex items-center gap-2 text-xs text-[#D7E2EA]/70 px-1">
                <MapPin className="w-4 h-4 text-[#B600A8]" />
                <span>Mersin, Türkiye &bull; Mersin Üniversitesi Bilgisayar Mühendisliği</span>
              </div>

              {/* Hızlı Mesaj Gönderme Formu */}
              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Adınız & Soyadınız"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="E-posta Adresiniz"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors"
                  />
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="Mesajınız veya proje detayınız..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                />

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-medium uppercase tracking-widest text-sm text-white transition-all duration-300 hover:opacity-95 active:scale-95 cursor-pointer shadow-lg"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    outline: '2px solid rgba(255, 255, 255, 0.95)',
                    outlineOffset: '-3px',
                  }}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                      <span>İletişim Başlatıldı!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Mesaj Gönder</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
