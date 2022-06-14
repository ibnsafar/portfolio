import {NextPage} from "next";
import {useRouter} from "next/router";

const Main: NextPage = () => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <>
            <h1>Main {id}</h1>
        </>
    )
}
export default Main;