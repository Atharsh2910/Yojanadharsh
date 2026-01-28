import React from 'react';
import { Filter, X } from 'lucide-react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

interface FilterProps {
  onApply: (filters: any) => void;
}

const FilterPanel: React.FC<FilterProps> = ({ onApply }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 sticky top-24">
      <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Filter size={18} /> Search Filters
      </h3>
      <div className="space-y-5">
        <Select label="State" options={[{value: 'tn', label: 'Tamil Nadu'}]} />
        <Select label="Sector" options={[{value: 'mfg', label: 'Manufacturing'}]} />
        <Select label="Eligibility" options={[{value: 'women', label: 'Women Owned'}]} />
        <Button variant="default" fullWidth onClick={() => onApply({})}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterPanel;