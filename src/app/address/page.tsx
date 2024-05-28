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
    <main className="flex min-h-dvh flex-col items-center justify-between p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-end border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-2 pr-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <ModeToggle />
        </p>
      </div>

      <ContentBlock className="w-full">
        <ContentBlockHeader>
          <CardHeaderForm formType="create" />
        </ContentBlockHeader>
        <Separator />

        <ContentBlockContent>
          <FormAddress />
        </ContentBlockContent>
      </ContentBlock>
    </main>
  );
}
