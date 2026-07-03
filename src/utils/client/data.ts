import type { Varsel } from "@src/customTypes/Varsel.ts";
import dayjs from "dayjs";

export const formatData = (data: string) => {
  return dayjs(data).format("DD.MM.YYYY kl. HH.mm");
};

export const sortVarselList = (data: Varsel[]) => {
  return data.sort((a, b) => {
    return dayjs(b.forstBehandlet).diff(dayjs(a.forstBehandlet));
  });
};
