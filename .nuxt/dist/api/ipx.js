import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"C:/Users/houid/McnWork/LandingPageProject/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
