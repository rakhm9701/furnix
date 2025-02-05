import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { LikeService } from './like/like.service';
import { LikeModule } from './like/like.module';
import { ViewResolver } from './view/view.resolver';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { ViewModule } from './view/view.module';
import { ViewResolver } from './view/view.resolver';

@Module({
  imports: [MemberModule, LikeModule, ViewModule, AuthModule, ProductModule],
  providers: [LikeService, ViewResolver, AuthService]
})
export class ComponentsModule {}
