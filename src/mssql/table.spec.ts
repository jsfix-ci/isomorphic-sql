import { Table } from './table';

describe(Table.name, () => {
    it('scripts a table definition with no constraints', () => {
        const table = Table.named('food')
            .column('id', 'int', {identity: [1,1], primaryKey: true})
            .column('name', 'nvarchar(255)')
            .column('inventory_id', 'int', { nullable: true });            

        expect(table.create()).toMatchSnapshot();
    });

    it('scripts a table definition with constraints', () => {
        const table = Table.named('food')
            .column('id', 'int')
            .column('name', 'nvarchar(255)')
            .column('plu', 'nvarchar(255)')
            .column('inventory_id', 'int')
            .pk('id')
            .fk('inventory_id', 'inventory', 'id')
            .unique('name', 'plu');

        expect(table.create()).toMatchSnapshot();
    });
});