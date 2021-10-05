import { Pipe,PipeTransform } from "@angular/core";


@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform ( esVuela: boolean ): string {

        return  ( esVuela ) ? 'vuela' : 'no vuela';
    }

}