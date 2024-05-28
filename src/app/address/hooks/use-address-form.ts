import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SchemaFormType, formSchema } from "../schema";

export function useAddressForm() {
  const form = useForm<SchemaFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      landNumber: "",
    },
  });

  return {
    form,
  };
}
