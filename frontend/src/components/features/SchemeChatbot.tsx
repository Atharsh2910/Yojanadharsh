import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { cn } from '../../utils/cn';

export const SchemeChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: 'Namaste! I am Yojana Sahayak. First, confirm your business details below, then describe your need (e.g., "I need a loan for my textile shop") and I will match the right schemes for you.',
    },
  ]);

  const [businessType, setBusinessType] = useState('Micro Manufacturing');
  const [sector, setSector] = useState('Manufacturing');
  const [state, setState] = useState('Karnataka');

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  const handleSearch = async () => {
    if (!input.trim()) return;
    const userQuery = input;
    setMessages(prev => [...prev, { role: 'user', text: userQuery }]);
    setInput('');

    try {
      const response = await fetch('http://localhost:5000/api/match-schemes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessType, sector, state }),
      });

      const result = await response.json();
      const schemes = result?.schemes ?? [];

      const botMsg =
        schemes.length > 0
          ? `I found ${schemes.length} matching schemes for a ${businessType} in ${sector}, including "${schemes[0].name}". Would you like to see the eligibility criteria?`
          : `I couldn't find a direct match for a ${businessType} in ${sector}. You can try describing your need differently, or adjust your business profile.`;

      setTimeout(
        () =>
          setMessages(prev => [
            ...prev,
            {
              role: 'bot',
              text: botMsg,
            },
          ]),
        600,
      );
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          text: 'Sorry, I had trouble matching schemes right now. Please try again in a moment.',
        },
      ]);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {!isOpen ? (
          <motion.button 
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 p-5 rounded-full text-white shadow-2xl flex items-center gap-2 group"
          >
            <MessageSquare size={28} />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold">Ask Sahayak</span>
          </motion.button>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.5 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            className="bg-white w-96 h-[550px] rounded-[2.5rem] shadow-3xl border border-slate-200 flex flex-col overflow-hidden"
          >
            <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Bot className="p-1 bg-white/20 rounded-lg" size={32} />
                <div>
                  <p className="font-bold text-lg leading-tight">Yojana Sahayak</p>
                  <p className="text-xs opacity-70">Always Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform"><X /></button>
            </div>
            <div className="px-6 pt-3 pb-4 bg-blue-50 border-b border-blue-100 space-y-2">
              <p className="text-xs font-semibold text-blue-900 uppercase tracking-wide">Business Profile</p>
              <div className="grid grid-cols-1 gap-2 text-xs text-blue-900">
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Business Type</span>
                  <select
                    value={businessType}
                    onChange={e => setBusinessType(e.target.value)}
                    className="bg-white/80 rounded-xl px-3 py-2 text-xs outline-none border border-blue-100 focus:border-blue-400 focus:ring-1 focus:ring-blue-300"
                  >
                    <option value="Micro Manufacturing">Micro Manufacturing</option>
                    <option value="Small Manufacturing">Small Manufacturing</option>
                    <option value="Retail Trade">Retail Trade</option>
                    <option value="Services">Services</option>
                    <option value="Agri and Allied">Agri and Allied</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Sector</span>
                  <select
                    value={sector}
                    onChange={e => setSector(e.target.value)}
                    className="bg-white/80 rounded-xl px-3 py-2 text-xs outline-none border border-blue-100 focus:border-blue-400 focus:ring-1 focus:ring-blue-300"
                  >
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Services">Services</option>
                    <option value="Trade">Trade</option>
                    <option value="Agriculture">Agriculture</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-medium">State</span>
                  <select
                    value={state}
                    onChange={e => setState(e.target.value)}
                    className="bg-white/80 rounded-xl px-3 py-2 text-xs outline-none border border-blue-100 focus:border-blue-400 focus:ring-1 focus:ring-blue-300"
                  >
                    <option value="Karnataka">Karnataka</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div ref={chatRef} className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={cn("max-w-[85%] p-4 rounded-3xl text-sm shadow-sm", m.role === 'user' ? "bg-blue-600 text-white rounded-br-none" : "bg-white text-slate-800 border rounded-bl-none")}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-white border-t flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSearch()} placeholder="Describe your business..." className="flex-1 bg-slate-100 p-3 rounded-2xl outline-none focus:ring-2 ring-blue-500 text-sm transition-all" />
              <button onClick={handleSearch} className="bg-blue-600 p-3 rounded-2xl text-white hover:bg-blue-700 transition-colors"><Send size={20} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};