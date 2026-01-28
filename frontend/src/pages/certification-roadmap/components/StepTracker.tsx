import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

interface Step {
  title: string;
  desc: string;
  status: 'completed' | 'current' | 'upcoming';
}

const StepTracker: React.FC<{ steps: Step[] }> = ({ steps }) => {
  return (
    <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
      {steps.map((step, idx) => (
        <div key={idx} className="relative pl-12">
          <div className={`absolute left-0 p-1 rounded-full z-10 bg-white border-2 ${
            step.status === 'completed' ? 'border-emerald-500 text-emerald-500' : 'border-slate-300 text-slate-400'
          }`}>
            {step.status === 'completed' ? <CheckCircle size={20} /> : <Circle size={20} />}
          </div>
          <h4 className={`font-bold ${step.status === 'upcoming' ? 'text-slate-400' : 'text-slate-900'}`}>
            {step.title}
          </h4>
          <p className="text-sm text-slate-500">{step.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default StepTracker;