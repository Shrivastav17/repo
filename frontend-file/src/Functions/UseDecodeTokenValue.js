import {useJwt} from "react-jwt";

export default function useDecodeTokenValue(token){

    const {decodedToken, isExpired} = useJwt(token);
    return decodedToken;
}