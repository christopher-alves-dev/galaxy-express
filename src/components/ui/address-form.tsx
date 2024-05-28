"use client";

import { SchemaFormType } from "@/app/address/schema";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { useAddressForm } from "@/app/address/hooks/use-address-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./button";
import { CardHeaderForm } from "./card-header-form";
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Separator } from "./separator";

export function FormAddress() {
  const { form } = useAddressForm();

  function onSubmit(values: SchemaFormType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="bg-card">
          <CardHeaderForm formType="create" />

          <Separator />
          <CardContent className="space-y-3 p-4">
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

            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="landNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Land number</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter className="justify-end gap-3">
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
