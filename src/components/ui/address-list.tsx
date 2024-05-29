"use client";

import { useAddressStore } from "@/stores/address";
import { ValueNoneIcon } from "@radix-ui/react-icons";
import { SearchX } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "./badge";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { ConfirmDelete } from "./confirm-delete";
import { Label } from "./label";

export function AddressList() {
  const router = useRouter();
  const { address, searchList, searchParam, deleteAddress } = useAddressStore();

  const emptyList = !address?.length;
  const showFilteredList = !!searchParam;
  const emptySearchList = showFilteredList && !searchList?.length;
  const showAllAddress = !showFilteredList && !emptyList;

  function handleNavigateToEdit(landNumber: string) {
    router.push(`/address/${landNumber}`);
  }

  function handleDeleteAddress(id: number) {
    deleteAddress(id);
  }

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <Label>Address list</Label>

        <Badge variant="destructive">
          {showFilteredList ? searchList.length : address.length}
        </Badge>
      </div>
      <div className="grid h-[430px] grid-cols-1 justify-center gap-3 overflow-y-scroll md:grid-cols-2 md:gap-4">
        {emptyList && (
          <div className="flex h-full flex-col items-center justify-center gap-10">
            <ValueNoneIcon className="h-20 w-20 text-muted-foreground" />

            <div className="flex flex-col gap-2 text-center">
              <p className="text-lg text-muted-foreground">
                You don&apos;t have any address yet.
              </p>
              <p className="text-sm text-muted-foreground">
                Click on the button above to add a new address.
              </p>
            </div>
          </div>
        )}

        {showFilteredList &&
          searchList.map((item) => (
            <Card key={item.landNumber} className="h-fit">
              <CardHeader className="space-y-3">
                <Badge
                  className="w-fit"
                  variant={
                    item?.property === "factory" ? "default" : "secondary"
                  }
                >
                  {item?.property}
                </Badge>

                <CardTitle>{item?.fullname}</CardTitle>

                <div className="flex flex-col gap-1">
                  <CardDescription>{item?.email}</CardDescription>
                  <CardDescription>Lote {item?.landNumber}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex gap-3">
                <Button onClick={() => handleNavigateToEdit(item.landNumber)}>
                  Edit Address
                </Button>

                <ConfirmDelete onConfirm={() => handleDeleteAddress(item.id)} />
              </CardContent>
            </Card>
          ))}

        {emptySearchList && (
          <div className="flex h-full flex-col items-center justify-center gap-10">
            <SearchX size={80} className="text-muted-foreground" />

            <div className="flex flex-col gap-2 text-center">
              <p className="text-lg text-muted-foreground">
                No search found for &apos;{searchParam}&apos;
              </p>
            </div>
          </div>
        )}

        {showAllAddress &&
          address.map((item) => (
            <Card key={item.landNumber} className="h-fit">
              <CardHeader className="space-y-3">
                <Badge
                  className="w-fit"
                  variant={
                    item?.property === "factory" ? "default" : "secondary"
                  }
                >
                  {item?.property}
                </Badge>

                <CardTitle>{item?.fullname}</CardTitle>

                <div className="flex flex-col gap-1">
                  <CardDescription>{item?.email}</CardDescription>
                  <CardDescription>Lote {item?.landNumber}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex gap-3">
                <Button onClick={() => handleNavigateToEdit(item.landNumber)}>
                  Edit Address
                </Button>

                <ConfirmDelete onConfirm={() => handleDeleteAddress(item.id)} />
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
