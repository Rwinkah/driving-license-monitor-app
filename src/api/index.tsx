import data from "./mockdata/drivers_data_final.json";
import { Driver, DriverData } from "../types/drivers_data_interface";

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
