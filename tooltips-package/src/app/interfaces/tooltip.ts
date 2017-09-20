import { ISvg } from 'app/interfaces/svg';

export interface ITooltip
{
    id?       : string;
    text      : string;

    // Mutually exclusive: either use content (ie. string) or pass your component to act as your tooltip
    content?  : any;
    component?: any;

    type?     : string;
    cssClass? : string;

    svgPath?  : ISvg[];
}
