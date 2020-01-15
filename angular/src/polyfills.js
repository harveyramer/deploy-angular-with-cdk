"use strict";
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
require("zone.js/dist/zone"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWZpbGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9seWZpbGxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSDs7R0FFRztBQUVILCtFQUErRTtBQUMvRSxvRUFBb0U7QUFFcEU7Ozs7R0FJRztBQUNILDhFQUE4RTtBQUU5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQUVIOztHQUVHO0FBQ0gsNkJBQTJCLENBQUUsNkJBQTZCO0FBRzFEOztHQUVHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIGFuZCBpcyBsb2FkZWQgYmVmb3JlIHRoZSBhcHAuXG4gKiBZb3UgY2FuIGFkZCB5b3VyIG93biBleHRyYSBwb2x5ZmlsbHMgdG8gdGhpcyBmaWxlLlxuICpcbiAqIFRoaXMgZmlsZSBpcyBkaXZpZGVkIGludG8gMiBzZWN0aW9uczpcbiAqICAgMS4gQnJvd3NlciBwb2x5ZmlsbHMuIFRoZXNlIGFyZSBhcHBsaWVkIGJlZm9yZSBsb2FkaW5nIFpvbmVKUyBhbmQgYXJlIHNvcnRlZCBieSBicm93c2Vycy5cbiAqICAgMi4gQXBwbGljYXRpb24gaW1wb3J0cy4gRmlsZXMgaW1wb3J0ZWQgYWZ0ZXIgWm9uZUpTIHRoYXQgc2hvdWxkIGJlIGxvYWRlZCBiZWZvcmUgeW91ciBtYWluXG4gKiAgICAgIGZpbGUuXG4gKlxuICogVGhlIGN1cnJlbnQgc2V0dXAgaXMgZm9yIHNvLWNhbGxlZCBcImV2ZXJncmVlblwiIGJyb3dzZXJzOyB0aGUgbGFzdCB2ZXJzaW9ucyBvZiBicm93c2VycyB0aGF0XG4gKiBhdXRvbWF0aWNhbGx5IHVwZGF0ZSB0aGVtc2VsdmVzLiBUaGlzIGluY2x1ZGVzIFNhZmFyaSA+PSAxMCwgQ2hyb21lID49IDU1IChpbmNsdWRpbmcgT3BlcmEpLFxuICogRWRnZSA+PSAxMyBvbiB0aGUgZGVza3RvcCwgYW5kIGlPUyAxMCBhbmQgQ2hyb21lIG9uIG1vYmlsZS5cbiAqXG4gKiBMZWFybiBtb3JlIGluIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9icm93c2VyLXN1cHBvcnRcbiAqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBCUk9XU0VSIFBPTFlGSUxMU1xuICovXG5cbi8qKiBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIHRoZSBmb2xsb3dpbmcgZm9yIE5nQ2xhc3Mgc3VwcG9ydCBvbiBTVkcgZWxlbWVudHMgKi9cbi8vIGltcG9ydCAnY2xhc3NsaXN0LmpzJzsgIC8vIFJ1biBgbnBtIGluc3RhbGwgLS1zYXZlIGNsYXNzbGlzdC5qc2AuXG5cbi8qKlxuICogV2ViIEFuaW1hdGlvbnMgYEBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc2BcbiAqIE9ubHkgcmVxdWlyZWQgaWYgQW5pbWF0aW9uQnVpbGRlciBpcyB1c2VkIHdpdGhpbiB0aGUgYXBwbGljYXRpb24gYW5kIHVzaW5nIElFL0VkZ2Ugb3IgU2FmYXJpLlxuICogU3RhbmRhcmQgYW5pbWF0aW9uIHN1cHBvcnQgaW4gQW5ndWxhciBET0VTIE5PVCByZXF1aXJlIGFueSBwb2x5ZmlsbHMgKGFzIG9mIEFuZ3VsYXIgNi4wKS5cbiAqL1xuLy8gaW1wb3J0ICd3ZWItYW5pbWF0aW9ucy1qcyc7ICAvLyBSdW4gYG5wbSBpbnN0YWxsIC0tc2F2ZSB3ZWItYW5pbWF0aW9ucy1qc2AuXG5cbi8qKlxuICogQnkgZGVmYXVsdCwgem9uZS5qcyB3aWxsIHBhdGNoIGFsbCBwb3NzaWJsZSBtYWNyb1Rhc2sgYW5kIERvbUV2ZW50c1xuICogdXNlciBjYW4gZGlzYWJsZSBwYXJ0cyBvZiBtYWNyb1Rhc2svRG9tRXZlbnRzIHBhdGNoIGJ5IHNldHRpbmcgZm9sbG93aW5nIGZsYWdzXG4gKiBiZWNhdXNlIHRob3NlIGZsYWdzIG5lZWQgdG8gYmUgc2V0IGJlZm9yZSBgem9uZS5qc2AgYmVpbmcgbG9hZGVkLCBhbmQgd2VicGFja1xuICogd2lsbCBwdXQgaW1wb3J0IGluIHRoZSB0b3Agb2YgYnVuZGxlLCBzbyB1c2VyIG5lZWQgdG8gY3JlYXRlIGEgc2VwYXJhdGUgZmlsZVxuICogaW4gdGhpcyBkaXJlY3RvcnkgKGZvciBleGFtcGxlOiB6b25lLWZsYWdzLnRzKSwgYW5kIHB1dCB0aGUgZm9sbG93aW5nIGZsYWdzXG4gKiBpbnRvIHRoYXQgZmlsZSwgYW5kIHRoZW4gYWRkIHRoZSBmb2xsb3dpbmcgY29kZSBiZWZvcmUgaW1wb3J0aW5nIHpvbmUuanMuXG4gKiBpbXBvcnQgJy4vem9uZS1mbGFncy50cyc7XG4gKlxuICogVGhlIGZsYWdzIGFsbG93ZWQgaW4gem9uZS1mbGFncy50cyBhcmUgbGlzdGVkIGhlcmUuXG4gKlxuICogVGhlIGZvbGxvd2luZyBmbGFncyB3aWxsIHdvcmsgZm9yIGFsbCBicm93c2Vycy5cbiAqXG4gKiAod2luZG93IGFzIGFueSkuX19ab25lX2Rpc2FibGVfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gdHJ1ZTsgLy8gZGlzYWJsZSBwYXRjaCByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAqICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZGlzYWJsZV9vbl9wcm9wZXJ0eSA9IHRydWU7IC8vIGRpc2FibGUgcGF0Y2ggb25Qcm9wZXJ0eSBzdWNoIGFzIG9uY2xpY2tcbiAqICh3aW5kb3cgYXMgYW55KS5fX3pvbmVfc3ltYm9sX19VTlBBVENIRURfRVZFTlRTID0gWydzY3JvbGwnLCAnbW91c2Vtb3ZlJ107IC8vIGRpc2FibGUgcGF0Y2ggc3BlY2lmaWVkIGV2ZW50TmFtZXNcbiAqXG4gKiAgaW4gSUUvRWRnZSBkZXZlbG9wZXIgdG9vbHMsIHRoZSBhZGRFdmVudExpc3RlbmVyIHdpbGwgYWxzbyBiZSB3cmFwcGVkIGJ5IHpvbmUuanNcbiAqICB3aXRoIHRoZSBmb2xsb3dpbmcgZmxhZywgaXQgd2lsbCBieXBhc3MgYHpvbmUuanNgIHBhdGNoIGZvciBJRS9FZGdlXG4gKlxuICogICh3aW5kb3cgYXMgYW55KS5fX1pvbmVfZW5hYmxlX2Nyb3NzX2NvbnRleHRfY2hlY2sgPSB0cnVlO1xuICpcbiAqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBab25lIEpTIGlzIHJlcXVpcmVkIGJ5IGRlZmF1bHQgZm9yIEFuZ3VsYXIgaXRzZWxmLlxuICovXG5pbXBvcnQgJ3pvbmUuanMvZGlzdC96b25lJzsgIC8vIEluY2x1ZGVkIHdpdGggQW5ndWxhciBDTEkuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQVBQTElDQVRJT04gSU1QT1JUU1xuICovXG4iXX0=