"use client";

import { useAddressStore } from "@/hooks/use-address";
import { ValueNoneIcon } from "@radix-ui/react-icons";
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

export function AddressList() {
  const router = useRouter();
  const { address, deleteAddress } = useAddressStore();

  const emptyList = !address?.length;

  function handleNavigateToEdit(landNumber: string) {
    router.push(`/address/${landNumber}`);
  }

  function handleDeleteAddress(id: number) {
    deleteAddress(id);
  }

  return (
    <div className="h-[420px] space-y-3 overflow-y-scroll">
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
                  variant={item?.type === "factory" ? "default" : "secondary"}
                >
                  {item?.type}
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
          );
        })}
    </div>
  );
}
