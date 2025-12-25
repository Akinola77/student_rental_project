export type UniversityRow = {
  id: number;
  name: string;
};

export type ListingRowPublic = {
  id: string;
  title: string;
  rent_monthly_eur: number;
  deposit_eur: number;
  bills_included: boolean;
  room_type: string;
  min_stay: string;
  available_from: string;
  landlord_verified: boolean;
  universities?: { name: string } | null;
};

export type ListingPhotoRow = {
  id: string;
  storage_path: string;
  sort_order: number;
};

export type ListingPrivateRow = {
  address: string;
};

export type EnquiryRow = {
  id: string;
  created_at: string;
  status: string;
  listing_id: string;
  student_id?: string;
  move_in_date?: string | null;
  length_of_stay?: string | null;
  message?: string;
  listings?: { id: string; title: string; landlord_id?: string } | null;
};

export type EnquiryMessageRow = {
  id: string;
  sender_role: string;
  message: string;
  created_at: string;
};

export type LandlordDocRow = {
  id: string;
  doc_type: string;
  storage_path: string;
  created_at: string;
};

export type ReportRow = {
  id: string;
  reason: string;
  details: string | null;
  status: string;
  created_at: string;
  listing_id: string;
  student_id: string;
  listings?: { id: string; title: string; landlord_id: string } | null;
};

export type AuditLogRow = {
  id: number;
  created_at: string;
  actor_id: string | null;
  action: string;
  entity_type: string;
  entity_id: string | null;
  metadata: unknown;
};

