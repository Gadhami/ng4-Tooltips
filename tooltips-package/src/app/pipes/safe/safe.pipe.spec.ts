// import { SafePipe     } from './safe.pipe';
// import { DomSanitizer } from '@angular/platform-browser';

// // ========================================================================
// describe('SafePipe', () =>
// {
//     let pipe: SafePipe;

//     beforeEach(() =>
//     {
//         pipe = new SafePipe(new MockDomSanitizer());
//     });

//     // ========================================================================
//     it('create an instance', () =>
//     {
//         pipe = new SafePipe(new MockDomSanitizer());
//         expect(pipe).toBeTruthy();
//     });

//     // ========================================================================
//     it('should return the "pretty" name of the keyboard layout which corresponds to the passed name', () =>
//     {
//         // Invalid values
//         expect(pipe.transform('<script>alert("caccou")</script>')).toBe('');

//         // Valid values
//         expect(pipe.transform(''      )).toBe('');
//         expect(pipe.transform('0'     )).toBe('0');
//         expect(pipe.transform('azerty')).toBe('Azerty');
//     });
//     // ========================================================================
// });
