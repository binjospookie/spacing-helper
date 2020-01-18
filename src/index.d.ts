type S0 = string;
type S1 = string;
type S2 = string;
type S3 = string;

export interface ISpacingFn {
  (first: number): S0;
  (first: number, second: number): S1;
  (first: number, second: number, third: number): S2;
  (first: number, second: number, third: number, fourth: number): S3;
}
export declare const createSpacing: (spacing?: number) => ISpacingFn;
