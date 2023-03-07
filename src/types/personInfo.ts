export interface PersonInfo {
  firstName?: string;
  lastName?: string;
  mobilePhone?: string;
  email?: string;
  street?: string;
  numberOfHouse?: string;
  numberOfFlat?: string;
  postCode?: string;
  city?: string;
  fullAddress?: string;
}

export enum ALLOWED_KEY {
  firstName,
  lastName,
  mobilePhone,
  email,
  street,
  numberOfHouse,
  numberOfFlat,
  postCode,
  city,
  fullAddress,
}
