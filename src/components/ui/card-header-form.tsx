import Link from "next/link";

import { CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

type Props = {
  formType: "create" | "update";
};

export function CardHeaderForm({ formType }: Props) {
  const titleComplement = formType === "create" ? "Create" : "Update";

  return (
    <CardHeader className="flex flex-row items-center gap-2.5 space-y-0 p-0">
      <Link href="/">
        <Button variant="secondary" size="icon">
          <ChevronLeftIcon />
        </Button>
      </Link>
      <CardTitle className="text-xl">
        {titleComplement} shipping address
      </CardTitle>
    </CardHeader>
  );
}
