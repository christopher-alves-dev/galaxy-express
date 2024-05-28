"use client";

import { useAddressStore } from "@/hooks/use-address";
import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

export function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const { searchAddress } = useAddressStore();

  return (
    <div className="flex items-center justify-end gap-3">
      <Input
        placeholder="Search the address here"
        className="max-w-96"
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      />

      <Button onClick={() => searchAddress(searchValue)}>Search</Button>
    </div>
  );
}
