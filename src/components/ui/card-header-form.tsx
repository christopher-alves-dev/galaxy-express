import Link from "next/link";

import { CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Button } from "./button";
import { ContentBlockTitle } from "./content-block";

type Props = {
  formType: "create" | "update";
};

export function CardHeaderForm({ formType }: Props) {
  const titleComplement = formType === "create" ? "Create" : "Update";

  return (
    <CardHeader className="flex flex-row items-center gap-2.5 space-y-0 p-0 md:gap-4">
      <Link href="/">
        <Button variant="outline" size="icon">
          <ChevronLeftIcon />
        </Button>
      </Link>
      <ContentBlockTitle>{titleComplement} shipping address</ContentBlockTitle>
    </CardHeader>
  );
}
