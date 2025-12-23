import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Globe, 
  FileText, 
  PhoneCall, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Clock, 
  Award,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // ✅ Form State
  const [businessName, setBusinessName] = useState('');
  const [licenseType, setLicenseType] = useState('New License');
  const [phone, setPhone] = useState('');

  // Smooth scroll helper
  const scrollToContact = () => {
    setIsMenuOpen(false); // Close mobile menu if open
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  // ✅ WhatsApp Integration Logic
  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `📄 *License Callback Request*
🏢 Business Name: ${businessName}
📌 License Type: ${licenseType}
📞 Phone: ${phone}`;

    const whatsappUrl = `https://wa.me/9845808478?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans text-slate-900 scroll-smooth">
      {/* --- Navigation --- */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#1B365D] p-2 rounded-lg">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-[#1B365D] tracking-tight">
              NFFI <span className="text-[#F58220]">Consultant</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#" className="hover:text-[#F58220] transition">Home</a>
            <a href="#services" className="hover:text-[#F58220] transition">Services</a>
            <a href="#process" className="hover:text-[#F58220] transition">The Process</a>
            <button 
              onClick={scrollToContact}
              className="bg-[#1B365D] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#254a7c] transition shadow-lg shadow-blue-900/20"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#1B365D]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-4">
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg py-2 border-b border-slate-100">Services</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-lg py-2 border-b border-slate-100">Process</a>
            <button onClick={scrollToContact} className="w-full bg-[#1B365D] text-white py-3 rounded-xl">Contact Us</button>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <header className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-[#1B365D] via-[#254a7c] to-[#1B365D]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-sm font-bold mb-6 border border-orange-500/30">
              <Zap size={16} /> 24-Hour Licensing Support
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              Nepal's DFTQC License, <span className="text-[#F58220]">Simplified.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
              Expert consultancy for food and feed manufacturers. We manage your <span className="text-white font-semibold">NeFFILS</span> online portal from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={scrollToContact}
                className="bg-[#F58220] text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#e4761a] transition-all transform hover:-translate-y-1 shadow-xl shadow-orange-900/30"
              >
                Apply Now <ArrowRight size={20} />
              </button>
              <div className="flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Award className="text-green-400 w-7 h-7" />
                </div>
                <div>
                  <p className="font-bold text-sm tracking-wide">TRUSTED BY 500+</p>
                  <p className="text-slate-400 text-xs">Industries in Nepal</p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Integrated Contact Card */}
          <div id="contact-form" className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
            <div className="mb-8 text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-800">License Assessment</h3>
              <p className="text-slate-500">Fill the form to get a response within 1 hour.</p>
            </div>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 ml-1">Business Name</label>
                <input 
                  type="text" 
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Enter industry name" 
                  required
                  className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-[#F58220] focus:bg-white outline-none transition" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Type</label>
                  <select 
                    value={licenseType}
                    onChange={(e) => setLicenseType(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-[#F58220]"
                  >
                    <option>New License</option>
                    <option>Renewal</option>
                    <option>Amendment</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone</label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98XXXXXXXX" 
                    required
                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 outline-none focus:ring-2 focus:ring-[#F58220]" 
                  />
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#1B365D] text-white py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition shadow-xl shadow-blue-900/20 active:scale-95"
              >
                Request Free Call Back
              </button>

              <div className="space-y-2">
                <p className="text-[10px] text-slate-500 text-center leading-tight">
                  By requesting a free callback, your information will be sent to our WhatsApp so we can contact you quickly.
                </p>
                <p className="text-xs text-center">
                  <a href="#" className="text-[#F58220] hover:underline font-medium">Read our Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </header>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#F58220] font-bold tracking-widest uppercase text-sm">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B365D] mt-2 leading-tight">Comprehensive Support for Food & Feed Industries</h2>
          </div>
          <p className="text-slate-500 max-w-sm mb-2">We handle the technicalities so you can focus on production and quality.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { 
              icon: <Globe className="text-blue-600" />, 
              title: "NeFFILS Portal Management", 
              desc: "From account setup to document digitalizing. We ensure your business is correctly represented on the government portal." 
            },
            { 
              icon: <Clock className="text-orange-500" />, 
              title: "Rapid 24h Processing", 
              desc: "Skip the queues. We prioritize your application and handle follow-ups with DFTQC officials directly." 
            },
            { 
              icon: <ShieldCheck className="text-green-600" />, 
              title: "Technical Compliance", 
              desc: "Product formulation guidance, label design compliance, and laboratory setup consultation." 
            }
          ].map((item, i) => (
            <div key={i} className="group bg-white p-10 rounded-[2rem] border border-slate-100 hover:border-orange-100 hover:shadow-2xl transition-all duration-500">
              <div className="mb-8 p-5 bg-slate-50 w-fit rounded-2xl group-hover:bg-orange-50 transition-colors">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1B365D] group-hover:text-[#F58220] transition-colors">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
              <div className="mt-8 flex items-center text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-all">
                Learn More <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section id="process" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center italic text-slate-400">Industry Support</div>
              <div className="h-48 bg-[#F58220]/10 rounded-3xl flex flex-col items-center justify-center text-center p-6">
                <p className="text-4xl font-bold text-[#F58220]">24h</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase">Average Turnaround</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-48 bg-[#1B365D] rounded-3xl flex flex-col items-center justify-center text-center p-6 text-white">
                <p className="text-4xl font-bold">100%</p>
                <p className="text-[10px] font-bold text-white/60 uppercase">Compliance Rate</p>
              </div>
              <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center italic text-slate-400">Technical Audit</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#1B365D] mb-8">Why Industries Trust Us</h2>
            <div className="space-y-8">
              {[
                { t: "Legal Expertise", d: "Deep knowledge of Nepal Food Act and Feed Act regulations." },
                { t: "Direct Liaison", d: "We act as your professional representative at DFTQC offices." },
                { t: "Transparent Pricing", d: "No hidden fees. Professional service with clear value." }
              ].map((point, idx) => (
                <div key={idx} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-[#F58220]">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">{point.t}</h4>
                    <p className="text-slate-500">{point.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-[#1B365D] text-slate-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-white p-2 rounded-lg">
                  <ShieldCheck className="text-[#1B365D] w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-white">NFFI Consultant</span>
              </div>
              <p className="max-w-xs leading-relaxed">
                Empowering Nepal's food and feed industries through professional regulatory and digital consultancy.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 uppercase text-sm tracking-widest">Contact Information</h5>
              <div className="space-y-3">
                <p className="flex items-center gap-3"><PhoneCall size={18} /> +977-9845808478</p>
                <p className="flex items-center gap-3"><Globe size={18} /> Birgunj, Nepal</p>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-white font-bold mb-2">Need Help Now?</p>
              <p className="text-sm mb-4">Click below to start a WhatsApp chat with our lead consultant.</p>
              <a href="https://wa.me/9845808478" className="inline-block bg-[#25D366] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#128C7E] transition">
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm">
            &copy; {new Date().getFullYear()} Nepal Food & Feed Industry Consultant Services. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}