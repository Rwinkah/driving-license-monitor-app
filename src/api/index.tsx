import driversData from "./mockdata/drivers_data_final.json";
import { DriverData } from "../types/drivers_data_interface";

export const DriversApi = (): Promise<DriverData[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return driversData
        ? resolve(driversData as DriverData[])
        : reject("Error");
    }, 1000);
  });
};
