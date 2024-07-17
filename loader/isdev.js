const isDev = typeof(localStorage.getItem("dev"))!="undefined";
export default isDev;