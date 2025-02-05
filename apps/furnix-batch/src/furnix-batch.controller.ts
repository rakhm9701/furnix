import { Controller, Get, Logger } from '@nestjs/common';

import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { BatchService } from './furnix-batch.service';

@Controller()
export class BatchController {
	private logger: Logger = new Logger('BatchController');

	constructor(private readonly batchService: BatchService) {}

	// @Interval(10000)
	// handleInterval() {
	// 	this.logger.debug('INTERVAL TEST');
	// }

	@Timeout(1000)
	handleTimeout() {
		this.logger.debug('BATCH SERVER READY');
	}

	//batchRollback
	@Cron('00 * * * * *', { name: 'BATCH_ROLLBACK' })
	public async batchRollback() {
		try {
			this.logger['context'] = 'BATCH_ROLLBACK';
			this.logger.debug('EXCUTED');
			await this.batchService.batchRollback();
		} catch (err) {
			this.logger.error(err);
		}
	}

	//batchTopProducts
	@Cron('20 * * * * *', { name: 'BATCH_TOP_PRODUCTS' })
	public async batchTopProducts() {
		try {
			this.logger['context'] = 'BATCH_TOP_PRODUCTS';
			this.logger.debug('EXCUTED');
			await this.batchService.batchTopProducts();
		} catch (err) {
			this.logger.error(err);
		}
	}

	//batchTopAgents
	@Cron('40 * * * * *', { name: 'BATCH_TOP_AGENTS' })
	public async batchTopDesigners() {
		try {
			this.logger['context'] = 'BATCH_TOP_DESIGNERS';
			this.logger.debug('EXCUTED');
			await this.batchService.batchTopDesigners();
		} catch (err) {
			this.logger.error(err);
		}
	}

	@Get()
	getHello(): string {
		return this.batchService.getHello();
	}
}
