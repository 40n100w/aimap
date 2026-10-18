// Keep this breakpoint in sync with mobile.css. Wide desktop windows keep the
// original interface, including when a touch-capable laptop is used.
export const MOBILE_QUERY = '(max-width:900px), (max-width:1100px) and (max-height:600px) and (pointer:coarse)';
export const isMobileLayout = () => matchMedia(MOBILE_QUERY).matches;
