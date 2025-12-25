export type Role = "student" | "landlord" | "admin";

export type VerificationStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "suspended";

export type AccountStatus = "active" | "suspended" | "banned";

export type ListingStatus =
  | "draft"
  | "pending_review"
  | "active"
  | "under_offer"
  | "let"
  | "deactivated";

export type RoomType = "single_room" | "shared_room" | "entire_property";

export type MinStay = "short_term" | "semester" | "academic_year";

export type ReportReason =
  | "asked_for_money_upfront"
  | "suspicious_communication"
  | "fake_photos"
  | "too_good_to_be_true"
  | "other";

export type Profile = {
  id: string;
  role: Role;
  email: string;
  full_name: string | null;
  university_id: number | null;
  budget_min: number | null;
  budget_max: number | null;
  move_in_date: string | null;
  phone: string | null;
  verification_status: VerificationStatus | null;
  verified_at: string | null;
  account_status: AccountStatus;
  created_at: string;
  updated_at: string;
};

