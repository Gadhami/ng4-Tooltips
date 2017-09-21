import { Component, AfterViewInit, ElementRef, ViewChild, Input, HostListener } from '@angular/core';

import { ITooltip } from 'app/interfaces/tooltip';

import * as anime    from 'assets/js/anime.min';
import * as charming from 'assets/js/charming.min';

import * as config   from 'app/consts/animation-effects';

@Component({
    selector   : 'app-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls  : ['./tooltip.component.css']
})
export class TooltipComponent implements AfterViewInit
{
    @Input() tooltip     : ITooltip;

    private mouseTimeout : any;
    private isVisible    = false;

    @Input() showOnHover = false;

    @ViewChild('trigger')     trigger    : ElementRef;
    @ViewChild('triggerSpan') triggerSpan: ElementRef;
    @ViewChild('base')        base       : ElementRef;
    @ViewChild('deco')        deco       : ElementRef;
    @ViewChild('letters')     letters    : ElementRef;
    @ViewChild('svg')         svg        : ElementRef;
    @ViewChild('svgPath')     svgPath    : ElementRef;
    // @ViewChildren('svgPath')  svgPath    : QueryList<ElementRef>;

    @ViewChild('contentDiv')  contentDiv : ElementRef;

    // ========================================================================
    constructor()
    { }

    // ========================================================================
    ngAfterViewInit()
    {
        // if (this.svg)
        // {
        //     this.svgPath    = this.svg.nativeElement.childElementCount > 1 ?
        //                         Array.from(this.svg.nativeElement.querySelectorAll('path')) :
        //                         this.svg.nativeElement.querySelector('path');
        // }

        if (this.letters)  // if (this.tooltip.type === 'walda')
        {
            // Create spans for each letter
            charming(this.letters.nativeElement);

            // Redefine content
            this.contentDiv = this.letters;
        }
    }

    // ========================================================================
    animate(dir)
    {
        if (config.animationConfig[this.tooltip.type][dir].base)
        {
            anime.remove(this.base.nativeElement);
            const baseAnimOpts = {targets: this.base.nativeElement};
            anime(Object.assign(baseAnimOpts, config.animationConfig[this.tooltip.type][dir].base));
        }

        if (config.animationConfig[this.tooltip.type][dir].shape)
        {
            anime.remove(this.svg);
            const shapeAnimOpts = {targets: this.svg.nativeElement};
            anime(Object.assign(shapeAnimOpts, config.animationConfig[this.tooltip.type][dir].shape));
        }

        if (config.animationConfig[this.tooltip.type][dir].path)
        {
            anime.remove(this.svgPath.nativeElement);
            const shapeAnimOpts = {targets: this.svgPath.nativeElement};
            anime(Object.assign(shapeAnimOpts, config.animationConfig[this.tooltip.type][dir].path));
        }

        if (config.animationConfig[this.tooltip.type][dir].content)
        {
            anime.remove(this.contentDiv.nativeElement);
            const contentAnimOpts = {targets: this.contentDiv.nativeElement};
            anime(Object.assign(contentAnimOpts, config.animationConfig[this.tooltip.type][dir].content));
        }

        if (config.animationConfig[this.tooltip.type][dir].trigger)
        {
            anime.remove(this.triggerSpan.nativeElement);
            const triggerAnimOpts = {targets: this.triggerSpan.nativeElement};
            anime(Object.assign(triggerAnimOpts, config.animationConfig[this.tooltip.type][dir].trigger));
        }

        if (config.animationConfig[this.tooltip.type][dir].deco)
        {
            anime.remove(this.deco.nativeElement);
            const decoAnimOpts = {targets: this.deco.nativeElement};
            anime(Object.assign(decoAnimOpts, config.animationConfig[this.tooltip.type][dir].deco));
        }
    }

    // ========================================================================
    @HostListener('touchstart', ['$event'])
    onMouseEnter()
    {
        if (this.showOnHover)
        {
            this.showTooltip(false);
        }
    }

    // ========================================================================
    @HostListener('touchend', ['$event'])
    onMouseLeave()
    {
        if (this.showOnHover)
        {
            this.hideTooltip(false);
        }
    }

    // ========================================================================
    hideTooltip(isClick: boolean)
    {
        if (isClick === this.showOnHover)
        {
            return;
        }

        clearTimeout(this.mouseTimeout);
        if (this.isVisible)
        {
            this.isVisible = false;
            this.animate('out');
        }
    }

    // ========================================================================
    showTooltip(isClick: boolean)
    {
        if (isClick === this.showOnHover)
        {
            return;
        }

        this.mouseTimeout  = setTimeout(() =>
        {
            this.isVisible = true;
            this.animate('in');
        }, 75);
    }
    // ========================================================================
}
