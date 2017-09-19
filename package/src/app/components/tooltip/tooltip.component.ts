import { Component, OnInit, ElementRef, ViewChild, Renderer2, Input } from '@angular/core';

import { ITooltip } from 'app/interfaces/tooltip';

import * as config from 'app/consts/animation-effects';

import anime    from 'assets/js/anime.min';
import charming from 'assets/js/charming.min';

@Component({
    selector   : 'app-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls  : ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit
{
    @Input() tooltip    : ITooltip;

    private mouseTimeout: any;
    private isVisible   = false;

    @ViewChild('trigger')     trigger    : ElementRef;
    @ViewChild('triggerSpan') triggerSpan: ElementRef;
    @ViewChild('base')        base       : ElementRef;
    @ViewChild('deco')        deco       : ElementRef;
    @ViewChild('letters')     letters    : ElementRef;
    @ViewChild('svg')         svg        : ElementRef;
    @ViewChild('svgPath')     svgPath    : ElementRef;
    @ViewChild('contentDiv')  contentDiv : ElementRef;

    // Event Listeners
    mouseEnter: any;
    mouseLeave: any;
    touchStart: any;
    touchEnd  : any;

    // ========================================================================
    constructor(private renderer: Renderer2)
    { }

    // ========================================================================
    ngOnInit()
    {
        // if (this.svg)
        // {
        //     this.svgPath    = this.svg.nativeElement.childElementCount > 1 ?
        //                         Array.from(this.svg.nativeElement.querySelectorAll('path')) :
        //                         this.svg.nativeElement.querySelector('path');
        // }

        if (this.tooltip.type === 'walda')   // if (this.letters)
        {
            // Create spans for each letter
            charming(this.letters.nativeElement);

            // Redefine content
            this.contentDiv = this.letters;
        }

        // Add Event Listeners
        this.mouseEnter = this.renderer.listen(this.trigger.nativeElement, 'mouseenter', this.onMouseEnter.bind(this));
        this.mouseLeave = this.renderer.listen(this.trigger.nativeElement, 'mouseleave', this.onMouseLeave.bind(this));
        this.touchStart = this.renderer.listen(this.trigger.nativeElement, 'touchstart', this.onMouseEnter.bind(this));
        this.touchEnd   = this.renderer.listen(this.trigger.nativeElement, 'touchend',   this.onMouseLeave.bind(this));
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
    OnDestroy()
    {
        // Simply calling the event listeners will remove them
        this.mouseEnter();
        this.mouseLeave();
        this.touchStart();
        this.touchEnd();
    }

    // ========================================================================
    onMouseEnter()
    {
        // Show Tooltip

        this.mouseTimeout  = setTimeout(() =>
        {
            this.isVisible = true;
            this.animate('in');
        }, 75);
    }

    // ========================================================================
    onMouseLeave()
    {
        // Hide Tooltip

        clearTimeout(this.mouseTimeout);
        if (this.isVisible)
        {
            this.isVisible = false;
            this.animate('out');
        }
    }
    // ========================================================================
}
