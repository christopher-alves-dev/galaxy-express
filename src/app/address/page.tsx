import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Address() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-between p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-end border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-2 pr-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <ModeToggle />
        </p>
      </div>

      <Card className="w-full bg-card">
        <CardHeader className="flex flex-row items-center gap-2.5 space-y-0">
          <Link href="/">
            <Button variant="secondary" size="icon">
              <ChevronLeftIcon />
            </Button>
          </Link>
          <CardTitle className="text-xl">New shipping address</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-3 p-6">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Address Label" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="Full Name" />
          <Input placeholder="Mobile Phone" />
          <Input placeholder="Lote Number" />
        </CardContent>

        <CardFooter className="justify-end gap-3">
          <Button variant="secondary">Cancel</Button>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
