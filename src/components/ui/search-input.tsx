"use client";

import { useAddressStore } from "@/stores/address";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./input";

export function SearchInput() {
  const { searchAddress } = useAddressStore();

  const handleSearch = useDebouncedCallback((value: string) => {
    searchAddress(value);
  }, 400);

  return (
    <div className="flex items-center justify-end gap-3">
      <Input
        placeholder="Search the address here"
        className="max-w-96"
        onChange={(event) => handleSearch(event.currentTarget.value)}
      />
    </div>
  );
}
