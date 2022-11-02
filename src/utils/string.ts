export const slice = (val: string | undefined, max: number, appendix = ' ...') : string => {
    return (val && val.length > max) ? val.slice(0, max)+ appendix: val+"";
} 