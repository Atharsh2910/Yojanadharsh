import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, UserPlus, Shield, Award, AlertCircle, Info } from 'lucide-react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate Auth logic for Atharsh [cite: 6]
    setTimeout(() => {
      if (formData.email === 'atharsh@yojanadharsh.in') {
        navigate('/home-dashboard');
      } else {
        setError("Invalid credentials for this demo.");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-slate-100">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
        <p className="text-slate-500 text-sm">Sign in to access business support</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          label="Email Address" 
          type="email" 
          required 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <Input 
          label="Password" 
          type="password" 
          required 
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <Button variant="default" fullWidth loading={isLoading} iconName="LogIn">
          Sign In
        </Button>
      </form>
      
      <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
        <Button variant="outline" fullWidth onClick={() => navigate('/register')} iconName="UserPlus">
          Create New Account
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;