import {  PipeTransform, Pipe } from '@angular/core';
import { IDrawer } from './drawer';

@Pipe({
    name: 'drawerFilter'
})
export class DrawerFilterPipe implements PipeTransform {

    transform(value: IDrawer[], filter: string): IDrawer[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((product: IDrawer) =>
            product.Descricao_transacao.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}