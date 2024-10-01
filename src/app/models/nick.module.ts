export interface Nick {
  id: number; // Assuming this is a number; adjust based on your implementation
  name: string;
  status: string;
  description: string;
  dueDate: string; // Adjust type based on how you're handling dates
  priority: string;
  completed: boolean; // Add this property as needed
}