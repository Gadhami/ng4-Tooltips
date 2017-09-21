import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent     } from './app.component';

// ========================================================================
describe('AppComponent', () =>
{
    let component: AppComponent;
    let fixture  : ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas     : [NO_ERRORS_SCHEMA],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() =>
    {
        fixture   = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    // ========================================================================
    it('should create the app', async(() =>
    {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    // ========================================================================
    it(`should have tooltips array`, async(() =>
    {
        const app = fixture.debugElement.componentInstance;
        expect(app.tooltips.length).toBeGreaterThan(0);
    }));

    // ========================================================================
    it('should render UI', async(() =>
    {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('input#cb-hover')).toBeTruthy();
        expect(compiled.querySelector('div.grid')).toBeTruthy();
    }));
    // ========================================================================
});
