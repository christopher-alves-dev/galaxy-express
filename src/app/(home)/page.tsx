import { AddressList } from "@/components/ui/address-list";
import { Button } from "@/components/ui/button";
import {
  ContentBlock,
  ContentBlockContent,
  ContentBlockHeader,
  ContentBlockTitle,
} from "@/components/ui/content-block";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Home() {
  return (
    <ContentBlock className="w-full">
      <ContentBlockHeader>
        <div className="flex items-start justify-between">
          <ContentBlockTitle>Address</ContentBlockTitle>
          <Link href="/address">
            <Button variant="outline">Add address</Button>
          </Link>
        </div>
      </ContentBlockHeader>
      <Separator />
      <ContentBlockContent>
        <div className="flex items-center justify-between gap-3">
          <Input placeholder="Search the address here" />
        </div>

        <div className="space-y-1.5">
          <Label>Address list</Label>
          <AddressList />
        </div>
      </ContentBlockContent>
    </ContentBlock>
  );
}
