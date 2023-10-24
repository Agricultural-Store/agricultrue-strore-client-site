export interface Address {
  id: number;
  customerName?: string;
  address?: string;
}

export interface AddressCreateInput {
  customerName: string;
  address: string;
  mail: string;
  phone: string;
  city?: string;
  district?: string;
  commune?: string;
}
