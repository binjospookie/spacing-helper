export interface CreateSpacing {
  readonly factor?: number;
  readonly divisor?: number;
  readonly precision?: number;
  readonly units?: string;
}

export interface SpacingFn {
  (): string;
  (first: number): string;
  (first: number, second: number): string;
  (first: number, second: number, third: number): string;
  (first: number, second: number, third: number, fourth: number): string;
}
export declare const createSpacing: (data: CreateSpacing) => SpacingFn;
