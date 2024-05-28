import { SchemaFormType } from "@/app/address/schema";
import { create } from "zustand";

type AddressState = {
  address: SchemaFormType[];
};

type AddressActions = {
  updateAddress: (address: SchemaFormType) => void;
  deleteAddress: (address: SchemaFormType) => void;
  resetAddress: () => void;
};

type AddressStore = AddressState & AddressActions;

const initialState: AddressState = {
  address: [
    {
      property: "factory",
      fullname: "Hato Jedu",
      email: "hatojedu@maif.mc",
      landNumber: "0034",
    },
    {
      property: "storage",
      fullname: "Hogju Vpis",
      email: "hogjuvpis@ose.nc",
      landNumber: "1434",
    },
    {
      property: "storage",
      fullname: "Hiwet Bimlimoh",
      email: "hiwet@bimlimoh.mh",
      landNumber: "5673",
    },
  ],
};

export const useAddressStore = create<AddressStore>()((set) => ({
  ...initialState,
  updateAddress: (address) =>
    set((state) => {
      const updated = state.address.map((item) => {
        if (item.landNumber === address.landNumber) {
          return address;
        }

        return item;
      });

      return {
        ...state,
        address: updated,
      };
    }),
  deleteAddress: (address) =>
    set((state) => {
      const addressFiltered = state.address.filter(
        (item) => item.landNumber !== address.landNumber,
      );

      return {
        ...state,
        address: addressFiltered,
      };
    }),
  resetAddress: () => set(initialState),
}));
