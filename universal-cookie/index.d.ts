// Type definitions for universal-cookie 2.1.2
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
declare module 'universal-cookie';

interface Cookies { 
	new (cookieHeader?: string | object): Cookies;
		 
	get(name: string, options?: CookieGetOptions): string; 
	getAll(options?: CookieGetOptions): any; 
	set(name: string, value: string, options?: CookieUpdateOptions): void;  
	remove(name: string, options?: CookieUpdateOptions): void;  
}
interface CookieGetOptions {  
	doNotParse?: boolean 
}
interface CookieUpdateOptions { 
	path?: string, 
	expires?: Date, 
	maxAge?: number, 
	domain?: string, 
	secure?: boolean, 
	httpOnly?: boolean,
}
