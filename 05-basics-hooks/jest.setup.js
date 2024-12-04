import { TextEncoder, TextDecoder } from 'util';
import "@testing-library/jest-dom";
import "@testing-library/react";
import "whatwg-fetch";


global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
