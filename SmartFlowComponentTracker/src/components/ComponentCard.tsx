import { Component } from '@/types/component';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ComponentCardProps {
  component: Component;
  isSelected: boolean;
  onClick: () => void;
}

const ComponentCard = ({ component, isSelected, onClick }: ComponentCardProps) => {
  return (
    <Card
      className={cn(
        'p-4 cursor-pointer transition-all hover:shadow-md hover:bg-blue-50 group',
        isSelected 
          ? 'border-blue-500 shadow-lg bg-blue-100'
          : 'border-muted-gray/20'
      )}
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        {/* You can add an icon or initial here if desired */}
        <div className="flex-1">
          <h3 className="font-medium text-blue-800">{component.name}</h3>
          <p className="text-sm text-muted-gray">Material: {component.materialNumber}</p>
          <p className="text-xs text-gray-500">Stage: {component.currentStage}</p>
        </div>
        {/* You can add a status indicator here based on component stage */}
        <div
          className={cn(
            'px-2 py-1 rounded-full text-xs font-semibold',
            component.currentStage === 'Completed' && 'bg-green-100/50 text-green-800',
            component.currentStage === 'Initiation' && 'bg-gray-100/50 text-gray-800',
            component.currentStage === 'Quality Inspection' && 'bg-yellow-100/50 text-yellow-800'
            // Add more stage-based styling here
          )}
        >
          {component.currentStage}
        </div>
      </div>
    </Card>
  );
};

export default ComponentCard;
