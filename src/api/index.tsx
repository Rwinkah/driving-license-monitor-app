import data from "./mockdata/drivers_data_final.json";
import { DriverData, Driver, Document } from "../types/drivers_data_interface";

export const DriversApi = (page = 1, limit = 10): Promise<DriverData[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data) {
        return reject("Error");
      }

      // Calculate the starting and ending indices for the requested page and limit
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      const driversData = data as DriverData[];

      // Slice the data to return only the entries for the current page
      // const paginatedData = driversData.slice(startIndex, endIndex);
      let slicedData: Driver[] = [];

      driversData.forEach((driver) => {
        slicedData = driver.drivers.slice(startIndex, endIndex);
      });

      const paginatedData = [{ drivers: slicedData }];

      resolve(paginatedData as DriverData[]);
    }, 1000);
  });
};

export const getDriversCount = (): number => {
  const driversData = data as DriverData[];
  let count = 0;

  driversData.forEach((driverData) => {
    count += driverData.drivers.length;
  });

  return count;
};

export const getDriversWithLicenses = (): number => {
  const driversData = data as DriverData[];
  let count = 0;

  driversData.forEach((driverData) => {
    const drivers = driverData.drivers;
    for (const driver of drivers) {
      if (hasValidLicense(driver)) {
        count++;
      }
    }
  });

  return count;
};

export const getDriversWithExpiringDocuments = (): number => {
  const driversData = data as DriverData[];
  let count = 0;

  driversData.forEach((driverData) => {
    const drivers = driverData.drivers;
    for (const driver of drivers) {
      for (const vehicle of driver.vehicles) {
        for (const document of vehicle.documents) {
          if (willExpireWithinSixMonths(document)) {
            count++;
            break; // If any document for a vehicle is expiring, count the person and exit the loop
          }
        }
      }
    }
  });

  return count;
};

// Helper function to check if a document will expire within the next 6 months
const willExpireWithinSixMonths = (document: Document): boolean => {
  if (document.expiresOn) {
    const expirationDate = new Date(document.expiresOn);
    const currentDate = new Date();

    // Calculate the date 6 months from now
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow.setMonth(currentDate.getMonth() + 6);

    return expirationDate <= sixMonthsFromNow;
  }

  return false; // Handle the case where 'expiresOn' is missing or invalid
};

// Helper function to check if a driver has a valid license
const hasValidLicense = (driver: Driver): boolean => {
  const license = driver.driverLicense;
  return (
    license &&
    license.status === "Permanent" && // You can adjust this condition as needed
    license.expiresOn >= getCurrentDate() // Assuming 'expiresOn' is a date string
  );
};

// Helper function to get the current date in a format that can be compared with 'expiresOn'
const getCurrentDate = (): string => {
  const currentDate = new Date();
  return currentDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
};
