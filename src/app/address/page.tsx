import { FormAddress } from "@/components/ui/address-form";
import { CardHeaderForm } from "@/components/ui/card-header-form";
import {
  ContentBlock,
  ContentBlockContent,
  ContentBlockHeader,
} from "@/components/ui/content-block";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Address() {
  return (
    <ContentBlock className="w-full">
      <ContentBlockHeader>
        <CardHeaderForm formType="create" />
      </ContentBlockHeader>
      <Separator />

      <ContentBlockContent>
        <FormAddress />
      </ContentBlockContent>
    </ContentBlock>
  );
}
