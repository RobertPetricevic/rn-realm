import Realm, { ObjectSchema } from 'realm';

export class BookSchema extends Realm.Object<BookSchema> {
  name!: string;
  price?: number;

  static schema: ObjectSchema = {
    name: 'BookSchema',
    properties: {
      name: { type: 'string', indexed: true },
      price: 'int?',
    },
  };
}
