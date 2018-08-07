/**
 * Used for general proporses of the application
 */
export interface User {
  key?: string;
  email: string;
  username: string;
  password?: string;
  country?: string;
  state?: string;
  level?: number;
  experience?: number;
  picture_url?: string;
  verified_email?: boolean;
}

/**
 * Used in Authentication methods
 */
export interface AuthUser {
  id: string;
  link?: string;
  locale?: string;
  name?: string;
  email: string;
  verified_email?: boolean;
}
