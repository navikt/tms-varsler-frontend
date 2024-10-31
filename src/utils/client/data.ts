import dayjs from "dayjs";
const formatData = (data: string) => {
    return dayjs(data).format('DD.MM.YYYY kl. HH.mm');
}

export default formatData;