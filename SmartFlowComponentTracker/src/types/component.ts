export interface Component {
  id: string; // Unique identifier
  name: string; // Component Name/Description
  materialNumber: string;
  revision: string;
  quantity: number;
  isNew: boolean; // New/Existing
  volumeDetails: string;
  currentStage:
    | "Initiation"
    | "Solution Development"
    | "Cross-Functional Inputs"
    | "Procurement Execution"
    | "Component Delivery"
    | "Quality Inspection"
    | "KPPAP Initiation"
    | "Completed";
  makeOrBuy: "Make" | "Buy" | "";
  inHouseOrBoughtOut: "In-house" | "Bought Out" | "";
  importOrLocal: "Import" | "Local" | "";
  supplierId: string; // Or linked to a Supplier interface later
  plantId: string; // Or linked to a Plant interface later
  sirRequired: boolean;
  kppapRequired: boolean;
  pswSignOffRequired: boolean;
  sirStatus: "Not Started" | "In Progress" | "Approved" | "Rejected";
  kppapStatus: "Not Started" | "In Progress" | "Approved" | "Rejected";
  pswSignOffStatus: "Not Started" | "In Progress" | "Approved" | "Rejected";
  procurementStatus: "Not Started" | "PO Created" | "Delivered";
  qualityInspectionStatus: "Not Started" | "In Progress" | "Approved" | "Rejected";
  notes: string;
  // Attachments (can be handled separately)
  createdAt: string;
  updatedAt: string;
}