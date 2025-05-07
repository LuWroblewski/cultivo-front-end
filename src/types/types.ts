export interface Crop {
  id: string;
  number: number;
  bed_column: string;
  plant_name: string;
  origin_id: number;
  source_crop_id: string | null;
  production_cycle_grams: number | null;
  notes: string | null;
  created_at: Date;
  updated_at: Date;
}

export interface ApiResponse {
  status: number;
  message: string;
  data: Crop[];
}
