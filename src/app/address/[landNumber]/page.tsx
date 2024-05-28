import { FormAddress } from "@/components/ui/address-form";
import { CardHeaderForm } from "@/components/ui/card-header-form";
import {
  ContentBlock,
  ContentBlockContent,
  ContentBlockHeader,
} from "@/components/ui/content-block";
import { Separator } from "@/components/ui/separator";

export default function Address() {
  return (
    <ContentBlock className="w-full">
      <ContentBlockHeader>
        <CardHeaderForm formType="update" />
      </ContentBlockHeader>
      <Separator />

      <ContentBlockContent>
        <FormAddress />
      </ContentBlockContent>
    </ContentBlock>
  );
}
