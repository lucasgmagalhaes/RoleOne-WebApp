import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "exp"
})
export class ExperiencePipe implements PipeTransform {
  transform(value: number | string): string {
    let number = +value;
    if (number < 1000) return number.toString();
    else if (number <= 999999) {
      if (number % 1000 > 0) return "+" + this.roundNumber(number, 1000) + "K";
      return this.roundNumber(number, 1000) + "K";
    } else if (number <= 999999999) {
      // 1.000.000(Milion)
      if (number % 1000000 > 0)
        return "+" + this.roundNumber(number, 1000000) + "M";
      return this.roundNumber(number, 1000000) + "M";
    } else if (number <= 999999999999) {
      // 1.000.000.000(Bilion)
      if (number % 1000000000 > 0)
        return "+" + this.roundNumber(number, 1000000000) + "B";
      return this.roundNumber(number, 1000000000) + "B";
    } else if (number <= 999999999999999) {
      // 1.000.000.000.000(Trilion)
      if (number % 1000000000000 > 0)
        return "+" + this.roundNumber(number, 1000000000000) + "T";
      return this.roundNumber(number, 1000000000000) + "T";
    }
    return "∞";
  }

  private roundNumber(divisor: number, dividend: number): string {
    return (divisor / dividend).toPrecision(1);
  }
}
