import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "commaSeparation"
})
export class CommaSeparationPipe implements PipeTransform {
  transform(value: string[], dotAtEnd?: boolean): string {
    let splited = "";
    if (value === undefined || value === null) {
      return "";
    }

    value.map(val => {
      if (val[0] !== undefined && val[0].trim() !== "") {
        splited += val + ", ";
      }
    });

    if (splited === "") {
      return "";
    }

    if (dotAtEnd) {
      return splited.substr(0, splited.length - 2) + ".";
    }
    return splited.substr(0, splited.length - 2);
  }
}
