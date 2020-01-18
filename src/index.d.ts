type S0 = string;
type S1 = string;
type S2 = string;
type S3 = string;
type S4 = string;

export interface ISpacingFn {
  (): S0;
  (first: number): S1;
  (first: number, second: number): S2;
  (first: number, second: number, third: number): S3;
  (first: number, second: number, third: number, fourth: number): S4;
}
export declare const createSpacing: (spacing?: number) => ISpacingFn;
