import { AddressList } from "@/components/ui/address-list";
import { Button } from "@/components/ui/button";
import {
  ContentBlock,
  ContentBlockContent,
  ContentBlockHeader,
  ContentBlockTitle,
} from "@/components/ui/content-block";
import { SearchInput } from "@/components/ui/search-input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <ContentBlock className="w-full">
      <ContentBlockHeader>
        <div className="flex items-center justify-between">
          <ContentBlockTitle>Address</ContentBlockTitle>
          <Link href="/address">
            <Button variant="outline">Add address</Button>
          </Link>
        </div>
      </ContentBlockHeader>
      <Separator />
      <ContentBlockContent>
        <SearchInput />

        <AddressList />
      </ContentBlockContent>
    </ContentBlock>
  );
}
