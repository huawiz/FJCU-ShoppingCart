import { Router, Request, Response } from 'express';
import { TransactionTypeModel } from '../model/TransactionType';
import { TransactionTypeDto } from '../dto/TransactionType.dto';

export class TransactionTypeController {
  private readonly model: TransactionTypeModel;
  constructor(router: Router) {
    this.model = new TransactionTypeModel();
    this.api(router);
  }
  private api(router: Router) {
    router.get('/api/transaction', async (req: Request, res: Response) => {
      const result: TransactionTypeDto[] = await this.model.getAll();
      res.status(200).json({ success: true, content: result });
    });
  }
}
