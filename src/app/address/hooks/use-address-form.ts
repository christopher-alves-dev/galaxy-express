import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SchemaFormType, formSchema } from "../schema";
import { useAddressStore } from "@/hooks/use-address";
import { useParams } from "next/navigation";

export function useAddressForm() {
  const params = useParams<{ landNumber: string }>();
  const { findAddress, createOrUpdateAddress } = useAddressStore();
  const foundAddress = findAddress(params.landNumber);

  const form = useForm<SchemaFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: foundAddress?.type ?? "",
      fullname: foundAddress?.fullname ?? "",
      email: foundAddress?.email ?? "",
      landNumber: foundAddress?.landNumber ?? "",
    },
  });

  return {
    form,
    createOrUpdateAddress,
  };
}
