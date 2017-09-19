import { ISvg } from 'app/interfaces/svg';

export interface ITooltip
{
    id?      : string;
    text     : string;
    content  : any;

    type?    : string;
    cssClass?: string;

    svgPath? : ISvg[];
}
