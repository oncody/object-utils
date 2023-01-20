import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import utc from 'dayjs/plugin/utc.js';

/** DayJS Plugins **/
dayjs.extend(utc);
dayjs.extend(objectSupport);
dayjs.extend(customParseFormat);

export default dayjs;
