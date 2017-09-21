import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipComponent                 } from './tooltip.component';

// ============================================================================
describe('TooltipComponent', () =>
{
    let component: TooltipComponent;
    let fixture  : ComponentFixture<TooltipComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TooltipComponent]
        })
        .compileComponents();
    }));

    beforeEach(() =>
    {
        fixture   = TestBed.createComponent(TooltipComponent);
        component = fixture.componentInstance;

        component.showOnHover = true;
        component.tooltip     = {
            id: 'cora',
            text: 'Tooltip title',
            content: 'This is a test tooltip',
            cssClass: 'cora',
            type: 'cora',

            svgPath: [{
                cssClass: '',
                d: 'M 199,21.9 C 152,22.2 109,35.7 78.8,57.4 48,79.1 29,109 29,142 29,172 45.9,201 73.6,222 101,243 140,' +
                   '258 183,260 189,270 200,282 200,282 200,282 211,270 217,260 261,258 299,243 327,222 354,201 371,172 ' +
                   '371,142 371,109 352,78.7 321,57 290,35.3 247,21.9 199,21.9 Z'
            }]
        };

        fixture.detectChanges();
    });

    // ============================================================================
    it('should be created', () =>
    {
        expect(component).toBeTruthy();

        expect(component.trigger).toBeTruthy();
        expect(component.contentDiv).toBeTruthy();
        expect(component.triggerSpan).toBeTruthy();
    });

    // ============================================================================
    it('should display tooltip', () =>
    {
        component.showTooltip(false);

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div[role="tooltip"]')).toBeTruthy();
        expect(compiled.querySelector('div[role="tooltip"]').textContent.trim()).toBe('Tooltip title');
        expect(compiled.querySelector('div.content'        ).textContent.trim()).toBe('This is a test tooltip');
    });

    // ============================================================================
    it('should hide tooltip', () =>
    {
        component.showTooltip(false);
        component.hideTooltip(false);

        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div.base').style.opacity).toBeFalsy();
    });
    // ============================================================================
});
