export interface Site {
  id: string;
  userId: string;
  siteName: string;
}

export interface Password {
  id: string;
  siteId: string;
  password: string;
}