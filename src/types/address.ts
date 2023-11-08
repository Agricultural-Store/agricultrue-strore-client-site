export interface Address {
  id: number;
  addressId: number;
  customerName?: string;
  address?: string;
  addressDetail?: string;
  phone?: string;
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
