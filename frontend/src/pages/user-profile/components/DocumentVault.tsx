import React from 'react';
import { FileText, Upload, Eye, Download } from 'lucide-react';
import Button from '../../../components/ui/Button';

const DocumentVault: React.FC = () => {
  const docs = [
    { name: "Business License", status: "Verified", date: "Jan 20, 2026" },
    { name: "PAN Card", status: "Pending", date: "Jan 25, 2026" }
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-slate-900">Document Vault</h3>
        <Button variant="default" size="sm" iconName="Upload">Add New</Button>
      </div>
      <div className="grid gap-4">
        {docs.map((doc, i) => (
          <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><FileText /></div>
              <div>
                <p className="font-bold text-slate-900">{doc.name}</p>
                <p className="text-xs text-slate-500">Uploaded on {doc.date}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon"><Eye size={18}/></Button>
              <Button variant="ghost" size="icon"><Download size={18}/></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentVault;