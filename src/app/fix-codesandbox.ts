import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import 'reflect-metadata';

/* Initialize TestBed when using jest-lite on codesandbox.
 * Cf. https://github.com/codesandbox/codesandbox-client/issues/4987 */
if (!navigator.userAgent.toLowerCase().includes('jsdom')) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
}
