import { useAddressStore } from "@/stores/address";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { SchemaFormType, formSchema } from "../schema";

export function useAddressForm() {
  const params = useParams<{ landNumber: string }>();
  const { findAddress, createOrUpdateAddress } = useAddressStore((state) => ({
    findAddress: state.findAddress,
    createOrUpdateAddress: state.createOrUpdateAddress,
  }));
  const foundAddress = findAddress(params.landNumber);

  const form = useForm<SchemaFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: foundAddress?.id,
      property: foundAddress?.property ?? undefined,
      fullname: foundAddress?.fullname ?? undefined,
      email: foundAddress?.email ?? undefined,
      landNumber: foundAddress?.landNumber ?? undefined,
    },
  });

  return {
    form,
    createOrUpdateAddress,
  };
}
