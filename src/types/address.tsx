export interface Address {
  id?: string;
  customerName?: string;
  address?: string;
}

export interface AddressInput {
  customerName: string;
  address: string;
  mail: string;
  phone: string;
}
