import { Module } from "@nestjs/common";
import { InventoryController } from "./inventory.controller";
import { InventoryRepository } from "./inventory.repository";

@Module({
  controllers: [InventoryController],
  providers: [InventoryRepository],
})
export class InventoryModule {}
