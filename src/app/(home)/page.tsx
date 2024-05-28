import { AddressList } from "@/components/ui/address-list";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ContentBlock,
  ContentBlockContent,
  ContentBlockHeader,
  ContentBlockTitle,
} from "@/components/ui/content-block";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <ContentBlock className="w-full bg-card">
      <ContentBlockHeader>
        <ContentBlockTitle>Address</ContentBlockTitle>
      </ContentBlockHeader>
      <Separator />
      <ContentBlockContent>
        <div className="flex items-center justify-between gap-3">
          <Input placeholder="Search the address here" />

          <Link href="/address">
            <Button variant="ghost">Add address</Button>
          </Link>
        </div>

        <div className="space-y-1.5">
          <Label>Address list</Label>
          <AddressList />
        </div>
      </ContentBlockContent>
    </ContentBlock>
  );
}
