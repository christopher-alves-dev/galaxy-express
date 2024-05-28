"use client";

import { useAddressStore } from "@/hooks/use-address";
import { ValueNoneIcon } from "@radix-ui/react-icons";
import { Badge } from "./badge";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

export function AddressList() {
  const { address } = useAddressStore();

  const emptyList = !address?.length;

  function handleNavigateToEdit() {
    console.log("Edit Address");
  }

  function handleDeleteAddress() {
    console.log("Delete Address");
  }

  return (
    <div className="h-[450px] space-y-3 overflow-y-scroll">
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
      {!emptyList &&
        address?.map((item) => {
          return (
            <Card key={item.landNumber}>
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
                <Button onClick={handleNavigateToEdit}>Edit Address</Button>
                <Button onClick={handleDeleteAddress} variant="destructive">
                  Delete Address
                </Button>
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
}
