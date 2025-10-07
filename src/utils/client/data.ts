import dayjs from "dayjs";
import type { Varsel } from "../../custom-types/Varsel.ts";

export const formatData = (data: string) => {
  return dayjs(data).format("DD.MM.YYYY kl. HH.mm");
};

export const sortVarselList = (data: Varsel[]) => {
  return data.sort((a, b) => {
    return dayjs(b.forstBehandlet).diff(dayjs(a.forstBehandlet));
  });
};
