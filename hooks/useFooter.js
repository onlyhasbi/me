
import { headerList } from "@/model/header.model";
import { useRouter } from "next/router";

export const useFooter = () => {
    const path = useRouter().pathname;
    return !headerList.filter(item => item.path !== '/').map(item => `/${item.path}`).includes(path)
}
