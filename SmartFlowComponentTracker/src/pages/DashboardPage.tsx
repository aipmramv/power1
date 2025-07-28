import React, { useState } from 'react';
import { Component } from '@/types/component';
import ComponentCard from '@/components/ComponentCard';
import ComponentDetail from '@/components/ComponentDetail';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Mock Data for Components (replace with API calls later)
const MOCK_COMPONENTS: Component[] = [
  {
    id: 'comp-001',
    name: 'Engine Control Unit (ECU)',
    materialNumber: 'MAT-ECU-001',
    revision: 'A',
    quantity: 100,
    isNew: true,
    volumeDetails: 'High volume production',
    currentStage: 'Cross-Functional Inputs',
    makeOrBuy: 'Buy',
    inHouseOrBoughtOut: 'Bought Out',
    importOrLocal: 'Import',
    supplierId: 'SUP-BOSCH',
    plantId: 'PLANT-GER',
    sirRequired: true,
    kppapRequired: true,
    pswSignOffRequired: true,
    sirStatus: 'In Progress',
    kppapStatus: 'Not Started',
    pswSignOffStatus: 'Not Started',
    procurementStatus: 'Not Started',
    qualityInspectionStatus: 'Not Started',
    notes: 'Requires detailed discussion with Procurement and Quality for import regulations.',
    createdAt: '2023-01-15T10:00:00Z',
    updatedAt: '2023-01-20T14:30:00Z',
  },
  {
    id: 'comp-002',
    name: 'Custom Sensor Module',
    materialNumber: 'MAT-SENSOR-005',
    revision: 'B',
    quantity: 50,
    isNew: false,
    volumeDetails: 'Low volume, existing design',
    currentStage: 'Quality Inspection',
    makeOrBuy: 'Make',
    inHouseOrBoughtOut: 'In-house',
    importOrLocal: 'Local',
    supplierId: 'N/A',
    plantId: 'PLANT-US',
    sirRequired: false,
    kppapRequired: true,
    pswSignOffRequired: true,
    sirStatus: 'Not Started',
    kppapStatus: 'In Progress',
    pswSignOffStatus: 'Not Started',
    procurementStatus: 'Delivered',
    qualityInspectionStatus: 'In Progress',
    notes: 'Undergoing functional testing. KPPAP initiated.',
    createdAt: '2022-11-01T09:00:00Z',
    updatedAt: '2023-01-25T11:00:00Z',
  },
  {
    id: 'comp-003',
    name: 'Front Bumper Assembly',
    materialNumber: 'MAT-BUMPER-010',
    revision: 'C',
    quantity: 200,
    isNew: true,
    volumeDetails: 'High volume production, new supplier onboarding',
    currentStage: 'Procurement Execution',
    makeOrBuy: 'Buy',
    inHouseOrBoughtOut: 'Bought Out',
    importOrLocal: 'Local',
    supplierId: 'SUP-MAGNA',
    plantId: 'PLANT-MEX',
    sirRequired: true,
    kppapRequired: true,
    pswSignOffRequired: true,
    sirStatus: 'Approved',
    kppapStatus: 'Not Started',
    pswSignOffStatus: 'Not Started',
    procurementStatus: 'PO Created',
    qualityInspectionStatus: 'Not Started',
    notes: 'Purchase order issued. Awaiting delivery schedule.',
    createdAt: '2023-01-01T15:00:00Z',
    updatedAt: '2023-01-28T09:00:00Z',
  },
  {
    id: 'comp-004',
    name: 'Interior Trim Panel',
    materialNumber: 'MAT-TRIM-003',
    revision: 'A',
    quantity: 500,
    isNew: false,
    volumeDetails: 'Standard component, high volume',
    currentStage: 'Completed',
    makeOrBuy: 'Buy',
    inHouseOrBoughtOut: 'Bought Out',
    importOrLocal: 'Local',
    supplierId: 'SUP-JOHNSON',
    plantId: 'PLANT-US',
    sirRequired: false,
    kppapRequired: true,
    pswSignOffRequired: true,
    sirStatus: 'Not Started',
    kppapStatus: 'Approved',
    pswSignOffStatus: 'Approved',
    procurementStatus: 'Delivered',
    qualityInspectionStatus: 'Approved',
    notes: 'Component successfully integrated into production.',
    createdAt: '2022-09-01T10:00:00Z',
    updatedAt: '2022-12-15T16:00:00Z',
  },
  {
    id: 'comp-005',
    name: 'Battery Housing',
    materialNumber: 'MAT-BAT-002',
    revision: 'A',
    quantity: 80,
    isNew: true,
    volumeDetails: 'Medium volume, critical component',
    currentStage: 'Solution Development',
    makeOrBuy: 'Make',
    inHouseOrBoughtOut: 'In-house',
    importOrLocal: 'Local',
    supplierId: 'N/A',
    plantId: 'PLANT-GER',
    sirRequired: true,
    kppapRequired: true,
    pswSignOffRequired: true,
    sirStatus: 'Not Started',
    kppapStatus: 'Not Started',
    pswSignOffStatus: 'Not Started',
    procurementStatus: 'Not Started',
    qualityInspectionStatus: 'Not Started',
    notes: 'Initial design phase, awaiting material selection.',
    createdAt: '2023-02-01T11:00:00Z',
    updatedAt: '2023-02-05T10:00:00Z',
  },
];

const DashboardPage = () => {
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStage, setFilterStage] = useState<Component['currentStage'] | 'All'>('All');
  const navigate = useNavigate(); // Initialize useNavigate

  const filteredComponents = MOCK_COMPONENTS.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.materialNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStage = filterStage === 'All' || component.currentStage === filterStage;

    return matchesSearch && matchesStage;
  });

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
    <div className="flex h-full bg-gray-50">
      {/* Left Pane: Component List and Filters */}
      <div className="w-1/3 border-r bg-white p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6 text-blue-800">Component Tracker</h1>

        {/* Search and Filter */}
        <div className="mb-6 space-y-4">
          <Input
            placeholder="Search by name or material number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select value={filterStage} onValueChange={(value: Component['currentStage'] | 'All') => setFilterStage(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter by Stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Stages</SelectItem>
              {stages.map((stage) => (
                <SelectItem key={stage} value={stage}>
                  {stage}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* New Component Button */}
        <div className="mb-6">
          <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => navigate('/new')}>
            Create New Component
          </Button>
        </div>

        {/* Component List */}
        <div className="space-y-3">
          {filteredComponents.length > 0 ? (
            filteredComponents.map((component) => (
              <ComponentCard
                key={component.id}
                component={component}
                isSelected={selectedComponent?.id === component.id}
                onClick={() => setSelectedComponent(component)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-8">No components found.</p>
          )}
        </div>
      </div>

      {/* Right Pane: Component Details */}
      <div className="w-2/3 p-4 overflow-y-auto">
        {selectedComponent ? (
          <ComponentDetail component={selectedComponent} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a component to view details.
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
