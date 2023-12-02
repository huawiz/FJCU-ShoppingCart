import { get } from 'lodash-es';

export class TransactionTypeDto {
  public id: number;
  public name: string;
  constructor(payload: unknown) {
    this.id = get(payload, 't_id') || get(payload, 'id') || -1;
    this.name = get(payload, 't_name') || get(payload, 'name') || '';
  }
}
