"use client";

import { useAddressStore } from "@/stores/address";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./input";
import { Search } from "lucide-react";

export function SearchInput() {
  const { searchAddress } = useAddressStore();

  const handleSearch = useDebouncedCallback((value: string) => {
    searchAddress(value);
  }, 400);

  return (
    <div className="relative ml-auto flex h-10 max-w-96 items-center gap-3 rounded-md border border-card bg-card px-3">
      <Input
        placeholder="Search the address here"
        className="absolute inset-0 bg-transparent pl-10"
        onChange={(event) => handleSearch(event.currentTarget.value)}
      />
      <Search size={16} className="text-foreground " />
    </div>
  );
}
