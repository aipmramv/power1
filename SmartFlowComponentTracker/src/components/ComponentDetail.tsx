import { Component } from '@/types/component';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ComponentDetailProps {
  component: Component;
  className?: string;
}

const ComponentDetail = ({ component, className }: ComponentDetailProps) => {
  return (
    <Card className={cn("h-full overflow-y-auto", className)}>
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold">{component.name}</CardTitle>
        <p className="text-gray-500">Material Number: {component.materialNumber}</p>
        <div className="mt-2">
          <Badge
            className={cn(
              "px-3 py-1 text-sm",
              component.currentStage === 'Completed' && 'bg-green-500 text-white',
              component.currentStage === 'Initiation' && 'bg-gray-400 text-white',
              component.currentStage === 'Quality Inspection' && 'bg-yellow-500 text-white',
              component.currentStage === 'KPPAP Initiation' && 'bg-purple-500 text-white',
              component.currentStage === 'Procurement Execution' && 'bg-blue-500 text-white',
              component.currentStage === 'Component Delivery' && 'bg-indigo-500 text-white',
              component.currentStage === 'Cross-Functional Inputs' && 'bg-orange-500 text-white',
              component.currentStage === 'Solution Development' && 'bg-teal-500 text-white'
            )}
          >
            Current Stage: {component.currentStage}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          {/* Basic Information */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Revision</p>
                <p className="font-medium">{component.revision}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Quantity</p>
                <p className="font-medium">{component.quantity.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">New/Existing</p>
                <p className="font-medium">{component.isNew ? 'New' : 'Existing'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Volume Details</p>
                <p className="font-medium">{component.volumeDetails || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Sourcing and Supply */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Sourcing and Supply</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Make or Buy</p>
                <p className="font-medium">{component.makeOrBuy || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">In-house or Bought Out</p>
                <p className="font-medium">{component.inHouseOrBoughtOut || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Import/Local</p>
                <p className="font-medium">{component.importOrLocal || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Supplier ID</p>
                <p className="font-medium">{component.supplierId || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Plant ID</p>
                <p className="font-medium">{component.plantId || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Sign-off Requirements */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Sign-off Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-500">SIR Required</p>
                <p className="font-medium">{component.sirRequired ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">KPPAP Required</p>
                <p className="font-medium">{component.kppapRequired ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">PSW Sign-off Required</p>
                <p className="font-medium">{component.pswSignOffRequired ? 'Yes' : 'No'}</p>
              </div>
            </div>
          </div>

          {/* Status Updates */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Status Updates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">SIR Status</p>
                <p className="font-medium">{component.sirStatus}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">KPPAP Status</p>
                <p className="font-medium">{component.kppapStatus}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">PSW Sign-off Status</p>
                <p className="font-medium">{component.pswSignOffStatus}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Procurement Status</p>
                <p className="font-medium">{component.procurementStatus}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Quality Inspection Status</p>
                <p className="font-medium">{component.qualityInspectionStatus}</p>
              </div>
            </div>
          </div>

          {/* Notes and Timestamps */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Notes</p>
                <p className="font-medium whitespace-pre-wrap">{component.notes || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Created At</p>
                <p className="font-medium">{new Date(component.createdAt).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Modified At</p>
                <p className="font-medium">{new Date(component.updatedAt).toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Placeholder for Edit Button (will be enabled with backend) */}
          {/* <div className="mt-6 flex justify-end">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Edit Component
            </Button>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default ComponentDetail;
