export interface CreateSpacing {
  readonly factor?: number;
  readonly divisor?: number;
  readonly precision?: number;
  readonly units?: string;
}

type S0 = string;
type S1 = string;
type S2 = string;
type S3 = string;
type S4 = string;

export interface SpacingFn {
  (): string;
  (first: number): string;
  (first: number, second: number): string;
  (first: number, second: number, third: number): string;
  (first: number, second: number, third: number, fourth: number): string;
}
export declare const createSpacing: (data: CreateSpacing) => SpacingFn;
