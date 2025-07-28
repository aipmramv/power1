import React, { useState } from 'react';
import { Component } from '@/types/component';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const NewComponentPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Partial<Component>>({
    name: '',
    materialNumber: '',
    revision: 'A',
    quantity: 1,
    isNew: true,
    volumeDetails: '',
    currentStage: 'Initiation', // Default stage for new components
    makeOrBuy: '',
    inHouseOrBoughtOut: '',
    importOrLocal: '',
    supplierId: '',
    plantId: '',
    sirRequired: false,
    kppapRequired: false,
    pswSignOffRequired: false,
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    // For checkboxes, use e.target.checked. For other inputs, use e.target.value
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({
      ...prev,
      [id]: newValue,
    }));
  };

  const handleSelectChange = (id: keyof Component, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend API
    console.log('New Component Data:', formData);
    alert('Component Submitted (check console for data)!');
    // For now, let's navigate back to the dashboard or clear the form
    navigate('/'); // Navigate back to dashboard
    setFormData({ // Clear form after submission
        name: '',
        materialNumber: '',
        revision: 'A',
        quantity: 1,
        isNew: true,
        volumeDetails: '',
        currentStage: 'Initiation',
        makeOrBuy: '',
        inHouseOrBoughtOut: '',
        importOrLocal: '',
        supplierId: '',
        plantId: '',
        sirRequired: false,
        kppapRequired: false,
        pswSignOffRequired: false,
        notes: '',
    });
  };

  const stages = [
    'Initiation',
    'Solution Development',
    'Cross-Functional Inputs',
    'Procurement Execution',
    'Component Delivery',
    'Quality Inspection',
    'KPPAP Initiation',
    'Completed',
  ];

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-blue-800">
            Create New Component
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Component Name/Description</Label>
                <Input
                  id="name"
                  value={formData.name || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="materialNumber">Material Number</Label>
                <Input
                  id="materialNumber"
                  value={formData.materialNumber || ''}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="revision">Revision</Label>
                <Input
                  id="revision"
                  value={formData.revision || ''}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={formData.quantity || 0}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label>New/Existing</Label>
                <RadioGroup
                  value={formData.isNew ? 'new' : 'existing'}
                  onValueChange={(value) => handleSelectChange('isNew', value === 'new')}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="new" id="new" />
                    <Label htmlFor="new">New</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="existing" id="existing" />
                    <Label htmlFor="existing">Existing</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="volumeDetails">Volume Details</Label>
                <Input
                  id="volumeDetails"
                  value={formData.volumeDetails || ''}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Sourcing and Supply */}
            <h3 className="text-xl font-semibold mt-8 mb-4">Sourcing and Supply</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="makeOrBuy">Make or Buy</Label>
                <Select
                  value={formData.makeOrBuy || ''}
                  onValueChange={(value) => handleSelectChange('makeOrBuy', value as Component['makeOrBuy'])}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Make">Make</SelectItem>
                    <SelectItem value="Buy">Buy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="inHouseOrBoughtOut">In-house or Bought Out</Label>
                <Select
                  value={formData.inHouseOrBoughtOut || ''}
                  onValueChange={(value) => handleSelectChange('inHouseOrBoughtOut', value as Component['inHouseOrBoughtOut'])}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="In-house">In-house</SelectItem>
                    <SelectItem value="Bought Out">Bought Out</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="importOrLocal">Import/Local</Label>
                <Select
                  value={formData.importOrLocal || ''}
                  onValueChange={(value) => handleSelectChange('importOrLocal', value as Component['importOrLocal'])}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Import">Import</SelectItem>
                    <SelectItem value="Local">Local</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="supplierId">Supplier ID</Label>
                <Input
                  id="supplierId"
                  value={formData.supplierId || ''}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="plantId">Plant ID</Label>
                <Input
                  id="plantId"
                  value={formData.plantId || ''}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Sign-off Requirements */}
            <h3 className="text-xl font-semibold mt-8 mb-4">Sign-off Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="sirRequired"
                  checked={formData.sirRequired || false}
                  onCheckedChange={(checked) => handleSelectChange('sirRequired', checked as boolean)}
                />
                <Label htmlFor="sirRequired">SIR Required</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="kppapRequired"
                  checked={formData.kppapRequired || false}
                  onCheckedChange={(checked) => handleSelectChange('kppapRequired', checked as boolean)}
                />
                <Label htmlFor="kppapRequired">KPPAP Required</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="pswSignOffRequired"
                  checked={formData.pswSignOffRequired || false}
                  onCheckedChange={(checked) => handleSelectChange('pswSignOffRequired', checked as boolean)}
                />
                <Label htmlFor="pswSignOffRequired">PSW Sign-off Required</Label>
              </div>
            </div>

            {/* Notes */}
            <h3 className="text-xl font-semibold mt-8 mb-4">Additional Notes</h3>
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={formData.notes || ''}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <div className="flex justify-end space-x-4 mt-8">
              <Button type="button" variant="outline" onClick={() => navigate('/')}>
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Create Component
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewComponentPage;
