"use client";

import { AddressDataWithId, useAddressStore } from "@/hooks/use-address";
import { Input } from "./input";
import { useState } from "react";
import { Button } from "./button";

export function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const { searchAddress } = useAddressStore();

  return (
    <div className="flex items-center gap-3 md:justify-end">
      <Input
        placeholder="Search the address here"
        className="max-w-96"
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      />

      <Button onClick={() => searchAddress(searchValue)}>Submit</Button>
    </div>
  );
}
