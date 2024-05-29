import { SchemaFormType } from "@/app/address/schema";
import { create } from "zustand";

export type AddressDataWithId = SchemaFormType & { id: number };

type CreateOrUpdateAddressData = SchemaFormType & Partial<{ id: number }>;

type AddressState = {
  address: AddressDataWithId[];
  searchList: AddressDataWithId[];
  searchParam: string;
};

type AddressActions = {
  findAddress: (landNumber: string) => AddressDataWithId | undefined;
  createOrUpdateAddress: (address: CreateOrUpdateAddressData) => void;
  updateAddressList: (list: AddressDataWithId[]) => void;
  deleteAddress: (addressId: number) => void;
  searchAddress: (searchParam: string) => void;
};

type AddressStore = AddressState & AddressActions;

const initialState: AddressState = {
  address: [
    {
      id: 1,
      property: "factory",
      fullname: "Hato Jedu",
      email: "hatojedu@maif.mc",
      landNumber: "0034",
    },
    {
      id: 2,
      property: "storage",
      fullname: "Hogju Vpis",
      email: "hogjuvpis@ose.nc",
      landNumber: "1434",
    },
    {
      id: 3,
      property: "storage",
      fullname: "Hiwet Bimlimoh",
      email: "hiwet@bimlimoh.mh",
      landNumber: "5673",
    },
  ],
  searchList: [],
  searchParam: "",
};

export const useAddressStore = create<AddressStore>()((set, get) => ({
  searchParam: initialState.searchParam,
  searchList: initialState.searchList.sort((a, b) => b.id - a.id),
  address: initialState.address.sort((a, b) => b.id - a.id),
  findAddress: (landNumber) =>
    get().address.find((item) => item.landNumber === landNumber),
  updateAddressList: (list) => set({ address: list }),
  createOrUpdateAddress: (address) =>
    set((state) => {
      const isToCreate = !address?.id;

      const completeLandNumberLength =
        address.landNumber.length !== 4
          ? address.landNumber.padStart(4, "0")
          : address.landNumber;

      if (isToCreate) {
        const newAddress = {
          ...address,
          landNumber: completeLandNumberLength,
          id: state.address.length + 1,
        };

        return {
          ...state,
          address: [newAddress, ...state.address],
        };
      }

      return {
        ...state,
        address: state.address.map((item) => {
          if (item.id === address.id) {
            return {
              ...address,
              landNumber: completeLandNumberLength,
              id: address.id,
            };
          }

          return item;
        }),
      };
    }),
  deleteAddress: (addressId) =>
    set((state) => {
      const searchListFiltered = state.searchList.filter(
        (item) => item.id !== addressId,
      );
      const mainListFiltered = state.address.filter(
        (item) => item.id !== addressId,
      );

      return {
        ...state,
        address: mainListFiltered,
        searchList: searchListFiltered,
      };
    }),
  searchAddress: (searchParam) =>
    set((state) => {
      const lowerCaseSearchTerm = searchParam.toLowerCase();
      const filtered = state.address.filter((address) => {
        return (
          address.property.toLowerCase().includes(lowerCaseSearchTerm) ||
          address.fullname.toLowerCase().includes(lowerCaseSearchTerm) ||
          address.email.toLowerCase().includes(lowerCaseSearchTerm) ||
          address.landNumber.includes(lowerCaseSearchTerm)
        );
      });

      return {
        ...state,
        searchParam,
        searchList: filtered,
      };
    }),
}));
