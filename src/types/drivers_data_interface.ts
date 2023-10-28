export interface DriverData {
  drivers: Driver[];
}

export interface Driver {
  id: string;
  fullName: string;
  dateOfBirth: string;
  gender: string;
  nationalIdentificationNumber: string;
  phoneNumber: string;
  emailAddress: string;
  driverLicense: License;
  vehicles: Vehicle[];
}

export interface License {
  name: string;
  documentNumber: string;
  status: string;
  state: string;
  dateOfFirstIssue: string;
  issuedOn: string;
  expiresOn: string;
}

export interface Vehicle {
  id: string;
  plateNumber: string;
  class: string;
  documents: Document[];
}

export interface Document {
  id: string;
  documentName: string;
  documentNumber: string;
  status: string;
  state: string;
  dateOfFirstIssue: string;
  issuedOn: string;
  expiresOn: string;
}
