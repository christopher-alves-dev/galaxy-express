import { SchemaFormType } from "@/app/address/schema";
import { create } from "zustand";

export type AddressDataWithId = SchemaFormType & { id: number };

type CreateOrUpdateAddressData = SchemaFormType & Partial<{ id: number }>;

type AddressState = {
  address: AddressDataWithId[];
  filteredAddress: AddressDataWithId[];
};

type AddressActions = {
  findAddress: (landNumber: string) => AddressDataWithId | undefined;
  createOrUpdateAddress: (address: CreateOrUpdateAddressData) => void;
  updateAddressList: (list: AddressDataWithId[]) => void;
  deleteAddress: (addressId: number) => void;
  searchAddress: (searchTerm: string) => void;
};

type AddressStore = AddressState & AddressActions;

const initialState: AddressState = {
  address: [
    {
      id: 1,
      type: "factory",
      fullname: "Hato Jedu",
      email: "hatojedu@maif.mc",
      landNumber: "0034",
    },
    {
      id: 2,
      type: "storage",
      fullname: "Hogju Vpis",
      email: "hogjuvpis@ose.nc",
      landNumber: "1434",
    },
    {
      id: 3,
      type: "storage",
      fullname: "Hiwet Bimlimoh",
      email: "hiwet@bimlimoh.mh",
      landNumber: "5673",
    },
  ],
  filteredAddress: [],
};

export const useAddressStore = create<AddressStore>()((set, get) => ({
  filteredAddress: initialState.filteredAddress.sort((a, b) => b.id - a.id),
  address: initialState.address.sort((a, b) => b.id - a.id),
  findAddress: (landNumber) =>
    get().address.find((item) => item.landNumber === landNumber),
  updateAddressList: (list) => set({ address: list }),
  createOrUpdateAddress: (address) =>
    set((state) => {
      const isToCreate = !address?.id;

      if (isToCreate) {
        const newAddress = {
          ...address,
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
              id: address.id,
            };
          }

          return item;
        }),
      };
    }),
  deleteAddress: (addressId) =>
    set((state) => {
      const addressFiltered = state.address.filter(
        (item) => item.id !== addressId,
      );

      return {
        ...state,
        address: addressFiltered,
      };
    }),
  searchAddress: (searchTerm) =>
    set((state) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const filtered = state.address.filter((address) => {
        return (
          address.type.toLowerCase().includes(lowerCaseSearchTerm) ||
          address.fullname.toLowerCase().includes(lowerCaseSearchTerm) ||
          address.email.toLowerCase().includes(lowerCaseSearchTerm) ||
          address.landNumber.includes(lowerCaseSearchTerm)
        );
      });

      //Se eu deletar um address e estiver na lista filtrada, não reflete na tela, pois só está deletando da lista principal
      // Se eu procurar por algo que não tem na lista filtrada, ele traz a lista principal
      return {
        ...state,
        filteredAddress: filtered,
      };
    }),
}));
