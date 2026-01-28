import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const businessTypes = [
    { value: 'msme', label: 'MSME' },
    { value: 'artisan', label: 'Skilled Artisan' },
    { value: 'shg', label: 'Community Group (SHG)' }
  ];

  return (
    <form className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
      <h2 className="text-xl font-bold text-slate-900">Create Account</h2>
      <div className="space-y-4">
        <Input label="Full Name" placeholder="Atharsh Su" required />
        <Input label="Business Name" placeholder="Handicrafts Collective" required />
        <Select label="Entity Type" options={businessTypes} required />
        <Input label="Password" type="password" required />
        <Checkbox label="I agree to Terms & Conditions" required />
      </div>
      <Button variant="default" fullWidth onClick={() => navigate('/home-dashboard')}>
        Complete Registration
      </Button>
    </form>
  );
};

export default RegistrationForm;