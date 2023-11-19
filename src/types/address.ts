export interface Address {
  id: number;
  addressId: number;
  customerName?: string;
  address?: string;
  addressDetail?: string;
  phone?: string;
  ward?: string;
  state?: string;
  city?: string;
  mail?: string;
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

export type AddressUpdateInput = Partial<AddressCreateInput>;
