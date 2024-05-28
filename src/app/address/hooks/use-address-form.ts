import { useAddressStore } from "@/hooks/use-address";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { SchemaFormType, formSchema } from "../schema";

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
